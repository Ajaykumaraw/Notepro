import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image,SafeAreaView,ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { postCreate } from '../contollers/post';
import Header from '../components/Header';
import IonAntDesignicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import {connect} from 'react-redux'
import {createPostAction} from '../stores/Post/postActions'
import {getItemM} from '../Utils/utils'



export  function WritePost({navigation,createPostActionD}) {
  const [postTitle, setpostTitle] = useState("");
  const [postDesciption, setpostDesciption] = useState("");
  const [createdBy, setcreatedBy] = useState("");
  const [loading, isloading] = useState(false);
  const postDispatch = useDispatch();

  getItemM("username_").then((res)=>{
    console.log('in home ',res)
    setcreatedBy(res)
    })
    .catch((error)=>{
      console.log(error)
    })


const createPostData =   {
  "postTitle" : "postTitle",
  "postDesciption" : postDesciption,
  "createdBy" : createdBy
}



  const submit = ()=>{
        const P_ = postCreate(postTitle,postDesciption,createdBy)
        P_.then((response)=>{
          console.log(response)
          if(response.status == 201) navigation.navigate('HomeScreen');
          alert(response.data);
        }).catch((error)=>{alert(error)})
       
  } 

  const SavePost=()=>{
    createPostActionD(createPostData)
    navigation.navigate('HomeScreen')
  }

    return (
      loading?<View
          style={{justifyContent: 'center', alignItems: 'center',height:'100%',backgroundColor:''}}>
          <ActivityIndicator size="large" color="#0000ff" />
     </View>:
      <View style={styles.container}>
        <View style={styles.writeScreenHeader}>
            <TouchableOpacity onPress={()=> navigation.navigate('HomeScreen')}>
                <Text style={styles.writeScreenHeaderTextLeft}><AntDesign name='arrowleft' size={24} color={'#fff'}/></Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>SavePost()}>
                <Text style={styles.writeScreenHeaderTextRight}><MaterialCommunityIcons name='content-save' size={20} color={'#fff'}/>Save</Text>
            </TouchableOpacity>
        </View>
        <SafeAreaView>
        <View style={styles.itemTitle}>
                {/* profile pic */}
                  <View style={styles.postUserImg}>
                    <Image style={styles.itemInit} source={ require('../assets/profile.jpeg')}></Image>
                      {/* <Text style={styles.itemInit}>{item.profile_picture}</Text> */}
                  </View>
                  <View style={styles.postDetails}>
                      <Text style={styles.userName}>Jatin</Text>
                      <Text style={styles.userNamesub}>Pull stack divloper</Text>
                  </View>
                </View>
        <View style={styles.writingArea}>
            <TextInput style={styles.writingAreaText}
             placeholder = "Share your thoughts..."
             multiline={true}
             numberOfLines={10}
             placeholderTextColor = "#9c5806"
             autoCapitalize = "none"
              onChangeText = {(text) => setpostDesciption(text)}
            ></TextInput>
        </View>
      </SafeAreaView>
      </View>
    );
  }


const mapStateToProps = state =>({
  islogin: state.tabReducer.IsLogin,
  username: state.tabReducer.user,

})

function mapDispatchToProps(dispatch){
return {
  createPostActionD : (userReg) => {return dispatch(createPostAction(userReg))}

}
}

export default connect (mapStateToProps,mapDispatchToProps)(WritePost)











  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    writeScreenHeader:{
      height:100,
      backgroundColor:'orange',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingTop:30,
    },
    writeScreenHeaderTextLeft:{
      marginLeft:13,
    },
    writeScreenHeaderTextLeft:{
      marginLeft:13,
    },
    writeScreenHeaderTextRight:{
        marginRight:20,
        paddingHorizontal:10,
        paddingVertical:5,
        borderColor:'#9c5806',
        borderWidth:2,
        borderRadius:10,
    },
    writingArea:{
      height:'80%',
    },
    writingAreaText:{
      height:'100%',
      borderColor:'gray',
      borderWidth:2,
      color:'#9c5806',
      fontSize:16,
      padding:15,
      paddingBottom:20,
      textAlignVertical: 'top',
      textAlign:'justify',
      overflow:'scroll'
    },
    itemTitle:{
      height:'15%',
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal:10,    
    },
    postDetails:{
      marginLeft:10,
      flexDirection:'column',
    },
    postUserImg:{
      width:50,
      height:50,
      borderWidth:1,
      borderColor:'orange',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:25,
      overflow:'hidden',
      backgroundColor:'orange',
    },
    itemInit:{
      width:49,
      height:49,
    },
    userName: {  
      fontSize: 16,  
      color:"#3b1a0c",
      fontWeight:500,
    },
  });








//   <TextInput style = {styles.input}
//   underlineColorAndroid = "transparent"
//   placeholder = "post title"
//   name = "post"
//   placeholderTextColor = "#9a73ef"
//   autoCapitalize = "none"
//   onChangeText = {(text) => setpostTitle(text)}/>
// <TextInput style = {styles.input}
//   underlineColorAndroid = "transparent"
//   placeholder = "post discreption"
//   placeholderTextColor = "#9a73ef"
//   autoCapitalize = "none"
//   onChangeText = {(text) => setpostDesciption(text)}/>

// <TextInput style = {styles.input}
//   underlineColorAndroid = "transparent"
//   placeholder = "created by"
//   placeholderTextColor = "#9a73ef"
//   autoCapitalize = "none"
//   onChangeText = {(text) => setcreatedBy(text)}/>

// <TouchableOpacity
//   style = {styles.submitButton}
//   onPress = {() => submit() }>
//   <Text style = {styles.submitButtonText}> Create post </Text>
// </TouchableOpacity>