import axios from "axios";

export const postCreate =  async (posttitle,postDesciption,createdBy) =>{
    const fetchpostURL = "http://192.168.196.89:8080/api/v1/post"
    let resData = '';
    await axios({
      method: 'post',
      url: fetchpostURL,
      data: {
        "postTitle" : posttitle,
        "postDesciption" : postDesciption,
        "createdBy" : createdBy
      }
    }).then(function (response) {
      resData = response;
        console.log(response.data)
      }).catch((error)=>{
        return error
      })
     
   return resData;
  }

  export const getposts= async(createdBy)=>{
    const fetchpostURL = "http://192.168.196.89:8080/api/v1/post/getPostByUser"
    let resData = '';
    await axios({
      method: 'post',
      url: fetchpostURL,
      data: {
        "createdBy" : createdBy
      }
    }).then(function (response) {
      resData = response;
        console.log(response.data)
      }).catch((error)=>{
        return error
      })
     
   return resData;
  }

  
  export const Delete = async(id)=>{
    const fetchpostURL = `http://192.168.196.89:8080/api/v1/post/${id}`
    let resData = '';
    await axios({
      method: 'Delete',
      url: fetchpostURL,
    }).then(function (response) {
      resData = response;
        console.log(response.data)
      }).catch((error)=>{
        return error
      })
     
   return resData;
  }