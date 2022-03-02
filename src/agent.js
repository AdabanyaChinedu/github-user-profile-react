import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://api.github.com/search/';

const responseBody = res => res.body;


const requests = {
  get: url => superagent.get(`${API_ROOT}${url}`).then(responseBody)
};

const param = (user, p) => `q=${user}&page=${p}`;

const Users = {
  get: (user,page) => requests.get(`users?${param(user, page)}`)  
};

export default {
  Users
}

