const axios = require('axios');
const tenant = '59d4f249-0520-46cf-b6b2-873d5da543fe'
  const id = '51f81489-12ee-4a9e-aaae-a2591f45987d'
  const webapi = "https://org5cbe6214.api.crm2.dynamics.com/api/data/v9.2/"
  const callback = "https://localhost"
  const auth ="https://login.microsoftonline.com/common/oauth2/authorize?resource=https://org5cbe6214.api.crm2.dynamics.com"
  const refresh_token ='0.AQYASfLUWSAFz0a2soc9XaVD_okU-FHuEp5Kqq6iWR9FmH0GAMs.AgABAAEAAAAtyolDObpQQ5VtlI4uGjEPAgDs_wUA9P8_2PMiZ5TRqiT80a8wyfpZgTBMEmU5mDeLeJ1PAE7SONQfSa7gVY44ENqEw7QkjSM__23mMMWobR5GzYtWI9qNGEm6n6PwOAgLh0G-osbuhlwh1u3xQTaeriiT1z8UrzMboYPkLiNMcb0ueO3AqEaUKwu3FQ-Nxn-wajGOAtElslaLousu3oD1PAblKlTBzOAo3CaDo0GFdO526cN7Qfp0sEwrsQVkKZqdfTDeDUenIlt8d41C1yctMN5-Sl5Gq0zvmZS7MyCNK6wztbaB_0ud3-YRJkXr1Ka2tqKDiWAbA_dgXK8CVSQPNfn6-F2EmXsEaDc4wzB9mF2g0VpC2iEQEeRPwDewiEDO-ZKSsUVmEgcbM-O09QJFB0iHlpvpYwtZ6LGL4ginNcHnhLqk7FnAc9xlveeafaQx54ptZlkx0LqgXquRs45OxksBZTm9xsyEjRKtjw3nykbem-JXfKyRgDW0ODa8JWjogQqn4lH1ZH6Z8K3jTumaT4qfUFKxtWfM7-d_-VIMR53Aj1TyXOjZMLtUeDTbwZlfmEgFfMLLGMkCKCxRz1USzGC4EvaLWFLo7GayCfmsqsSWoyliA2qmDsPkQYhjhtGHoyPb3LH8_L5mBM9rSuQcQdGGQPVlkF1IMxoNA3g5aWe2W6XVLmPV1GSskhmkpWiCmiOyqSM6SEYOjrALBnx5ryRaH7H4EcJg7qFyIogV5wfa_tvFyZWYoBafiATLr8UKVaNfyJQiEipbo7GcbIErP8pWnwwGSGbRyGZeMnF1C_1M6WLJ'
  const url = `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`;
  const id_app = '9f211c2b-2dba-46a1-8f01-76c754de2d55'
  const id_data = "3331ba47-984e-ee11-94d3-002248debaec"

const teste = () => {
  //const url = "https://org5cbe6214.api.crm2.dynamics.com"
  
  // Dados a serem enviados no corpo da solicitação (x-www-form-urlencoded)
  const data = new URLSearchParams();
  data.append('client_id', id);
  data.append('scope', 'https://org5cbe6214.api.crm2.dynamics.com/.default');
  data.append('refresh_token', refresh_token);
  data.append('grant_type', 'refresh_token');
  //data.append('client_secret', 'jXoM3iz...');
  
  // Configurações da solicitação
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  
  // Realize a solicitação POST
  axios.post(url, data, config)
    .then((response) => {
      console.log('Resposta:', response.data);
    })
    .catch((error) => {
      console.error('Erro:', error);
    });
    
}
function teste2(){
  //const url = "https://org5cbe6214.api.crm2.dynamics.com"
  
  // Dados a serem enviados no corpo da solicitação (x-www-form-urlencoded)
  const data = new URLSearchParams();
  data.append('client_id', id);
  data.append('scope', 'https://org5cbe6214.api.crm2.dynamics.com/.default');
  data.append('refresh_token', refresh_token);
  data.append('grant_type', 'refresh_token');
  //data.append('client_secret', 'jXoM3iz...');
  
  // Configurações da solicitação
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  
  // Realize a solicitação POST
  axios.post(url, data, config)
    .then((response) => {
      console.log('Resposta:', response.data);
    })
    .catch((error) => {
      console.error('Erro:', error);
    });
    
}
function getToken(){
  const config = {
    url: auth,
    headers :{
        
    }
  }
  axios.get(config)

}
function azure(){
  const data = new URLSearchParams();

  data.append('client_id', '773188db-afc4-407d-8193-c0697511856d');
  data.append('scope', 'user.read');
  data.append('code', '0.AQYASfLUWSAFz0a2soc9XaVD_tuIMXfEr31AgZPAaXURhW0zAAA.AgABAAIAAAAtyolDObpQQ5VtlI4uGjEPAgDs_wUA9P9M6g1aegftQDs8nDpkll5MSAi7uMCjhhe3sLs59Ma9uioQAKs2MWiGkYzsP-zJ3_Lx8g3Ex4xJJQe2-wXT_E4zlUa_vnekGHS_OrADS23HLMG1jAOlw-Lq3-hglNLxT-ia4gYN4MqgJar3IDZM9n4TZL0WMUNRUSwuqG-CHUJhVqzmc3c0gKOB_c78Ec5aYyKk8ySYdoBLKc9swcclX9ro0gKi0CN1EZFO5Qm_9tAdABM8auyUfYcpoaswEMkQwujYi4iRafoiciaum2SHt1F_LWQCtl6ALV7Fd2C9jhE35_-zMC0haxqH-bXdlTfzp04fpVV8Gua-RMgsIO4uxIbD7eLJhw6yo2ShZbdGmqAQoRA76t5HHI8Whaw3eQp90U1acR42z8ws9S0cvu7SHsZUSBRW6aAfF6idc4A8zcurRw3Nec2QSdQcKN-u8sYw9oZnSVdJnaGK1p6opFBw_G4O9yOy_GQcKPUvCb0HIXeh8lhJdAl-3iudzm7O2RDO9ZAv72Vwxb6j6dIi3LqpAOqvauHZ1k7ikNAMFufehixzoUqdWEq3ZaWOGxncNGW3nXu9Cv1Ztg_yCDycSHy7LgAV5DNwM6ghx88hKP88E1tpJYFP4-xvcDdxxCllLUz5SqYFTq5cIUzx7E5Tnm0BTY4oHWJiZC98fTtfDbXXqZcTCcnzPNg');
  data.append('grant_type', 'authorization_code');
  data.append('redirect_uri', 'http://localhost');

  //data.append('client_secret', 'jXoM3iz...');
  
  // Configurações da solicitação
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  axios.post('https://login.microsoftonline.com/organizations/oauth2/v2.0/token',data, config)
}

teste2()
