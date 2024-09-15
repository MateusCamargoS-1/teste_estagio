// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const fibonacci = (num) => {
    if (num < 0) {
        return false;
    }

    let num1 = 0;
    let num2 = 1;

    while (num1 <= num) {
        if (num1 === num) {
            return true;
        }
        
        let procNum = num1 + num2;

        num1 = num2;
        num2 = procNum;
    }

    return false;
}

const num = 23;

if (fibonacci(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
}
