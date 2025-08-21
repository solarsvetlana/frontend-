let num1 = 3;
let num2 = -2;

if (typeof num1 === 'number' && typeof num2 === 'number') {
    let result = 1;
    let isNegative = num2 < 0;
    let absPower = Math.abs(num2);

    for (let i = 0; i < absPower; i++) {
        result *= num1;
    }

    if (isNegative) {
        result = 1 / result;
    }
    let standardResult = num1 ** num2;

    console.log(`Result through the cycle: ${result}`);
    console.log(`Result through the standart operation: ${standardResult}`);
    console.log(`Do the results match? ${result === standardResult}`);
} else {
    console.log('Both variables must be numbers');
}
