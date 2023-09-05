import { PublicClientApplication } from "@azure/msal-node";

async function getToken() {
  const msalConfig = {
    auth: {
      clientId: 'TU_CLIENT_ID',
      authority: 'https://login.microsoftonline.com/TENANT_ID',
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: true,
    },
  };

  const myMSALObj = new PublicClientApplication(msalConfig);

  const request = {
    scopes: ['user.read'], // Define los permisos que necesitas
  };

  try {
    const response = await myMSALObj.acquireTokenSilent(request);
    console.log('Token adquirido:', response.accessToken);
    return response.accessToken;
  } catch (error) {
    console.log('Error al adquirir token:', error);
    throw error;
  }
}

async function teste() {
  const token = await getToken();
  console.log('Token obtenido en la función "teste":', token);
}

teste();
