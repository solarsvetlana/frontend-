const input = prompt("Введите целое число:");
const num = Number(input);

if (Number.isInteger(num) && Number.isFinite(num)) {
  const digitsArray = String(Math.abs(num)).split('').map(Number);
  console.log(digitsArray);
} else {
  console.error("Ошибка: введите корректное целое число.");
}
