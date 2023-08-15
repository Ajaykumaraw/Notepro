import AsyncStorage from '@react-native-async-storage/async-storage';  
import axios from 'axios';

const domain = "http://192.168.145.89:8080"

/* GET ALL USERS */
export const getAll_Users = async(userData) =>{
  const fetchpostURL = "http://192.168.145.89:8080/api/v1/users"
  let resData = '';

  await axios({ method: 'get', url: fetchpostURL }).then(function (response) {
     resData = response.data;
     //  console.log('from utils',response)
     })
     .catch((error)=>{
       return error
     })
   
  return resData
}


/* GET USER REGISTER */
export const register = async function (userReg) {
 const fetchpostURL = "http://192.168.145.89:8080/api/v1/auth/signup"

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



/* GET USER LOGIN */
export const Login = async(userData) =>{
  const fetchpostURL = "http://192.168.145.89:8080/api/v1/auth/login"
  let resData = '';

  await axios({ method: 'post', url: fetchpostURL, data: {
       "name" : userData.username,
       "password" : userData.password
     }
   }).then(function (response) {
     resData = response.data;
       console.log('from utils',resData)
       
     })
     .catch((error)=>{
       return error
     })
    
  return resData.name
}



/* GET ALL POST */
export const getPosts = async(userData) =>{
  const fetchpostURL = "http://192.168.145.89:8080/api/v1/post/getPostByUser"
  let resData = '';

  await axios({ method: 'post', url: fetchpostURL, data: {
       "createdBy" : userData,
     }
   }).then(function (response) {
     resData = response.data;
       console.log('from utils',resData)
       
     })
     .catch((error)=>{
       return error
     })
    
  return resData
}

/* CRETE POST */

export const createPost =  async (createPostData) =>{
  console.log('in util',createPostData,)
  console.log('domain',`${domain}/api/v1/post`)
  const fetchpostURL = `${domain}/api/v1/post`
  let resData = '';
  await axios({
    method: 'post',
    url: fetchpostURL,
    data: {
      "postTitle" : createPostData.postTitle,
      "postDesciption" : createPostData.postDesciption,
      "createdBy" : createPostData.createdBy
    }
  }).then(function (response) {
    resData = response;
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
   
 return resData;
}


/* ADD USER TO FOLLOWING LIST */
export const addToFollowingList = (id)=>{
  console.log('in following api'+id)
    //api call to add to following list  
  return id;
}






export function AsyncStoragefunction(key,value){
        console.log('set storage'+key+''+value)
    const storeData = async (key,value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(key, jsonValue);
        } catch (e) {
          // saving error
        }
      };
}


export function readAsyncStoragefunction(key){
    console.log('get storage'+key)
    const getData = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key);
          console.log('get storage'+value)
          if (value !== null) {
            // value previously stored
            return value;
          }
        } catch (e) {
          // error reading value
        }
      };

}


export function setItemM(key,data){
    data = JSON.stringify(data);
    return AsyncStorage.setItem(key,data);
}

export function getItemM(key){
  return new Promise((resolve,reject)=>{
    AsyncStorage.getItem(key).then( data =>{
      console.log('in get item',data)
      resolve(JSON.parse(data))
    })
  })
}
