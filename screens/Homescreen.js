import { StyleSheet, Text, TouchableOpacity, View,Button, FlatList,
  SafeAreaView,ToastAndroid, Image} from 'react-native';
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
import postReducer from '../stores/Post/postReducer'
import { useFocusEffect } from '@react-navigation/native';




export  function HomeScreen({navigation,postData}) {
 
  console.log('homescreen',postData)
  const [rs,setRs] = useState({})
  const pData = postData;
  const [likeCounter,setLikeCounter] = useState(1)
  //const [userName,setUserName] = useState();
  let userName = '';
  const handleRegister = () => {navigation.navigate('Register')}
  const handleLogin = () => {navigation.navigate('Login')}
  const handleWritePost = () => {navigation.navigate('WritePost')}

  useFocusEffect(()=>{
    setRs(postData.reverse())
   
  })

  useEffect(()=>{
   
    console.log('use effect working ********************')
  //  const myjson =  getItemM('username_')
    // myjson.then((res)=>{
    //     console.log('home',res)
    //     userName = res
    //     getPost(userName)
    //   })
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
      getPost();
  }
  function postlike(){
    setLikeCounter(likeCounter+1)
  }
 
  
  return (
      <View style={styles.container}>
      <Header navigation={navigation}></Header>
       <SafeAreaView style={styles.list}>
          <FlatList style={styles.Items}
            data={rs}
            renderItem={({item}) =>  
            <View style={styles.itemContainer}>
                <View style={styles.itemTitle}>
                {/* profile pic */}
                  <View style={styles.postUserImg}>
                    <Image style={styles.itemInit} source={ require('../assets/profile.jpeg')}></Image>
                      {/* <Text style={styles.itemInit}>{item.profile_picture}</Text> */}
                  </View>
                  <View style={styles.postDetails}>
                      <Text style={styles.userName}>{item.name}</Text>
                      <Text style={styles.userNamesub}>{item.id}</Text>
                  </View>
                  <View style={styles.postFollowBtn}>
                      <TouchableOpacity>
                          <Text style={styles.postFollowBtnText}>+ Follow</Text>
                      </TouchableOpacity>
                  </View>
                </View>
               
                <Text onPress={()=>navigation.navigate('SinglePost',{
                          itemData: item,
                        })} style={styles.postDesciption}>{item.bio}
                </Text>
                {(likeCounter>0)?<View style={styles.LikeCounder}>
                  <Text style={styles.LikeCounderCount}>{likeCounter}</Text><Icon  name='like1' size={15} color={'orange'}/>
                </View>:''}
               
                <View style={styles.postMenu} >
                    <TouchableOpacity onPress={()=>postlike()} style={styles.postMenuLinksContainer}><Icon  name='like1' size={20} color={'orange'}/></TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('SinglePost',{
                          itemData: item,
                        })}  style={styles.postMenuLinksContainer}><FontAwesome name='commenting' size={20} color={'orange'}/></TouchableOpacity>
                    <View style={styles.postMenuLinksContainer}><FontAwesome name='share-alt-square' size={20} color={'orange'}/></View>
                    <View style={styles.postMenuLinksContainer}><Ionicons name='stats-chart-sharp' size={20} color={'orange'}/></View>
                </View>
            </View>}
            key={item => item._id}
          />
       </SafeAreaView>
       <BottomMenu navigation={navigation} ></BottomMenu>
      </View>
    );
  }
  

  const mapStateToProps = state =>({
    postData: state.postReducer.post,
  
  })
 
  
  
  export default connect (mapStateToProps,)(HomeScreen)
  
  
