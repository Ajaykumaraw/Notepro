import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View,ActivityIndicator, TouchableOpacity,FlatList, TextInput, SafeAreaView, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import sampleData from '../SampleData/sampleData'
import {connect} from 'react-redux'
import userReducer from '../stores/user/userReducer'
import {getAllUser} from '../stores/user/userActions'


export function SearchCom({navigation,usersData,getUserDispatch}) {

  const [usData, setUsData] = useState()
  const [isloading,setisloading] = useState(true)


 
  useEffect(()=>{
    getUserDispatch()
    setUsData(...usersData.user)
    console.log('in useeffect',usersData.user)
    setisloading(false)
  },[])
  return (
    <>
      <View style={styles.container}>
          <Text onPress={()=>navigation.navigate('HomeScreen')} style={styles.containerBackButton}>Back</Text>
          <TextInput placeholder='Search...' style={styles.containerSearch}></TextInput>
      </View>
      <Text style={styles.people}>People</Text>
      <SafeAreaView>
      {isloading?
       <View style={{flex:1,height:'100%',alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator size={'large'} color={'orange'}></ActivityIndicator> 
       </View> 
       :
        <FlatList style={styles.Items}
            data={usersData.user}
            renderItem={({item}) =>  <>
            <View style={styles.profileContainer}>
              {/* user Initial */}
                <View style={styles.userIntial}><Text  style={styles.userIntialText}>{`${item.name[0]}`}</Text></View>
                    <View style={styles.ProfileDetailsSub} >
                        <View style={styles.ProfileDetails} >
                              <Text style={styles.profileName} >{item.name}</Text>
                              <Text style={styles.profileName} >{item._id}</Text>
                              <Text style={styles.profileName} >{item.follower}</Text>
                        </View>
                        <View style={styles.profileBtnContainer}>
                          <TouchableOpacity style={styles.profileFollowBtn}>
                            <Text style={styles.profileFollowBtnText}>Follow</Text>
                          </TouchableOpacity>
                        </View>
                    </View>
            </View>
            
        </>
            }
            key={item => item._id}
          />}
      </SafeAreaView>
    </>
  )
}




const mapStateToProps = state =>({
  usersData: state.userReducer,

})

function mapDispatchToProps(dispatch){
return {
 getUserDispatch : () => {return dispatch(getAllUser())}

}
}


export default connect (mapStateToProps,mapDispatchToProps)(SearchCom)






const styles = StyleSheet.create({
  container:{
      backgroundColor : 'orange',
      height:100,
      flexDirection:'row',
      alignItems:'center',
      paddingTop:30,
  },
  containerBackButton:{
        width:50,
        height:40,
        borderColor:'#fff',
        borderRadius:10,
        fontWeight:'600',
        marginLeft:10,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10,
        backgroundColor:'#f27805',
        color:'#fff',
  },
  containerSearch:{
      width:'75%',
      height:40,
      borderColor:'#fff',
      marginLeft:10,
      paddingLeft:10,
      color:'#fff',
  },
  people:{
    padding:10,
    fontSize:16,
    fontWeight:'500'
  },
  profileContainer:{
    height:100,
    flexDirection:'row',
  },
  userIntial:{
    width:50,
    height:50,
    borderRadius:25,
    borderColor:'orange',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:5
  },
  userIntialText:{
    fontSize:16,
    fontWeight:'700',
    color:'orange',
    textTransform: 'capitalize',
  },
  ProfileDetailsSub:{
    height:100,
    width:'80%',
    flexDirection:'row',
    borderBottomColor:'gray',
    borderBottomWidth:1
  },
  ProfileDetails:{
    margin:10,
    width:'60%',
    paddingLeft:10
  },
  profileName:{
    fontWeight:'500',
    textTransform:'capitalize'

  },
  profileBtnContainer:{
    width:50,
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:28
  },
  profileFollowBtn:{
    width:60,
    height:50,
    borderColor:'#fff',
    borderRadius:10,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#f27805',
  },
  profileFollowBtnText:{
    color:'#fff'
  }

  
})
