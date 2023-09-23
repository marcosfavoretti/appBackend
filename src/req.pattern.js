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
        Authorization: `Bearer ..bYqpZwNCRciHb4EX6o3YvKX1mzVLJzUu0WrLfY3HLc8vlNCHnmgaWwjC8ztqq_bsFoqmBhcu7Yh-BAuApI_fnlWFUpwn6n-xhdpDgRY-Ch0xWSd9Dz_98uPxm542rKiq3urjleLeHyQrrNchxZQMQXITBPISj6rrknz5KH-VUNPrg45FzL9g-b_Oo8_8kJS_HT_7gqjpcvCZ-h-pvAByHsXeY3vaMYGk6N6ZUUCyhL04_2VKfIgw9ndur4tMFN5XK_fssxbuKZz0W-kxdMreev6K2I_w4MBqatH3p7dkX11TeT_wiODAV2o68h6FJyGF9vYbaDD5FZjI3s4bPmqcLA`,
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
