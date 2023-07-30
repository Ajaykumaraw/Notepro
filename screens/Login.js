import { StyleSheet, Text, View ,TextInput,TouchableOpacity,ImageBackground} from 'react-native';
import {userLogin} from '../contollers/userAuth';
import { useState } from 'react';
import {connect} from 'react-redux'
import {LoginAction} from '../stores/tab/tabAction'



export  function Login({navigation,userLoginDispatch}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
const login = () => {
  const usd = {
    username : username,
    password : password
  }
  console.log(usd.username)
  userLoginDispatch(usd)
} 
const openregister = () =>{
  navigation.navigate('Register');
}


  return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/g842.png')} resizeMode="cover" style={styles.image}>
           {/* Login content */}
           <View style={styles.RegisterContent}>
              {/* create Register label */}
              <View>
                  <Text style={styles.RegisterLabel}>Login</Text>
              </View>
              {/* Register filds and buttons */}
           <View style={styles.RegisterFields}>
            <TextInput style={styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "username"
                  placeholderTextColor = "#9c3806"
                  autoCapitalize = "none"
                  onChangeText = {(text) => setUsername(text)}/>
                
                <TextInput style={styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Password"
                  placeholderTextColor = "#9c3806"
                  autoCapitalize = "none"
                  onChangeText = {(text) => setPassword(text)}/>
                
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress = { () => login() }>
                  <Text style = {styles.submitButtonText}> Login </Text>
                </TouchableOpacity>
                <View style={styles.forgotPassLabel}>
                      <Text onPress={()=> navigation.navigate('ResetPassword')} style={styles.forgotPassText}>Forgot Password</Text>
                 </View>
                </View>
              {/* Not Registered content */}
              <View style={styles.goToLogin}>
                  <Text style = {styles.gotologin}>Dont have an account? </Text>
                  <Text style = {styles.goToLoginText} onPress={openregister}>Create Account</Text>
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
      marginLeft:45,
      paddingTop:20,
      color:'#fff',
      fontWeight:'500'
    },
    RegisterFields:{
      width:'80%',
      marginHorizontal:30,
      marginTop:10,
    },
    input: {
      margin: 15,
      height: 40,
      borderBottomColor:'orange',
      borderBottomWidth:1,
      paddingLeft:10
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
      marginTop:7,
      fontSize:15,
      fontWeight:'500'
    },
    submitButton: {
      backgroundColor: "#9c3806",
      padding: 10,
      margin: 15,
      height: 40,
      borderRadius:7,
      alignItems:'center',
   },
   submitButtonText:{
      color: 'white',
      fontWeight:'700'
   },
   forgotPassLabel:{
    alignItems:'center',
    justifyContent:'center'
   },
   forgotPassText:{
    marginLeft:20,
    fontWeight:'700',
    color:"#9c3806",
   },
    ntext:{
      fontSize:36,
      fontWeight:"700"
    },
    ntextpro:{
      fontSize:36,
      color: "orange"
    }, 
  
   gotologin:{
    fontWeight: "500",
    color:'#fff',
    
   }
  });


  const mapStateToProps = state =>({
   userLoginData: state.tabReducer.userLoginData

})

function mapDispatchToProps(dispatch){
  return {
   userLoginDispatch : (userLog) => {return dispatch(LoginAction(userLog))}

  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Login)