import { StyleSheet, Text, TouchableOpacity, View,Button, FlatList,
  SafeAreaView,ToastAndroid, Image, ActivityIndicator} from 'react-native';
import { useEffect, useState,React } from 'react';
import { getposts,Delete } from '../contollers/post';
import Profile from '../screens/Header/Profle';
import Search from '../screens/Header/Search';
import styles from '../screens/Styles/HomeScreenStyle';
import {getItemM} from '../Utils/utils'
import Header from '../components/Header';
import sampleData from '../SampleData/sampleData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BottomMenu from '../components/BottomMenu';
import {connect} from 'react-redux'
import {getpost} from '../stores/Post/postActions'
import { useFocusEffect } from '@react-navigation/native';
import Post from '../components/post';




export  function HomeScreen({navigation,postData,getPostDispatch}) {
  console.log("in home post",postData)
  const [rs,setRs] = useState({})
  const pData = postData.reverse();
 // pData.pop()
  const [likeCounter,setLikeCounter] = useState(1)
  const [isloading,setisloading] = useState(true)
  
  //const [userName,setUserName] = useState();
  let userName = '';
  const handleRegister = () => {navigation.navigate('Register')}
  const handleLogin = () => {navigation.navigate('Login')}
  const handleWritePost = () => {navigation.navigate('WritePost')}

  //setRs(postData)
    

  useEffect(()=>{
    
      getItemM("username_").then((res)=>{
        console.log('in home ',res)
        userName = res;
          getPostDispatch(res)
        })
        .catch((error)=>{
          console.log(error)
        })


          setisloading(true)
        setTimeout(() => {
          setisloading(false)
        }, 2000);

  },[])
  // const getPost =(userName)=>{
  //       const ps_ = getposts(userName);
  //       ps_.then((response)=>{
  //         console.log('in method',response)
  //         setRs(response.data)
  //        // alert(rs);
  //       }).catch((error)=>{alert(error)})
       
  // }
 // getPost(userName)
 
  const deletePost = (Id) =>{
    ToastAndroid.show('Post Deleted successfully!', ToastAndroid.SHORT);
      Delete(Id);
   //   getPost();
  }
  function postlike(){
    setLikeCounter(likeCounter+1)
  }
 
  
  return (
      <View style={styles.container}>
      <Header navigation={navigation}></Header>
       <SafeAreaView style={styles.list}>
       {isloading?
       <View style={{flex:1,height:'100%',alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator size={'large'} color={'orange'}></ActivityIndicator> 
       </View> 
       :
       <FlatList style={styles.Items}
            data={pData}
            renderItem={({item}) => <Post navigation={navigation} item={item}/>}
            key={item => item._id}
          />}
       </SafeAreaView>
       <BottomMenu item={userName} navigation={navigation} ></BottomMenu>
      </View>
    );
  }
  

  const mapStateToProps = state =>({
    postData: state.postReducer.post,
  
  })
 
function mapDispatchToProps(dispatch){
  return {
   getPostDispatch : (user) => {return dispatch(getpost(user))}
  
  }
  }
  
  
  export default connect (mapStateToProps,mapDispatchToProps)(HomeScreen)
  
  
