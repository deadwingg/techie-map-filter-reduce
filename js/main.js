import * as R from 'ramda';

let numeros = [5, 8, 3, 9, 0, 3, 3, 4, 4, 4, 8];
let puntajes = {
  Central: 40,
  Boca: 15,
  Temperley: 33,
  River: 22
}
let faker = [
  {
    "name": "Melyna",
    "username": "Melyna_Heidenreich",
    "email": "Melyna_Heidenreich_Bartoletti18@gmail.com",
    "dob": "1985-01-15T19:45:46.886Z",
    "phone": "1-655-696-3554",
    "address": {
      "street": "Sam Crest",
      "suite": "Apt. 442",
      "city": "Elysehaven",
      "zipcode": "41563",
      "geo": {
        "lat": "-71.6062",
        "lng": "-122.0295"
      }
    },
    "website": "queen.org",
    "company": {
      "name": "McCullough - Ondricka",
      "catchPhrase": "Fundamental global encoding",
      "bs": "robust brand eyeballs"
    }
  },
  {
    "name": "Della",
    "username": "Della.Cole13",
    "email": "Della.Cole13.Bosco74@hotmail.com",
    "dob": "1975-12-15T07:07:40.424Z",
    "phone": "696.850.0071",
    "address": {
      "street": "Tamia Fords",
      "suite": "Suite 814",
      "city": "Montanashire",
      "zipcode": "98733",
      "geo": {
        "lat": "-11.1122",
        "lng": "-152.8872"
      }
    },
    "website": "santino.org",
    "company": {
      "name": "Paucek Inc",
      "catchPhrase": "Re-contextualized zero administration concept",
      "bs": "clicks-and-mortar enable e-commerce"
    }
  },
  {
    "name": "Mariana",
    "username": "Mariana57",
    "email": "Mariana57.Robel98@hotmail.com",
    "dob": "1954-08-24T12:41:13.265Z",
    "phone": "680-128-2249",
    "address": {
      "street": "Rosenbaum Burg",
      "suite": "Apt. 426",
      "city": "South Kristamouth",
      "zipcode": "35348",
      "geo": {
        "lat": "84.5030",
        "lng": "-136.9380"
      }
    },
    "website": "jaquelin.info",
    "company": {
      "name": "Legros, Marvin and Beer",
      "catchPhrase": "Up-sized next generation focus group",
      "bs": "dynamic disintermediate portals"
    }
  },
  {
    "name": "Edmund",
    "username": "Edmund.Larkin38",
    "email": "Edmund.Larkin38.Larkin@yahoo.com",
    "dob": "1969-12-14T21:56:58.786Z",
    "phone": "1-467-567-4441 x8596",
    "address": {
      "street": "Kraig Way",
      "suite": "Apt. 498",
      "city": "East Doloresmouth",
      "zipcode": "49587",
      "geo": {
        "lat": "-38.0028",
        "lng": "89.8320"
      }
    },
    "website": "gaetano.info",
    "company": {
      "name": "Dicki, Beatty and Harvey",
      "catchPhrase": "Organized 4th generation infrastructure",
      "bs": "web-enabled expedite markets"
    }
  },
  {
    "name": "Jordon",
    "username": "Jordon.Veum",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/amywebbb/128.jpg",
    "email": "Jordon.Veum95@hotmail.com",
    "dob": "1977-06-16T03:04:39.604Z",
    "phone": "(002) 674-0715",
    "address": {
      "street": "Emmie Dale",
      "suite": "Apt. 204",
      "city": "North Ashaport",
      "zipcode": "33499-4499",
      "geo": {
        "lat": "27.7564",
        "lng": "-57.2122"
      }
    },
    "website": "dakota.biz",
    "company": {
      "name": "Larkin - Smitham",
      "catchPhrase": "Adaptive systematic collaboration",
      "bs": "compelling innovate partnerships"
    }
  }
]

///////////////////////EJEMPLOS////////////////////////////////////
const esPar = numero => numero % 2 === 0;

const clasifica = puntos => puntos > 30;
const triplicar = x => x * 3;

const aDescripcion = puntos => `Tiene hasta la fecha ${puntos} puntos.`;

const obtenerSuma = (suma, n) => suma + n;
const filtrarImpares = (impares, n) => {
  if (n % 2 === 1) impares.push(n);
  return impares;

}
console.log('Numeros pares', numeros.filter(esPar));
console.log('Numeros impares con ramda.js',R.reject(esPar, numeros));
console.log('Equipos clasificados con ramda.js',R.filter(clasifica, puntajes));

console.log('Triples con map',numeros.map(triplicar));
console.log('Objeto con valores mapeados con ramda.js',R.map(aDescripcion, puntajes));

console.log('Suma de numeros con reduce',numeros.reduce(obtenerSuma, 0));
console.log('Filtrando impares con reduce',numeros.reduce(filtrarImpares, []));

//////////////////////////ACTIVIDADES//////////////////////////////////
function obtenerNumerosUnicos(numeros) {
  //La comida va aqui
}

function obtenerUsuariosDeHotmailEnCSV(usuarios) {
  //La comida va aqui
}

document.querySelector('#numeros').innerText = JSON.stringify(numeros);
document.querySelector('#resultadoNumeros').innerText = JSON.stringify(obtenerNumerosUnicos(numeros)) || 'TODO';

document.querySelector('#usuarios').innerText = JSON.stringify(faker, null, 2);
document.querySelector('#resultadoUsuarios').innerText = obtenerUsuariosDeHotmailEnCSV(faker)  || 'TODO';
