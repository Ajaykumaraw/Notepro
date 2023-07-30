import axios from "axios";

export const doUserRegistration = async function (userReg) {
    // Note that these values come from state variables that we've declared before
   // alert(username)
   
   const fetchpostURL = "http://192.168.196.89:8080/api/v1/auth/signup"
    // const fetchpostURL = "https://www.google.com/search?q=axios+network"
    // axios({
    //   method: 'get',
    //   url: fetchpostURL,
    //   data: { createdBy: "mongodb"}
    // })
    let resData = '';

   await axios({
      method: 'post',
      url: fetchpostURL,
      data: {
        "name" : userReg.username,
        "email" : userReg.email,
        "password" : userReg.password
      }
    }).then(function (response) {
      resData = response;
        console.log(response)
      }).catch((error)=>{
        return error
      })
     
   return resData;
    
  };


export const userLogin =  async (username,password) =>{
  const fetchpostURL = "http://192.168.196.89:8080/api/v1/auth/login"
  let resData = '';
  await axios({
    method: 'post',
    url: fetchpostURL,
    data: {
      "name" : username,
      "password" : password
    }
  }).then(function (response) {
    resData = response;
      console.log(response)
    }).catch((error)=>{
      return error
    })
   
 return resData;
}