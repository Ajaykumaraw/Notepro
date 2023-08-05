import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Button, FlatList,
    SafeAreaView,ToastAndroid, Image, ActivityIndicator} from 'react-native';
import styles from '../screens/Styles/HomeScreenStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function Post({navigation,item}) {
  return (
        <View style={styles.itemContainer}>
            <View style={styles.itemTitle}>
            {/* profile pic */}
            <View style={styles.postUserImg}>
                <Image style={styles.itemInit} source={ require('../assets/profile.jpeg')}></Image>
                {/* <Text style={styles.itemInit}>{item.profile_picture}</Text> */}
            </View>
            <View style={styles.postDetails}>
                <Text style={styles.userName}>{item.createdBy}</Text>
                <Text style={styles.userNamesub}>{item._id}</Text>
            </View>
            <View style={styles.postFollowBtn}>
                <TouchableOpacity>
                    <Text style={styles.postFollowBtnText}>+ Follow</Text>
                </TouchableOpacity>
            </View>
            </View>
        
            <Text onPress={()=>navigation.navigate('SinglePost',{
                    itemData: item,
                    })} style={styles.postDesciption}>{item.postDesciption}
            </Text>
            {(2>0)?<View style={styles.LikeCounder}>
            <Text style={styles.LikeCounderCount}>2</Text><Icon  name='like1' size={15} color={'orange'}/>
            </View>:''}
        
            <View style={styles.postMenu} >
                <TouchableOpacity onPress={()=>postlike()} style={styles.postMenuLinksContainer}><Icon  name='like1' size={20} color={'orange'}/></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('SinglePost',{
                    itemData: item,
                    })}  style={styles.postMenuLinksContainer}><FontAwesome name='commenting' size={20} color={'orange'}/></TouchableOpacity>
                <View style={styles.postMenuLinksContainer}><FontAwesome name='share-alt-square' size={20} color={'orange'}/></View>
                <View style={styles.postMenuLinksContainer}><Ionicons name='stats-chart-sharp' size={20} color={'orange'}/></View>
            </View>
        </View>
  )
}

