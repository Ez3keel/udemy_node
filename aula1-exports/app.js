// primeira maneira de importar
// const mod1 = require('./mod1');
// console.log(mod1.falaNome());

// Importando via desestruturação
// const  { nome, sobrenome, falaNome} = require('./mod1');
// console.log(nome, sobrenome);

const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(response.data))
const p1 = new Pessoa('Luiz');



console.log(p1);