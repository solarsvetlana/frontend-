function getStringsOnly(arr) {
  return arr.filter(item => typeof item === 'string');
}
const simpleArray = [42, "hello", true, "world", 3.14];
console.log("Задание 1:");
console.log("Исходный массив:", simpleArray);
console.log("Только строки:", getStringsOnly(simpleArray));


function extractStrings(arr) {
  let result = [];

  for (let item of arr) {
    if (typeof item === 'string') {
      result.push(item);
    } else if (Array.isArray(item)) {
      result = result.concat(extractStrings(item));
    }
  }

  return result;
}
const complexArray = [123, "apple", ["banana", 456, ["orange", "kiwi"]], "grape"];
console.log("\nЗадание 2:");
console.log("Исходный массив:", complexArray);
console.log("Все строки:", extractStrings(complexArray));

function splitToDigits(input) {
  let number = Number(input);

  if (!Number.isFinite(number) || !Number.isInteger(number)) {
    console.error("Ошибка: нужно ввести целое число.");
    alert("Ошибка: нужно ввести целое число.");
    return;
  }

  let digits = Math.abs(number).toString().split('').map(d => Number(d));
  console.log("\nЗадание 3:");
  console.log(`Цифры числа ${number}:`, digits);
  alert(`Цифры числа ${number}: [${digits.join(', ')}]`);
  return digits;
}
let userInput = prompt("Задание 3: Введите целое число");
splitToDigits(userInput);
