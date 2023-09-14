const { PublicClientApplication } = require('@azure/msal-node');

function teste ()  {
const tenant = '59d4f249-0520-46cf-b6b2-873d5da543fe'
const clientId = '51f81489-12ee-4a9e-aaae-a2591f45987d'
const authority = `https://login.microsoftonline.com/${tenant}`;

const scopes = ['https://org5cbe6214.api.crm2.dynamics.com/.default'];


const config = {
  auth: {
    clientId: clientId,
    authority: authority,
  },
};

const pca = new PublicClientApplication(config);

const tokenRequest = {
  scopes: scopes,
};

pca.acquireTokenByUsernamePassword({
  username: '210482@facens.br',
  password: 'Ju150203**',
  scopes: scopes,
}).then((response) => {
  console.log('Token adquirido:', response);
}).catch((error) => {
  console.error('Erro ao adquirir o token:', error);
});
}

teste()