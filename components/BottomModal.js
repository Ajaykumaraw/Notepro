import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,FlatList, TextInput, SafeAreaView, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import sampleData from '../SampleData/sampleData'
import { Animated } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';

export default function BottomModal({navigation}) {
 
 
  return (
    <>
    
      <View style={styles.container}>
          <View style={styles.line} ></View>
      </View>
    
     
    </>
  )
}




const styles = StyleSheet.create({
  container:{
     width:'100%',
     height:360,
     position:'absolute',
     bottom:0,
     backgroundColor:'orange',
     borderTopLeftRadius:30,
     borderTopRightRadius:30,
  },
  line:{
    width:50,
    backgroundColor:'#fff',
    height:4,
    marginHorizontal:'45%',
    marginTop:3,
  }


})



// <Text style={styles.people}>People</Text>
// <SafeAreaView>
//   <FlatList style={styles.Items}
//       data={sampleData}
//       renderItem={({item}) =>  <>
//       <View style={styles.profileContainer}>
//         {/* user Initial */}
//           <View style={styles.userIntial}><Text  style={styles.userIntialText}>{`${item.name[0]}`}</Text></View>
//               <View style={styles.ProfileDetailsSub} >
//                   <View style={styles.ProfileDetails} >
//                         <Text style={styles.profileName} >{item.name}</Text>
//                         <Text style={styles.profileName} >{item.id}</Text>
//                         <Text style={styles.profileName} >{item.version}</Text>
//                   </View>
//                   <View style={styles.profileBtnContainer}>
//                     <TouchableOpacity style={styles.profileFollowBtn}>
//                       <Text style={styles.profileFollowBtnText}>Follow</Text>
//                     </TouchableOpacity>
//                   </View>
//               </View>
//       </View>
      
//   </>
//       }
//       key={item => item._id}
//     />
// </SafeAreaView>