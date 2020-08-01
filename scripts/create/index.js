/**
 * 通过脚本生成新组件代码
 * 使用方法举例
 * $ node path/to/script/index.js component-demo
 * 其中 `component-demo` 表示组件名称
 */

const checkName = require('./check-name');
const generateFile = require('./generate-file');

// 获取新增组件的参数
const args = process.argv.slice(2);
const [componentName] = args;

console.log(`输入的组件名称: ${componentName}. \n`);

// 名称检查
if (!checkName(componentName)) {
  return;
} else {
  console.log(`新增的组件名称: ${componentName}. \n`);
}

/**
 * 组件名格式化
 * component-demo -> ComponentDemo
 */
const pureComponentName = componentName
  .split(/[-]/)
  .map((part) => {
    return part && `${part[0].toUpperCase()}${part.slice(1)}`;
  })
  .join('');
console.log(`组件的纯字母名称: ${pureComponentName}. \n`);

// 生成组件源码
generateFile(componentName, pureComponentName);

console.log('\n新增组件模版代码完成.');
