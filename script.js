import { login } from "./src/services/user-services.js";


const credentials = {
  email: 'llanque@mail.com',
  password: '123456',
};

login(credentials);
