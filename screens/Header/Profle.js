import { StyleSheet, Text, TouchableOpacity, View,Button, FlatList,SafeAreaView, TextInput} from 'react-native';
import { useState } from 'react';
import { Image } from 'react-native'
import { DrawerItemList } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import tabReducer from '../../stores/tab/tabReducer';
import { getItemM ,setItemM} from '../../Utils/utils';
import COLORS from '../../SampleData/constants';


export default function Profile(props) {
 
  const [isactive,setactive] = useState(false);
  const [userName,setUserName] = useState('')
  // const myjson =  getItemM('username_')
  //     myjson.then((res)=>{
  //         console.log('p',res)
  //         setUserName(res)
  //       })
        
  //const user = readAsyncStoragefunction('user')
  const getdrawer = ()=>{
    setactive(!isactive);
  }

  const logout = () =>{
    setItemM('isloginV',false)
  }
  return (
    <View style={styles.menuContainer}>
        <View style={styles.menuProfileContainer}>
          <Image source={require('../../assets/profile.jpeg')}
          style={styles.menuProfileImg}/>
          <Text style={styles.profileUserName}>Jatin</Text>
        </View>
        <View style={styles.menuItemArea}>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.submitButtonText}>Profile</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.submitButtonText}>Theme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.submitButtonText}>Rating</Text>
          </TouchableOpacity>
            {/* <DrawerItemList {...props}/> */}
        </View>
        <View>
          <TouchableOpacity style={styles.menuButton} onPress={logout}>
              <Text style={styles.submitButtonText}>Logout</Text>
            </TouchableOpacity >
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  menuContainer:{
      flexDirection:'column',
      justifyContent:'space-between',
      flexDirection:'column',
      justifyContent:'space-around'
  },
  menuProfileContainer:{
      width:'100%',
      height:'20%',
      flexDirection:'row',
      alignItems:'center',
      paddingLeft:25,
      paddingTop:20,
      borderBottomColor:'lightgray',
      borderBottomWidth:1,
  },
  menuProfileImg:{
    width:50,
    height:50,
    marginRight:10,
    borderRadius:25,
  },
  line:{
    width:'100%',
    borderWidth:1,
    borderColor:'gray',
  },
  profileUserName:{
    fontSize: 18,  
    color:"black",
    fontWeight:700,
  },
  menuItemArea:{
    height:'85%',
    marginTop:50,
  },
  HomeBtn:{
    width : '100%',
    height : 30,
    borderRadius:1,
  },
  menuButton: {
    height: 50,
    alignItems:'flex-start',
    justifyContent:'center',
    paddingLeft:20,
   
 },
 submitButtonText:{
    color: '#9c5806',
    fontWeight:'700'
 },
});


