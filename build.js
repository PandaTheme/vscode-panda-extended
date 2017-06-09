const { writeFile } = require('fs');

let base = require('./themes/panda-base.json');
const template = require('./themes/template');
const markdown = require('./themes/markdown');
const jsdoc = require('./themes/jsdoc');
const workbench = require('./themes/workbench');

const theme = {
  '$very-light-gray': '#E6E6E6',
  '$foreground': '#E1E1E1',
  '$lighter-gray': '#CDCDCD',
  '$light-gray': '#757575',
  '$comment-gray': '#676B79',
  '$gray': '#373B41',
  '$background': '#292A2B',
  '$highlight': '#4E5260',

  '$dark-gray': '#242526',
  '$very-dark-gray': '#292A2B',

  '$white': '#F3F3F3',
  '$light-midnight': '#676B79',

  '$blue': '#45A9F9',
  '$light-blue': '#7FD7FF',
  '$purple': '#B084EB',
  '$light-purple': '#BCAAFE',
  '$green': '#19f9d8',
  // rrggbbaa ftw
  '$hover-green': '#19f9d880',

  '$red': '#FF2C6D',
  '$light-red': '#FF4C6D',
  '$orange': '#FFB86C',
  '$light-orange': '#FFC990',
  '$lighter-orange': '#FFD286',

  '$pink': '#FF75B5',
  '$light-pink': '#FF9AC1',

  '$diff-green': '#00E7EB25',
  '$diff-red': '#FF46CD25',
}

base.tokenColors = base.tokenColors.concat(template, markdown, jsdoc);
Object.assign(base, workbench);

base = JSON.stringify(base, null, 2);

// Replace all colors in the string theme with actual hex color values
for (let color in theme) {
  let colorRegex = new RegExp('\\' + color, 'g');
  base = base.replace(colorRegex, theme[color]);
}

writeFile('themes/Panda Extended.json', base, err => {
  if (err) { console.warn(err); }
  console.log('Build finished');
});
