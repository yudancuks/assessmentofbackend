const findCommonItems = require("./findCommonItems");

test('find common items from two array', () => {
    const arrayA = [1, 2, 3, 4];
    const arrayB = [4, 5, 6, 7];
    expect(findCommonItems(arrayA,arrayB)).toEqual([4])
})