let axios = require('axios')

async function teste(){
    axios.defaults.headers.common['User-Agent'] = undefined;

    const a = {
    
      headers:{
        "Accept":"application/json; odata.metadata=minimal",
        "OData-MaxVersion": 4.0,
        "OData-Version": 4.0,
        "Authorization": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL29yZzVjYmU2MjE0LmFwaS5jcm0yLmR5bmFtaWNzLmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzU5ZDRmMjQ5LTA1MjAtNDZjZi1iNmIyLTg3M2Q1ZGE1NDNmZS8iLCJpYXQiOjE2OTQ1Nzg0OTgsIm5iZiI6MTY5NDU3ODQ5OCwiZXhwIjoxNjk0NTg0MDI5LCJhY3IiOiIxIiwiYWlvIjoiQVRRQXkvOFVBQUFBc2w0RjBsWE1USDJTTXZqVUtid25vWkxUOEhpaE4wZEhQZXd2WkVONUMrWWJvUnFVVjh2WmRUS1kxRDRsUFg1OSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI1MWY4MTQ4OS0xMmVlLTRhOWUtYWFhZS1hMjU5MWY0NTk4N2QiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkpVTklPUiIsImdpdmVuX25hbWUiOiJNQVJDT1MiLCJpcGFkZHIiOiIyODA0OjE0ZDo5MGIyOjg1YjE6MjliZTphMjQwOjExZWI6OGQ5OCIsIm5hbWUiOiJNQVJDT1MgRkFWT1JFVFRJIEpVTklPUiIsIm9pZCI6IjlmMjExYzJiLTJkYmEtNDZhMS04ZjAxLTc2Yzc1NGRlMmQ1NSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS05NDk0NTE5ODYtMzQ5ODYxNDI2MC04NjE5MjkyMjktMTQwMzI2IiwicHVpZCI6IjEwMDMyMDAxMEI5MkYwMjQiLCJyaCI6IjAuQVFZQVNmTFVXU0FGejBhMnNvYzlYYVZEX2djQUFBQUFBQUFBd0FBQUFBQUFBQUFHQU1zLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IjJVdGhJTng4SFVZVU1EeTRZMHVFYUxzQ3NvZVplNE5sb3IyYVV6aXhPS0EiLCJ0aWQiOiI1OWQ0ZjI0OS0wNTIwLTQ2Y2YtYjZiMi04NzNkNWRhNTQzZmUiLCJ1bmlxdWVfbmFtZSI6IjIxMDQ4MkBmYWNlbnMuYnIiLCJ1cG4iOiIyMTA0ODJAZmFjZW5zLmJyIiwidXRpIjoiZDRzZ094T2xma2VuMzRPaDFNTWVBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYWUiOiIxIn0.Y75kMDgbu9NPpCBdy0UToz2pbH-G_CkO6xIw1fvputZ2WyyYdCiWv3S_6Bv3rQgpZ4C7pKg8HsRzTKNTAZT6YJ7nhGLnw-VddK9cMYOAjBdeg_GXAEoY3wZEiMkF3KqBa0-qiWovCDnmXKEz8DmZ57Hkl2wQ3eZgEgwYCB2FoqNbDQgjxbp48_BtPIaH7CRzsBl-6QkHnsPbSxHb1yYt5X_KinIiXZkjseAWB6Q2Ej3rZ8NCpB6KIgs8DUFl0rrmZiZ-Ukq9aB1f4qVyM1yNdMWsjJLCx1ERPThUhL5J49VN9Io6MCMzr_NxlxwclYKFG1iKJKpJfZHa8Hg1LNrGXA',
        "Content-Type": "application/json; charset=utf-8"
      },


    }
    try{
      let url = encodeURI("https://org5cbe6214.api.crm2.dynamics.com/api/data/v9.2/cr0bb_novatabelas")
      let res = await axios.post(url, {
        "cr0bb_teste":"teste3"

      },{
        "Accept":"application/json; odata.metadata=minimal",
        "OData-MaxVersion": 4.0,
        "OData-Version": 4.0,
        "Authorization": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL29yZzVjYmU2MjE0LmFwaS5jcm0yLmR5bmFtaWNzLmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzU5ZDRmMjQ5LTA1MjAtNDZjZi1iNmIyLTg3M2Q1ZGE1NDNmZS8iLCJpYXQiOjE2OTQ1Nzg0OTgsIm5iZiI6MTY5NDU3ODQ5OCwiZXhwIjoxNjk0NTg0MDI5LCJhY3IiOiIxIiwiYWlvIjoiQVRRQXkvOFVBQUFBc2w0RjBsWE1USDJTTXZqVUtid25vWkxUOEhpaE4wZEhQZXd2WkVONUMrWWJvUnFVVjh2WmRUS1kxRDRsUFg1OSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI1MWY4MTQ4OS0xMmVlLTRhOWUtYWFhZS1hMjU5MWY0NTk4N2QiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkpVTklPUiIsImdpdmVuX25hbWUiOiJNQVJDT1MiLCJpcGFkZHIiOiIyODA0OjE0ZDo5MGIyOjg1YjE6MjliZTphMjQwOjExZWI6OGQ5OCIsIm5hbWUiOiJNQVJDT1MgRkFWT1JFVFRJIEpVTklPUiIsIm9pZCI6IjlmMjExYzJiLTJkYmEtNDZhMS04ZjAxLTc2Yzc1NGRlMmQ1NSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS05NDk0NTE5ODYtMzQ5ODYxNDI2MC04NjE5MjkyMjktMTQwMzI2IiwicHVpZCI6IjEwMDMyMDAxMEI5MkYwMjQiLCJyaCI6IjAuQVFZQVNmTFVXU0FGejBhMnNvYzlYYVZEX2djQUFBQUFBQUFBd0FBQUFBQUFBQUFHQU1zLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IjJVdGhJTng4SFVZVU1EeTRZMHVFYUxzQ3NvZVplNE5sb3IyYVV6aXhPS0EiLCJ0aWQiOiI1OWQ0ZjI0OS0wNTIwLTQ2Y2YtYjZiMi04NzNkNWRhNTQzZmUiLCJ1bmlxdWVfbmFtZSI6IjIxMDQ4MkBmYWNlbnMuYnIiLCJ1cG4iOiIyMTA0ODJAZmFjZW5zLmJyIiwidXRpIjoiZDRzZ094T2xma2VuMzRPaDFNTWVBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYWUiOiIxIn0.Y75kMDgbu9NPpCBdy0UToz2pbH-G_CkO6xIw1fvputZ2WyyYdCiWv3S_6Bv3rQgpZ4C7pKg8HsRzTKNTAZT6YJ7nhGLnw-VddK9cMYOAjBdeg_GXAEoY3wZEiMkF3KqBa0-qiWovCDnmXKEz8DmZ57Hkl2wQ3eZgEgwYCB2FoqNbDQgjxbp48_BtPIaH7CRzsBl-6QkHnsPbSxHb1yYt5X_KinIiXZkjseAWB6Q2Ej3rZ8NCpB6KIgs8DUFl0rrmZiZ-Ukq9aB1f4qVyM1yNdMWsjJLCx1ERPThUhL5J49VN9Io6MCMzr_NxlxwclYKFG1iKJKpJfZHa8Hg1LNrGXA',
        "Content-Type": "application/json; charset=utf-8"
      })
      console.log(res)
    }
    catch(err){
      console.log('agr vai o fetch')
      let fetch = require('node-fetch')

      fetch(url, {
        method: 'GET', // Altere o método HTTP conforme necessário (GET, POST, PUT, etc.)
        headers: headers, // Passe os cabeçalhos aqui, se necessário
        // body: JSON.stringify({ key: 'value' }), // Se você estiver fazendo uma solicitação POST com um corpo JSON
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json(); // Parse a resposta JSON, se aplicável
        })
        .then(data => {
          console.log(data); // Faça algo com os dados recebidos
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });    }

    return 
  }
  teste()