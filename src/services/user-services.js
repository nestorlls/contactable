import { BASE_URI } from "../config.js";

// login
export async function login(credentials = { email, password }) {
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
