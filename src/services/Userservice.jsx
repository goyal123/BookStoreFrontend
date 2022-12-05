import axios from "axios";

export const loginapi=(loginobj) => {
    //let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",loginobj)
    let response = axios.post("https://localhost:44328/api/User/Login",loginobj)
  
    console.log("login in process")
    console.log(response)
    //window.localStorage.setItem('token',response.data.data);
    return response;
}

export const registerapi=(registerobj) => {
    //let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",registerobj)
    let response = axios.post("https://localhost:44328/api/User/Register",registerobj)
    console.log("Register in process")
    console.log(response)
    return response;
}