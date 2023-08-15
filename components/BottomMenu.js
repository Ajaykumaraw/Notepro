import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Button, FlatList,
    SafeAreaView,ToastAndroid, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default  function BottomMenu({item,navigation}) {
    const [largeMenu,setLargeMenu] = useState(false)
    const [onLongPress,setonLongPress] = useState(true)

    function hide(){
        setLargeMenu(!onLongPress)
    }
  return (
    <View style={styles.BottomMenu}>
       {onLongPress?<TouchableOpacity style={styles.BottomMenuBtn} onPress={()=>{setLargeMenu(!largeMenu)}} onLongPress={()=> hide()}>
          <AntDesign name='home' size={40} color={'#9c3806'}/>
        </TouchableOpacity>:''}
       {largeMenu?<View style={styles.largeMenu}>
       <TouchableOpacity style={styles.BottomMenuBtn} onPress={()=>{navigation.navigate('WritePost',{itemData: item
                    })}}>
          <FontAwesome name='pencil-square-o' size={40} color={'#9c3806'}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BottomMenuBtn} onPress={()=>{setLargeMenu(!largeMenu)}}>
          <AntDesign name='home' size={40} color={'#9c3806'}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BottomMenuBtn} onPress={()=>{setLargeMenu(!largeMenu)}}>
          <Ionicons name='settings' size={40} color={'#9c3806'}/>
        </TouchableOpacity>
        </View>:''}
    </View>
  )
}


styles = StyleSheet.create({
    BottomMenu:{
        height:50,
        width:'100%',
        bottom:'5%',
        position:'absolute',
        alignItems:'center',
        justifyContent:'center'
      },
      BottomMenuBtn:{
        width:44,
        height:44,
        backgroundColor:'orange',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',

      },
      largeMenu:{
        height:44,
        width:'60%',
        bottom:'5%',
        position:'absolute',
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'orange'
      }
})