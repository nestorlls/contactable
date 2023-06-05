import { BASE_URI, ContactableToken } from '../config.js';
export async function apiFetsh(endPoin, { method, body, headers } = {}) {
  const token = sessionStorage.getItem(ContactableToken);

  // headers exists?
  if (token) {
    headers = {
      ...headers,
      Authorization: `Token token=${token}`,
    };
  }

  // body exists?
  if (body) {
    headers = {
      ...headers,
      'Content-Type': 'application/json',
    };
  }

  // config
  const config = {
    method: method || (body ? 'POST' : 'GET'),
    headers: headers,
    body: body ? JSON.stringify(body) : null,
  };

  // fetch
  const response = await fetch(BASE_URI + endPoin, config);

  let data;
  // errors
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }
    throw new Error(data.errors);
  }

  // success
  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }

  return data;
}
