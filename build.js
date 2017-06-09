const { writeFile, readFileSync } = require('fs');
const yaml = require('yaml');

let base = require('./themes/panda-base.json');
const template = require('./themes/template');
const markdown = require('./themes/markdown');
const jsdoc = require('./themes/jsdoc');
const workbench = require('./themes/workbench');
const themeColors = yaml.eval(readFileSync('themes/colors.yml', 'utf-8')).themeColors;

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
