import { create, ApisauceInstance } from 'apisauce';

const api:ApisauceInstance = create({
  baseURL: 'http://localhost:3131/',
});


export default api;
