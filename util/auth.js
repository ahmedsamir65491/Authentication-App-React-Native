import axios from "axios";

const API_KEY = "AIzaSyAq8Q2zKmpmRmT-mhCdGHar4jPeIFDz23U";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
  // console.log(response.data);
}

export function createUser(email, password) {
  authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}

// export async function createUser(email, password) {
//   const response = await axios.post(
//     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
//     {
//       email: email,
//       password: password,
//       returnSecureToken: true,
//     }
//   );
// }
