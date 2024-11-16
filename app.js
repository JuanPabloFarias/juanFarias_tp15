const peli = require('./peliculas.js');
const fs = require('fs')
const msg = fs.readFileSync("./mensaje.txt",'utf-8');
console.log(peli);
console.log(msg);
