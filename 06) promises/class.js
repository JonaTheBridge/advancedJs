const millisecondsInASecond = 1000;

const seconds = 3;
const hasBeer = true;

// function iWantABeer(resolve, reject) {
//   // if (hasBeer) {
//   //   // devolvemos los datos
//   //   resolve('3.1) Camarero: Aquí está la cerveza');
//   // } else {
//   //   // devolvemos un error
//   //   reject('3.2) Camarero: No quedan, hay que pedir otra cosa');
//   // }

//   setTimeout(() => {
//     if (hasBeer) {
//       // devolvemos los datos
//       resolve('3.1) Camarero: Aquí está la cerveza');
//     } else {
//       // devolvemos un error
//       reject('3.2) Camarero: No quedan, hay que pedir otra cosa');
//     }
//   }, millisecondsInASecond * seconds);
// }

// function requestTheWaiter() {
//   return new Promise(iWantABeer); // promise === espera
//   // return new Promise((resolve, reject) => hasBeer ? resolve('3.1) Camarero: Aquí está la cerveza') : reject('3.2) Camarero: No quedan, hay que pedir otra cosa')); // promise === espera
// }

// --------------------------------------------------------

// console.log('1) Llegamos a un bar y viene el camarero.');

// const myPromise = requestTheWaiter();
// console.log('2) El camarero se va a por lo que hemos pedido');
// myPromise
//   .then((data) => {
//     console.log(data);
//     console.log('5) Bebemos cerveza');
//   })
//   .catch((err) => console.error(err));

// console.log('4) Seguimos hablando');
// console.log('5) Bebemos cerveza');

// --------------------------------------------------------


// fetch('https://restcountries.com/v3.1/all')
//   .then(res => res.json())
//   .then(formattedResponse => console.log('formattedResponse', formattedResponse))
//   .catch(err => console.error(err));

async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  console.log('async/await', data);
}

try {
  getCountries();
} catch(error) {
  console.error('Mira este error: ', error);
}
