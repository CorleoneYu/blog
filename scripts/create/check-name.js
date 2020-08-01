/**
 * 组件名校验和重名校验
 */
const fs = require('fs');
const config = require('./config');

const checkName = (componentName) => {
  if (!componentName) {
    console.error('组件名不能为空');
    return false;
  }

  // 组件名规范检查
  const nameRule = (componentName) => {
    if (/^[-a-zA-Z]*$/.test(componentName)) {
      return true;
    }

    return false;
  };

  if (!nameRule(componentName)) {
    console.error('请使用合法的组件名称作为参数.');
    console.error('合法名称为: 字母, `-` 的组合.');
    console.error('如: `component-demo` 等.');
    return false;
  }

  // 组件是否已存在检查
  const nameExist = (componentName) => {
    const existedName = fs.readdirSync(config.componentsTargetDir, 'utf-8');
    return existedName.some((name) => componentName.toLowerCase() === name.toLowerCase());
  };
  if (nameExist(componentName)) {
    console.error(`组件 \`${componentName}\` 已经存在, 请换个名称.`);
    return false;
  }

  return true;
};

module.exports = checkName;
