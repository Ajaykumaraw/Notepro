import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,FlatList, TextInput, SafeAreaView, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import sampleData from '../SampleData/sampleData'

export default function SearchCom({navigation}) {
  return (
    <>
      <View style={styles.container}>
          <Text onPress={()=>navigation.navigate('HomeScreen')} style={styles.containerBackButton}>Back</Text>
          <TextInput placeholder='Search...' style={styles.containerSearch}></TextInput>
      </View>
      <Text style={styles.people}>People</Text>
      <SafeAreaView>
        <FlatList style={styles.Items}
            data={sampleData}
            renderItem={({item}) =>  <>
            <View style={styles.profileContainer}>
              {/* user Initial */}
                <View style={styles.userIntial}><Text  style={styles.userIntialText}>{`${item.name[0]}`}</Text></View>
                    <View style={styles.ProfileDetailsSub} >
                        <View style={styles.ProfileDetails} >
                              <Text style={styles.profileName} >{item.name}</Text>
                              <Text style={styles.profileName} >{item.id}</Text>
                              <Text style={styles.profileName} >{item.version}</Text>
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
          />
      </SafeAreaView>
    </>
  )
}




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
