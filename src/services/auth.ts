import axios from 'axios';
import { v4 as uuid } from 'uuid'
import { getAPIClient } from './axios';

type SignInRequestData = {
  email: string;
  password: string;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData) {
  var options = {
    method: 'POST',
    url: 'http://localhost:8000/authlogin',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {email: data.email, password: data.password}
  };
  
  var dados = await axios.request(options).then(function (response) {
    //console.log(response.data);
    return response.data;
  }).catch(function (error) {
    console.error(error);
  });

  
  return {
    
    token: dados.token,
    user: {
      name: '',
      email: dados.email,
      avatar_url: '',
      status: dados.status
    }
  }
}

// export async function recoverUserInformation() {
//   await delay()

//   return {
    
//     token: 'toker',
//     user: {
//       name: '',
//       email: 'email',
//       avatar_url: ''
//     }
//   }
// }