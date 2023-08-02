import { Link } from '@react-navigation/native';
import { StyleSheet, Text, View ,TextInput,
  TouchableOpacity,ImageBackground,ToastAndroid, ActivityIndicator} from 'react-native';
import Login from './Login';
import { useEffect, useRef, useState } from 'react';
import {doUserRegistration} from '../contollers/userAuth'
import {connect} from 'react-redux'
import {authRegister} from '../stores/Auth/authAction'
import {tabReducer} from '../stores/tab/tabReducer'
import {useSelector, useDispatch } from 'react-redux';

export function Register({registrationStatus,userRegDispatch,userRegD,navigation}) {
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading,setIsloading] = useState(false)
  const _uname = useRef()
  const _email = useRef()
  const _pass = useRef()

  const [registration_Status,setRegistration_Status] = useState(false)
 
  useEffect(()=>{
    if(registrationStatus) {
      ToastAndroid.show('Registration Successfull', ToastAndroid.SHORT);
      setIsloading(false)
      navigation.navigate('Login');
    }

  })

  const register = () => {
        const useReg = {username : username,email : email,password : password}
        userRegDispatch(useReg)
        setIsloading(true)
  } 

  

  const openlogin = () =>{
        navigation.navigate('Login');
  }
  
  return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/g842.png')} resizeMode="cover" style={styles.image}>
          {/* Register content */}
          <View style={styles.RegisterContent}>
              {/* create Register label */}
              <View>
                  <Text style={styles.RegisterLabel}>Create Account</Text>
              </View>
              {/* Register filds and buttons */}
              
              <View style={styles.RegisterFields}>
                    
                    <TextInput style = {styles.input}
                      underlineColorAndroid = "transparent"
                      name = "username"
                      placeholder = "Username"
                      placeholderTextColor = "#ff7111ff"
                      autoCapitalize = "none"
                      ref={_uname}
                      onChangeText = {(text) => setUsername(text)}/>
                    <TextInput style = {styles.input}
                      underlineColorAndroid = "transparent"
                      placeholder = "Email"
                      placeholderTextColor = "#ff7111ff"
                      autoCapitalize = "none"
                      ref={_email}
                      onChangeText = {(text) => setemail(text)}/>

                    <TextInput style = {styles.input}
                      underlineColorAndroid = "transparent"
                      placeholder = "Password"
                      placeholderTextColor = "#ff7111ff"
                      autoCapitalize = "none"
                      ref={_pass}
                      onChangeText = {(text) => setPassword(text)}>
                    </TextInput>
                    {isloading? <View style={styles.submitButton}>
                                   <ActivityIndicator size={'small'} color={'orange'}></ActivityIndicator> 
                                 </View> :  
                          <TouchableOpacity
                            style = {styles.submitButton}
                            onPress = {() => register() }>
                            <Text style = {styles.submitButtonText}> Create Account </Text>
                          </TouchableOpacity>
                    }
              </View>
              {/* alery Register conent */}
              <View style={styles.goToLogin}>
                     <Text style={styles.goToLoginText}>Already have an account ?</Text>
                     <Text style = {styles.goToLoginText} onPress={openlogin}>Login</Text>
              </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image:{
      height:'100%',
      flex: 1,
      justifyContent: 'center',
    },
    RegisterContent:{
      height:'85%',
      justifyContent:'space-around'
    },
    RegisterLabel:{
      fontSize:32,
      marginLeft:35,
      paddingTop:20,
      color:'#fff',
      fontWeight:'500'
    },
    RegisterFields:{
      width:'80%',
      marginHorizontal:30,
      marginTop:10,
    },
    goToLogin:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:25,
      paddingTop:25,
    },
    goToLoginText:{
      color:'#fff',
      margin:1,
      fontSize:15,
      fontWeight:'500',
      
    },
    ntext:{
      fontSize:36,
      fontWeight:"700"
    },
    ntextpro:{
      fontSize:36,
      color: "orange"
    },
    input: {
      margin: 15,
      height: 40,
      borderBottomColor:'orange',
      borderBottomWidth:1,
      paddingLeft:10

   },
   submitButton: {
      backgroundColor: "#9c3806",
      padding: 10,
      margin: 15,
      height: 40,
      borderRadius:7,
      alignItems:'center'
   },
   submitButtonText:{
      color: 'white',
      fontWeight:'700'
   },
   gotologin:{
    color:"blue",
    fontWeight: "500"
   }
  });


  const mapStateToProps = state =>({
    registrationStatus: state.authRegister.registrationStatus,
  })

  function mapDispatchToProps(dispatch){
      return {
       userRegDispatch : (userReg) => {return dispatch(authRegister(userReg))}

      }
  }

  export default connect (mapStateToProps,mapDispatchToProps)(Register)




