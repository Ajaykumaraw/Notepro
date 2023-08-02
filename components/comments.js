import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image,SafeAreaView,FlatList} from 'react-native';
import sampleData from '../SampleData/sampleData';
import {connect} from 'react-redux'
import postReducer from '../stores/Post/postReducer';


export function Comments({showcmt,commentsData,name,id}) {
  console.log('from comment',showcmt)
  return (
   <>
    <SafeAreaView style={styles.list}>
          <FlatList style={styles.Items}
            data={showcmt.reverse()}
            renderItem={({item}) =>  
            <View style={styles.itemContainer}>
                <View style={styles.itemTitle}>
                {/* profile pic */}
                  <View style={styles.postUserImg}>
                    <Image style={styles.itemInit} source={ require('../assets/profile.jpeg')}></Image>
                      {/* <Text style={styles.itemInit}>{item.profile_picture}</Text> */}
                  </View>
                  <View style={styles.postDetails}>
                      <Text style={styles.userName}>{name}</Text>
                      <Text style={styles.userNamesub}>{id}</Text>
                  </View>
                 
                </View>
                <Text onPress={()=>navigation.navigate('SinglePost',{
                          itemData: item,
                        })} style={styles.postDesciption}>{item}
                </Text>
            </View>}
            key={item => item._id}
          />
       </SafeAreaView>
   </>
  )

  }
  



const mapStateToProps = state =>({
 commentsData : state.postReducer.post,

})



export default connect (mapStateToProps)(Comments)





const styles = StyleSheet.create({
    container:{
        backgroundColor : 'orange',
        height:100,
        flexDirection:'row',
        borderWidth:1,
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
        fontSize: 14,  
        color:"#fff",
        marginLeft:70,
        marginRight:10,
        lineHeight:20,
        borderBottomColor:'#ced6d0',
        padding:8,
        borderBottomWidth:1,
        backgroundColor:'#703a03',
        borderRadius:15
       
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
