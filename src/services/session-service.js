import { BASE_URI, ContactableToken } from '../config.js';

// login
export async function login(credentials = { email, password }) {
  // fetch
  const response = await fetch(`${BASE_URI}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.erros);
  }

  sessionStorage.setItem(ContactableToken, data.token);
  return data;
}

// logout
export async function logout() {
  // get token
  const token = sessionStorage.getItem(ContactableToken);
  // fetch
  const response = await fetch(`${BASE_URI}logout`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${token}`,
    },
  });

  let data;
  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }

  if (!response.ok) {
    throw new Error(data.errors);
  }

  sessionStorage.removeItem(ContactableToken);
  return data;
}
