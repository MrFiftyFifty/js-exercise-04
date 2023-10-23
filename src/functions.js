// Создайте функцию `reverseNumber`, которая принимает число и возвращает число, записанное в обратном порядке. Например, если вход - 12345, функция должна вернуть 54321.
const reverseNumber = (num) => {
    let str = num.toString();
    let newStr = str.split('').reverse().join('');
    return Number(newStr);
};

export { reverseNumber };


//Создайте функцию `isPerfectSquare`, которая принимает число и определяет, является ли оно квадратом какого-то целого числа.
const isPerfectSquare = (num) => {
    for (let i = 0; i * i <= num; i++) {
        if (i * i === num) {
            return true;
        }
    }

    return false;
};

export { isPerfectSquare };

//Создайте функцию `factorial`, которая принимает положительное целое число и возвращает его факториал.
const factorial = (num) => {
    if (num < 0) {
        return 'Введите положительное целое число';
    }

    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
};

export { factorial };


// Создайте функцию`findGCD`, которая принимает два числа и возвращает их наибольший общий делитель.
const findGCD = (num1, num2) => {
    while (num2 !== 0) {
        const map = num2;
        num2 = num1 % num2;
        num1 = map;
    }
    return num1;
}

export { findGCD };


//Создайте функцию `mergeStrings`, которая принимает несколько строк и объединяет их в один.
const mergeStrings = (...strings) => {
    return strings.join('');
};

export { mergeStrings };