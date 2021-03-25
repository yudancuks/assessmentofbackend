const  findSmallestItems = (arr) => {
    let obj;
    obj = arr.sort();
    return obj[0];
}

module.exports = findSmallestItems;