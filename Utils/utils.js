import AsyncStorage from '@react-native-async-storage/async-storage';  
import axios from 'axios';


export const register = async(userData) =>{
  const fetchpostURL = "http://192.168.145.89:8080/api/v1/auth/signup"
  let resData = '';

  await axios({ method: 'post', url: fetchpostURL, data: {
       "name" : userData.username,
       "email" : userData.email,
       "password" : userData.password
     }
   }).then(function (response) {
     resData = response.data;
     //  console.log('from utils',response)
     })
     .catch((error)=>{
       return error
     })
    if(resData === 'Registration successful..') return true
  return false
}




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




export const getPost = async(userData) =>{
  const fetchpostURL = "http://192.168.145.89:8080/api/v1/post/getPostByUser"
  let resData = '';

  await axios({ method: 'post', url: fetchpostURL, data: {
       "createdBy" : userData.username,
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
