// fetch('https://restcountries.com/v3.1/all')
// fetch('https://wrongRequestToFakeApi.com/')
//   .then(res => res.json())
//   .then(formattedResponse => console.log('formattedResponse', formattedResponse))
//   .catch(err => console.error('ERROR!', err));

async function getCountries() {
  try {
    // const response = await fetch('https://restcountries.com/v3.1/all');
    const response = await fetch('https://wrongRequestToFakeApi.com/');
    const data = await response.json();
    console.log('async/await', data);
  } catch(err) {
    // console.error('ERROR!', err);
    // console.error('JSON.stringify(ERROR!)', JSON.stringify(err));
    const { cause, } = err;
    const message = `ERROR: Request to ${cause.hostname} response with code ${cause.code}`;
    throw new Error(message);
  }
}

async function runProgram() {
  try {
    await getCountries();
  } catch(myError) {
    console.error('myError', myError.message);
  }
}

runProgram();
