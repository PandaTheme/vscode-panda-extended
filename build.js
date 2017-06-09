const { writeFile, readFileSync } = require('fs');
const yaml = require('js-yaml');

let base = require('./themes/panda-base.json');
const template = yaml.safeLoad(readFileSync('themes/template.yaml', 'utf-8')).styles;
const markdown = yaml.safeLoad(readFileSync('themes/markdown.yaml', 'utf-8')).styles;
const jsdoc = yaml.safeLoad(readFileSync('themes/jsdoc.yaml', 'utf-8')).styles;
const workbench = yaml.safeLoad(readFileSync('themes/workbench.yaml', 'utf-8'));
const themeColors = yaml.safeLoad(readFileSync('themes/colors.yaml', 'utf-8')).themeColors;

base.tokenColors = base.tokenColors.concat(template, markdown, jsdoc);
Object.assign(base, workbench);

base = JSON.stringify(base, null, 2);

// Replace all colors in the string theme with actual hex color values
for (let color in themeColors) {
  base = base.replace(new RegExp(color, 'g'), themeColors[color]);
}

writeFile('dist/Panda Extended.json', base, err => {
  if (err) { console.warn(err); }
  console.log('Build finished');
});
