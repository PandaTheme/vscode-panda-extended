const fs = require('fs');

const base = require('./themes/panda-base.json');
const template = require('./themes/template.json');
const markdown = require('./themes/markdown.json');

base.settings = base.settings.concat(base.settings, template.settings, markdown.settings);

fs.writeFile('themes/Panda Extended.json', JSON.stringify(base, null, 2), err => {
  if (err) { console.warn(err); }
  console.log('Build finished');
});
