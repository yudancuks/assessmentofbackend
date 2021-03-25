const findSmallestItems = require("./findSmallestItems");

test('find smallest items from an array', () => {
    const array = [1, 2, 3, 4];
    expect(findSmallestItems(array)).toEqual(1)
})