import axios from "axios";

export const doUserRegistration = async function (userReg) {
   const fetchpostURL = "http://192.168.196.89:8080/api/v1/auth/signup"
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
      resData = response.data;
      console.log('4444'+resData)
      }).catch((error)=>{
        return error
      })

   return resData; 
  };




export const userLogin =  async (userLog) =>{
  const fetchpostURL = "http://192.168.196.89:8080/api/v1/auth/login"
  let resData = '';
  await axios({
    method: 'post',
    url: fetchpostURL,
    data: {
      "name" : userLog.username,
      "password" : userLog.password
    }
  }).then(function (response) {
    resData = response.data;
    }).catch((error)=>{
      return error
    })
  
  
 return resData;
}
