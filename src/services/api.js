import axios from "axios";

const URL = "http://localhost:5000";

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function postSignUp(body) {
  return axios.post(`${URL}/sign-up`, body);
}

function postSignIn(body) {
  return axios.post(`${URL}/sign-in`, body);
}

function createTEST(body, token) {
  return axios.post(`${URL}/videos-test`, body, createConfig(token));
}

function create(body, token) {
  return axios.post(`${URL}/videos`, body, createConfig(token));
}

function findAll() {
  return axios.get(`${URL}/videos`);
}

function findByIdVideo(token, params) {
  return axios.get(`${URL}/videos/${params}`, createConfig(token));
}

export { postSignUp, postSignIn, create, findAll, findByIdVideo };
