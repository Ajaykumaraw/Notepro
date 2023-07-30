import React from 'react'
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,ImageBackground} from 'react-native';


export default function ResetPassword() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>

        </View>
        <View style={styles.resetPasswordFields}>
            <Text style={styles.ResetLabel}>Reset Password</Text>
            <TextInput style = {styles.input}
                      underlineColorAndroid = "transparent"
                      placeholder = "Current Password"
                      placeholderTextColor = "#ff7111ff"
                      autoCapitalize = "none"
                      onChangeText = {(text) => setemail(text)}/>
            <TextInput style = {styles.input}
                      underlineColorAndroid = "transparent"
                      placeholder = "New Password"
                      placeholderTextColor = "#ff7111ff"
                      autoCapitalize = "none"
                      onChangeText = {(text) => setemail(text)}/>
            <TextInput style = {styles.input}
                      underlineColorAndroid = "transparent"
                      placeholder = "Confirm Password"
                      placeholderTextColor = "#ff7111ff"
                      autoCapitalize = "none"
                      onChangeText = {(text) => setemail(text)}/>
              <TouchableOpacity
                      style = {styles.submitButton}
                      onPress = {() => register() }>
                      <Text style = {styles.submitButtonText}> Update Password</Text>
                </TouchableOpacity>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    ResetLabel:{
        fontSize:32,
        marginLeft:25,
        paddingTop:20,
        color:'#9c3806',
        fontWeight:'500'
    },
    header:{
        height:90,
        backgroundColor:'orange'
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
   
  });
