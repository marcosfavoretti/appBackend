const axios = require('axios');

// TODO: Especifique o nome do ambiente Dataverse ao qual se conectar.
const resource = 'https://orgeb9683e2.api.crm.dynamics.com';

// ID do cliente e URI de redirecionamento registrados no Azure Active Directory.
//const clientId = '9f211c2b-2dba-46a1-8f01-76c754de2d55';
                 
//const redirectUri = 'http://localhost'; // Loopback para login interativo.

// Escopo da solicitação de token.
const scope = resource + '/.default';

(async () => {
  try {
    // Autenticação
    
    // Configuração do cliente
    const client = axios.create({
      baseURL: `${resource}/api/data/v9.2/`,
      timeout: 120000, // Timeout de 2 minutos para chamadas de serviço da web.
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL29yZ2ViOTY4M2UyLmFwaS5jcm0uZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNTlkNGYyNDktMDUyMC00NmNmLWI2YjItODczZDVkYTU0M2ZlLyIsImlhdCI6MTY5NDM2MTE1MywibmJmIjoxNjk0MzYxMTUzLCJleHAiOjE2OTQzNjY4MDIsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFRQ0hPdHkxWDNBQzBzUWtYU2crM2NYQkgzcUlLSzhtaHJNRnlhNGRwcnZNY1JpVlMvMlJlb2xoZHRpL285STluIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjUxZjgxNDg5LTEyZWUtNGE5ZS1hYWFlLWEyNTkxZjQ1OTg3ZCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiSlVOSU9SIiwiZ2l2ZW5fbmFtZSI6Ik1BUkNPUyIsImlwYWRkciI6IjE4Ny4xODAuMTcwLjIzMiIsIm5hbWUiOiJNQVJDT1MgRkFWT1JFVFRJIEpVTklPUiIsIm9pZCI6IjlmMjExYzJiLTJkYmEtNDZhMS04ZjAxLTc2Yzc1NGRlMmQ1NSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS05NDk0NTE5ODYtMzQ5ODYxNDI2MC04NjE5MjkyMjktMTQwMzI2IiwicHVpZCI6IjEwMDMyMDAxMEI5MkYwMjQiLCJyaCI6IjAuQVFZQVNmTFVXU0FGejBhMnNvYzlYYVZEX2djQUFBQUFBQUFBd0FBQUFBQUFBQUFHQU1zLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IjJVdGhJTng4SFVZVU1EeTRZMHVFYUxzQ3NvZVplNE5sb3IyYVV6aXhPS0EiLCJ0aWQiOiI1OWQ0ZjI0OS0wNTIwLTQ2Y2YtYjZiMi04NzNkNWRhNTQzZmUiLCJ1bmlxdWVfbmFtZSI6IjIxMDQ4MkBmYWNlbnMuYnIiLCJ1cG4iOiIyMTA0ODJAZmFjZW5zLmJyIiwidXRpIjoicE1KZHBIU3VDME9PVkNPQUNDRTZBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYWUiOiIxIn0.bYqpZwNCRciHb4EX6o3YvKX1mzVLJzUu0WrLfY3HLc8vlNCHnmgaWwjC8ztqq_bsFoqmBhcu7Yh-BAuApI_fnlWFUpwn6n-xhdpDgRY-Ch0xWSd9Dz_98uPxm542rKiq3urjleLeHyQrrNchxZQMQXITBPISj6rrknz5KH-VUNPrg45FzL9g-b_Oo8_8kJS_HT_7gqjpcvCZ-h-pvAByHsXeY3vaMYGk6N6ZUUCyhL04_2VKfIgw9ndur4tMFN5XK_fssxbuKZz0W-kxdMreev6K2I_w4MBqatH3p7dkX11TeT_wiODAV2o68h6FJyGF9vYbaDD5FZjI3s4bPmqcLA`,
        'OData-MaxVersion': '4.0',
        'OData-Version': '4.0',
        Accept: 'application/json',
        
      },
    });

    // Chamada da Web API
    const response = await client.get('WhoAmI');

    if (response.status === 200) {
      const { UserId } = response.data;
      console.log(`Seu ID de usuário é ${UserId}`);
    } else {
      console.log('Chamada da Web API falhou');
      console.log('Motivo: ' + response.statusText);
    }
  } catch (error) {
    console.error('Erro ao autenticar e chamar a Web API:', error);
  }
})();
