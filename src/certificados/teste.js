const msal = require('@azure/msal-node');
const axios = require('axios');
const fs = require('fs')
// MSAL configuration
fs.existsSync
fs.
const config = {
    auth: {
        clientId: '51f81489-12ee-4a9e-aaae-a2591f45987d',
        authority: 'https://login.microsoftonline.com/common',
        redirectUri: 'http://localhost'
    }
};

const pca = new msal.PublicClientApplication(config);



async function main() {
    try {
        //const accessToken = await acquireToken();

        // Web API call
        const baseUrl = 'https://orgeb9683e2.api.crm.dynamics.com/api/data/v9.2';
        const headers = {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNTlkNGYyNDktMDUyMC00NmNmLWI2YjItODczZDVkYTU0M2ZlLyIsImlhdCI6MTY5MzQzMTEyMywibmJmIjoxNjkzNDMxMTIzLCJleHAiOjE2OTM0MzU3NjAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUE1OHNzUnNOSk8rNndDVGxDbisxSWNXRnJNM2trY0VsRmU0bUg3UDNwNEZ3VVhDNUJIcU93dWp1cC9FTHRHKzBMIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjE4ZmJjYTE2LTIyMjQtNDVmNi04NWIwLWY3YmYyYjM5YjNmMyIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiSlVOSU9SIiwiZ2l2ZW5fbmFtZSI6Ik1BUkNPUyIsImlwYWRkciI6IjI4MDQ6MTRkOjkwYjI6ODViMTo4MGRkOmY1OGQ6YWYyMzpjY2ZmIiwibmFtZSI6Ik1BUkNPUyBGQVZPUkVUVEkgSlVOSU9SIiwib2lkIjoiOWYyMTFjMmItMmRiYS00NmExLThmMDEtNzZjNzU0ZGUyZDU1Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTk0OTQ1MTk4Ni0zNDk4NjE0MjYwLTg2MTkyOTIyOS0xNDAzMjYiLCJwdWlkIjoiMTAwMzIwMDEwQjkyRjAyNCIsInJoIjoiMC5BUVlBU2ZMVVdTQUZ6MGEyc29jOVhhVkRfZ2tBQUFBQUFBQUF3QUFBQUFBQUFBQUdBTXMuIiwic2NwIjoiQXBwLlJlYWQuQWxsIENhcGFjaXR5LlJlYWQuQWxsIENhcGFjaXR5LlJlYWRXcml0ZS5BbGwgQ29udGVudC5DcmVhdGUgRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFmbG93LlJlYWRXcml0ZS5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR2F0ZXdheS5SZWFkLkFsbCBHYXRld2F5LlJlYWRXcml0ZS5BbGwgUGlwZWxpbmUuRGVwbG95IFBpcGVsaW5lLlJlYWQuQWxsIFBpcGVsaW5lLlJlYWRXcml0ZS5BbGwgUmVwb3J0LlJlYWQuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgVGVuYW50LlJlYWQuQWxsIFRlbmFudC5SZWFkV3JpdGUuQWxsIFVzZXJTdGF0ZS5SZWFkV3JpdGUuQWxsIFdvcmtzcGFjZS5SZWFkLkFsbCBXb3Jrc3BhY2UuUmVhZFdyaXRlLkFsbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IlNPcmE1WnFzRWlxaml0emxCZ2NRa3YxRy1fWEtaLUxJUkNrdkE4V2twT0EiLCJ0aWQiOiI1OWQ0ZjI0OS0wNTIwLTQ2Y2YtYjZiMi04NzNkNWRhNTQzZmUiLCJ1bmlxdWVfbmFtZSI6IjIxMDQ4MkBmYWNlbnMuYnIiLCJ1cG4iOiIyMTA0ODJAZmFjZW5zLmJyIiwidXRpIjoiczZEQ1RHN080a21VN29HeUlna05BUSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.Z_7GeHiV3x3Xw45ThsObjPXOOTQcqT6Vxd1Uz-WvxFTHkW03XybqICN0pacJRh-aBEzcFu88Y9DlALtYnZXEEsml5YZPio83UMl5HZdXax3isnp98DGYRZQ_xS3MtgF7yW-3cdEG39hEm9Wn8OTFxKd7t843jcwlA8oCbBlEhljY4g5jbNOKLl2cZ72feQvwTRerMps2bVWpkV-60zTxzSyHMpDMEYnkERtcmi2cYMArkL9RNbjAuH5RpyYg1enBj5PSn3qqUzscYGbJYeXFRn9Wk9KlfIHbBIqjntrL34yYVASoYXwhwP7YCQodfTfK4j976__EH6zceK7bXj1pcQ`,
            "OData-MaxVersion": '4.0',
            'OData-Version': '4.0',
            Accept: 'application/json'
        };

        const response = await axios.get(`${baseUrl}`, { headers });

        if (response.status === 200) {
            const userId = response.data.UserId;
            console.log(`Your user ID is ${userId}`);
        } else {
            console.log('Web API call failed');
            console.log('Reason:', response.statusText);
        }
    } catch (error) {
        console.error('fudeu');
    }
}

main();
