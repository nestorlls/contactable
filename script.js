// base uri API
const BASE_URI = 'https://contactable-js-api.herokuapp.com/';

// login
async function login(credentials = { email, password }) {
  const response = await fetch(`${BASE_URI}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const user = await response.json();
  console.log(user);
}

const credentials = {
  email: 'llanque@mail.com',
  password: '123456',
};

login(credentials);
