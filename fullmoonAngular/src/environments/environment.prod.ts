import 'angular-server-side-configuration/process';

export const environment = {
  production: process.env.PROD !== 'false',
  apiAddress: process.env.API_ADDRESS || 'http://localhost:3000'
};