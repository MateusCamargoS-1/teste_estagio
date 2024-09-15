// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

const verificarString = (msg) => {
    let contA = 0;

    for(let i = 0; i < msg.length; i++) {
        if(msg[i] === 'a' || msg[i] === 'A') {
            contA++;
        }
    }

    if(contA > 0) {
        console.log(`Aparece ${contA} letra 'A' nessa string.`);
    } else {
        console.log(`A letra 'A' não aparece nessa string.`);
    }
}

const msg = 'Ola Mundo';

verificarString(msg)