function extractStrings(arr) {
  return arr.filter(item => typeof item === 'string');
}
const mixedArray = [1, 'hello', 42, 'world', true];
const stringsOnly = extractStrings(mixedArray);
console.log(stringsOnly); // ['hello', 'world']
