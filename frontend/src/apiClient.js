import axios from "axios";
const url = "http://localhost:3001/";

export class ApiClient {

  constructor(token){
    this.token = token;
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
    return this.apiCall("post",`${url}auth`, {
      email:email,
      password: password
    })
  }

  getDatas(){
    return this.authenticatedCall('get',url);
  }

  deleteDatas(id){
    return  this.authenticatedCall("delete",`${url}${id}`);
  }

  updateDatas(id,fname,sname,bio,cv,github,linkedin,portfolio,available,email,location,picture){
    return this.authenticatedCall("put",`${url}${id}`,{fname,sname,bio,cv,github,linkedin,portfolio,available,email,location,picture});
  }

}