/**
 * 在 component 目录生成组件模版代码
 */

const fs = require('fs');
const path = require('path');
const config = require('./config');

const generateFiles = (componentName, pureComponentName) => {
    const TemplateReplaceMap = [
        {
            from: 'ComponentName',
            to: pureComponentName,
        }
    ];

    /**
     * 从模版文件生成目标文件，并替换其中占位符
     */
    const generateFileFromTemplate = (originFilePath, targetFilePath) => {
        const originFileStr = fs.readFileSync(originFilePath, 'utf-8');

        let targetFileStr = originFileStr;
        TemplateReplaceMap.forEach((item) => {
            const replaceFromReg = new RegExp(`<%=${item.from}%>`, 'g');
            targetFileStr = targetFileStr.replace(replaceFromReg, item.to);
        });

        // 写到目录路径
        return fs.writeFileSync(targetFilePath, targetFileStr, 'utf-8');
    };

    // 新建目录
    const dirPath = path.join(config.componentsTargetDir, `./${componentName}`);
    fs.mkdirSync(dirPath);

    const indexTargetFilePath = path.join(dirPath, `./index.ts`);
    generateFileFromTemplate(config.indexTemplatePath, indexTargetFilePath);

    const styleTargetFilePath = path.join(dirPath, `./style.ts`);
    generateFileFromTemplate(config.styleTemplatePath, styleTargetFilePath);

    const componentTargetFilePath = path.join(dirPath, `./${pureComponentName}.tsx`);
    generateFileFromTemplate(config.componentTemplatePath, componentTargetFilePath);

    console.log('done: 生成组件代码.');

    return true;
}

module.exports = generateFiles;
