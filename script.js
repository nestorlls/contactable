import { login, logout } from './src/services/session-service.js';

const credentials = {
  email: 'llanque@mail.com',
  password: '123456',
};

async function init() {
  try {
    const user = await login(credentials);
    console.log(user);
    const message = await logout();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

init();
