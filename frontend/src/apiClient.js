import axios from "axios";
const url = "http://localhost:3001/";

export class ApiClient {

  constructor(token){
    this.token = token;
    /* this.logoutHandler = logoutHandler; */
  }

  apiCall(method, url, data) {
    console.log(url)
    return axios({
      method,
      url,
      data,
    }).catch((error) => {
      throw error;
    });
  }

  authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        authorization: this.token
      },
      data,
    }).catch((error) => {
      if(error.response.status == 403){
        this.logoutHandler();
        return Promise.reject;
      } else{

      throw error;
      }
    });
  }

  login(email,password){
    return this.apiCall("post",`${url}login`, {
      email: email,
      password: password
    })
  }

  register(email,password){
    return this.apiCall("post",`${url}register`,{
      email:email,
      password:password
    })
  }

  getProfiles() {
    return this.authenticatedCall("get", url);
  }

  deleteProfile(id){
    return  this.authenticatedCall("delete",`${url}delete/${id}`);
  }

  addProfile(id,username,email,bio,cv,github,linkedin,portfolio,available,location,picture) {
    return this.authenticatedCall("post", url, { username,email,bio,cv,github,linkedin,portfolio,available,location,picture});
  }

  updateProfile(id,username,email,bio,cv,github,linkedin,portfolio,available,location,picture) {
    return this.authenticatedCall("put", `${url}update/${id}`, {username,email,bio,cv,github,linkedin,portfolio,available,location,picture});
  }

}