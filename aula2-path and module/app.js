const callExport = require('./mod');

const cachorrinho = new callExport('Caramelo');

cachorrinho.latir();

// console.log(__filename);
// console.log(__dirname);

const path = require('path');
console.log(path.resolve(__dirname, '.','.', 'arquivos', 'imagens'));

