const chalk = require('chalk');
const chineseRegex = /[\u4e00-\u9fff]|[\u3400-\u4dbf]|[\u{20000}-\u{2a6df}]|[\u{2a700}-\u{2b73f}]|[\u{2b740}-\u{2b81f}]|[\u{2b820}-\u{2ceaf}]|[\uf900-\ufaff]|[\u3300-\u33ff]|[\ufe30-\ufe4f]|[\uf900-\ufaff]|[\u{2f800}-\u{2fa1f}]/u;
const findChineseChar = (str) =>{
    let arrStr = str.split(" ");
    let finalStr = '';
    for(let i = 0;i<arrStr.length;i++){
        let dumpStr = '';
        dumpStr = arrStr[i];
        if(chineseRegex.test(dumpStr)){
            dumpStr = (chalk.red(dumpStr)); 
        }
        finalStr += dumpStr+' '; 
    }
    return finalStr;
}

module.exports = findChineseChar;