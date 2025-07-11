const frutas = ["uva", "maçã", "banana", "caqui", "melancia"];

console.log(frutas.slice(2)); // [ 'banana', 'caqui', 'melancia' ]

console.log(frutas.slice(2, 4)); // [ 'banana', 'caqui' ]

console.log(frutas.slice(1, 4)); // [ 'maçã', 'banana', 'caqui', 'melancia' ]

console.log(frutas.slice(-2)); // [ 'caqui', 'melancia' ]

console.log(frutas) // frutas não foi alterado! 

frutas.forEach(function (item, indice, array) {
    console.log(item, indice);
});
// Maçã 0
// Banana 1