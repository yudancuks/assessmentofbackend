const findCommonItems = require("./assessment/findCommonItems");
const findSmallestItems = require("./assessment/findSmallestItems");
const findChineseChar = require("./assessment/findChineseChar");

const arrA = [68168, 87954, 32158, 8774];
const arrB = [5408, 6604, 32158, 84984, 8774, 34871];
const sentence = "drinking giving jogging 喝 喝 passing 制图 giving 跑步 吃";


console.log(findCommonItems(arrA,arrB));
console.log(findSmallestItems(arrB));
console.log(findChineseChar(sentence));
