function extractAllStrings(arr) {
  let result = [];

  arr.forEach(item => {
    if (typeof item === 'string') {
      result.push(item);
    } else if (Array.isArray(item)) {
      item.forEach(subItem => {
        if (typeof subItem === 'string') {
          result.push(subItem);
        }
      });
    }
  });

  return result;
}
const complexArray = [1, 'apple', ['banana', 2, 'cherry'], 42, ['dog', 5], 'egg'];
const allStrings = extractAllStrings(complexArray);
console.log(allStrings); // ['apple', 'banana', 'cherry', 'dog', 'egg']
