import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Homescreen';
import SplashScreen from './SplashScreen';
import Register from './Register'
import Login from './Login'
import WritePost from './WritePost'
import Profile from './Header/Profle';
import SearchCom from '../components/searchCom';
import SinglePost from './SinglePost';
import BottomModal from '../components/BottomModal';
import ResetPassword from './ResetPassword';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux'
import {tabReducer} from '../stores/tab/tabReducer'
import {getItemM, setItemM} from '../Utils/utils'
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../SampleData/constants';




const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()


export  function HomeStack({islogin,username}) {
  console.log('from home',islogin )
      setItemM('username_',username)
    //  setItemM('isloginV',islogin)
      const [isLogedin,setIslogedin] = useState(false)
    let islogin_ ;
     getItemM("isloginV").then((res)=>{
      console.log('in home ',res)
      setIslogedin(res)
      })
   
      
        // AsyncStorage.setItem('user',username);  
        
  //console.log("in home"+islogin,username)  
  

   const isRegister = useSelector(state=>state.isRegister);

   const [isSignedIn,setisSignedIn] = useState(false);
  
  return (
    <>
    <NavigationContainer> 
    { islogin ||isLogedin ?(<><Drawer.Navigator  
                              screenOptions={{
                                drawerStyle: {
                                  width: '70%',
                                
                                },
                              }}
                              initialRouteName='HomeScreen'
                              drawerContent={(props) => <Profile {...props}/>}> 
                               <Drawer.Screen   options={{headerShown: false}}  name="SplashScreen" component = {SplashScreen} /> 
                                <Drawer.Screen name="HomeScreen" component = {HomeScreen}
                                    options={{headerShown: false}} 
                                 >    
                                  </Drawer.Screen> 
                                <Drawer.Screen   options={{headerShown: false}}  screenOptions={{ presentation: 'modal' }} name="WritePost" component = {WritePost} /> 
                                <Drawer.Screen   options={{headerShown: false}}  screenOptions={{ presentation: 'modal' }} name="SearchScreen" component = {SearchCom} /> 
                                <Drawer.Screen   options={{headerShown: false}}  screenOptions={{ presentation: 'modal' }} name="SinglePost" component = {SinglePost} /> 
                             </Drawer.Navigator> 
                              </>):( 
                              <>
                                <Stack.Navigator>
                                      <Stack.Screen  options={{headerShown: false}}  name="Login" component = {Login}  /> 
                                      <Stack.Screen  options={{headerShown: false}}  name="Register" component = {Register} /> 
                                      <Stack.Screen  options={{headerShown: false}}  name="ResetPassword" component = {ResetPassword}  /> 
                                </Stack.Navigator>
                               </>)
                              }
    </NavigationContainer> 
  
    </>
  );
}

const mapStateToProps = state =>({
  islogin: state.loginReducer.user.islogin,
  username: state.loginReducer.user.username,

})

function mapDispatchToProps(dispatch){
return {
 userRegDispatch : (userReg) => {return dispatch(RegisterAction(userReg))}

}
}

export default connect (mapStateToProps,mapDispatchToProps)(HomeStack)


