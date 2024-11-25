//Mostrar en consola la secuencia de Fibonacci:
// Entre los números 0 y 1000.
let fibonacciArray = [];
let a = 0;
let b = 1;
for (let i = 0; a <= 1000; i++) {
  fibonacciArray.push(a);
  let temp = a;
  a = b;
  b = temp + b;
}

// Números pares entre 0 y 1000.
let paresArray = [];
for (let i = 0; i <= 1000; i++) {
  if (i % 2 === 0) {
    paresArray.push(i); 
  }
}

// Números impares entre 0 y 1000.
let imparesArray = [];
for (let i = 0; i <= 1000; i++) {
  if (i % 2 !== 0) {
    imparesArray.push(i); 
  }
}

// Mostrar los resultados en la consola
console.log("Secuencia de Fibonacci entre 0 y 1000:", fibonacciArray);
console.log("Números pares entre 0 y 1000:", paresArray);
console.log("Números impares entre 0 y 1000:", imparesArray);

let pokemon = [
    'Pikachu',
    'Charmander',
    'Bulbasaur',
    'Squirtle'
 ];
 
 // Convertir todos los elementos del arreglo a mayúsculas
 let pokemonMayusculas = pokemon.map(pokemon => pokemon.toUpperCase());
 
 console.log("Arreglo de pokemon en mayuscula ",pokemonMayusculas);

 let pokemonTipo = [
    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego',
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
];

// Array para almacenar los Pokémon de tipo 'Fuego'
let pokemonFuego = [];

// Iterar sobre el arreglo de Pokémon
for (let i = 0; i < pokemonTipo.length; i++) {
  if (pokemonTipo[i].tipo === 'Fuego') {
    pokemonFuego.push(pokemonTipo[i]);  // Agregar el Pokémon de tipo 'Fuego' al nuevo arreglo
  }
}

console.log("Pokemons de tipo fuego: ",pokemonFuego);
