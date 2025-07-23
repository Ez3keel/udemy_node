// EXEMPLO COM VARIÁVEIS
// const nome = 'Luiz';

// const sobrenome = 'Miranda';

// const falaNome = () => nome + ' ' + sobrenome 
// // Primeira forma de importação
// // module.exports.nome = nome;

// // Segunda forma por valor de referência a exports
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = "O que eu quiser"

// console.log(exports);


// EXEMPLO COM CLASSES

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;