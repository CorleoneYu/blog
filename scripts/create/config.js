const path = require('path');

const config = {
  componentTemplatePath: path.join(__dirname, './template/component.pug'),
  styleTemplatePath: path.join(__dirname, './template/style.pug'),
  indexTemplatePath: path.join(__dirname, './template/index.pug'),
  componentsTargetDir: path.join(__dirname, '../../src/components'),
};

module.exports = config;
