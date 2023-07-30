import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export default function Header({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.left}>
            <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                <FontAwesome style={styles.textColor} name='bars' size={22} color={'orange'}/>
            </TouchableOpacity>
        </View>
        <View style={styles.title}>
            <Text style={styles.titleText}>Note<Text style={styles.titleTextPro}>Pro</Text></Text>
        </View>
        <View style={styles.right}>
            <TouchableOpacity onPress={()=>{navigation.navigate('SearchScreen')}}>
                    <FontAwesome style={styles.textColor} name='search' size={22} color={'orange'}/>
                </TouchableOpacity>
        </View> 
    </View>
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

    }
    
})
