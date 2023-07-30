import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image,ScrollView, SafeAreaView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Comments from '../components/comments';
import Header from '../components/Header';
import BottomModal from '../components/BottomModal';


export default function SinglePost({route,navigation}) {
  const [isvisible,setisVisible] = useState(false)
    const {itemData} = route.params;
  return (
    <>
    <View style={styles.container}>
        <View style={styles.left}>
            <TouchableOpacity onPress={()=> navigation.navigate('HomeScreen')}>
                <Icon style={styles.textColor} name='arrowleft' size={22} color={'orange'}/>
            </TouchableOpacity>
        </View>
      
        <View style={styles.right}>
            <TouchableOpacity onPress={()=>{setisVisible(!isvisible)}}>
                    <Entypo style={styles.textColor} name='dots-three-vertical' size={22} color={'orange'}/>
                </TouchableOpacity>
        </View> 
    </View>
    <ScrollView>
    <View style={styles.itemContainer}>
                <View style={styles.itemTitle}>
                {/* profile pic */}
                  <View style={styles.postUserImg}>
                    <Image style={styles.itemInit} source={ require('../assets/profile.jpeg')}></Image>
                      {/* <Text style={styles.itemInit}>{item.profile_picture}</Text> */}
                  </View>
                  <View style={styles.postDetails}>
                      <Text style={styles.userName}>{itemData.name}</Text>
                      <Text style={styles.userNamesub}>{itemData.id}</Text>
                  </View>
                  <View style={styles.postFollowBtn}>
                      <TouchableOpacity>
                          <Text style={styles.postFollowBtnText}>+ Follow</Text>
                      </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.postDesciption}>{itemData.bio}</Text>
               
                <View style={styles.postMenu} >
                    <View onPress={()=>postlike} style={styles.postMenuLinksContainer} ><Icon name='like1' size={20} color={'orange'}/></View>
                    <View style={styles.postMenuLinksContainer}><FontAwesome name='commenting' size={20} color={'orange'}/></View>
                    <View style={styles.postMenuLinksContainer}><FontAwesome name='share-alt-square' size={20} color={'orange'}/></View>
                    <View style={styles.postMenuLinksContainer}><Ionicons name='stats-chart-sharp' size={20} color={'orange'}/></View>
                </View>
            </View>
            <View>
                 <Text style={styles.commentsLable}>Comments</Text>
                 <View style={styles.commentContainer}>
                    <Comments comments={itemData.comments}></Comments>
                </View>
            </View>
       
     {(isvisible)?<BottomModal></BottomModal>:''}
     </ScrollView>
    </>
    
  )
}



const styles = StyleSheet.create({
    container:{
        backgroundColor : 'orange',
        height:100,
        flexDirection:'row',
        alignItems:'center',
        paddingTop:30,
        justifyContent:'space-between'
    },
    left:{
        width:55,
        height:40,
        borderColor:'#fff',
        borderRadius:10,
        color:'#fff',
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        width:100,
        height:40,
        alignItems:'center',
        justifyContent:'center',    
    },
    titleText:{
        color:'black',
        fontSize:24,
        fontWeight:'700',
    },
    titleTextPro:{
        color:'#fff',
    },
    right:{
        width:55,
        height:40,
        borderColor:'#fff',
        borderRadius:10,
        marginRight:10,
        alignItems:'center',
        justifyContent:'center',
       
    },
    textColor:{
        color:'#fff',

    },
    itemContainer:{
        justifyContent:'space-between',
        margin:5,
        backgroundColor:'#ffffff',
        overflow:'hidden',
    },
      itemTitle:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,    
        paddingTop:10 
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
      commentsLable: {  
        fontSize: 16,  
        color:"#3b1a0c",
        fontWeight:500,
        paddingLeft:10,
      },
      userNamesub:{
        fontSize: 12,  
        color:"#3b1a0c",
        fontWeight:500,
      },
      postFollowBtn:{
        marginLeft:70,
        padding:5,
        backgroundColor:'#f27805',
        borderRadius:5,
      },
      postDesciption:{
        fontSize: 15,  
        color:"#808782",
        marginTop:10,
        marginHorizontal:10,
        lineHeight:22,
        textAlign:'justify',
        overflow:'hidden',
        borderBottomColor:'#ced6d0',
        paddingBottom:5,
        borderBottomWidth:1,
       
      },
      postMenu:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:5,
        marginBottom:5,
      },
      postMenuLinksContainer:{
          width:50,
          height:40,
          textAlign:'center',
          alignItems:'center',
          justifyContent:'center',
          borderRadius:5
      },
      postMenuLinks:{
          textAlign:'center',
          color:'#fff',
          fontSize:10,
          fontWeight:500,
      },
      commentContainer:{

      }

    
})
