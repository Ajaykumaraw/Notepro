import { StyleSheet, Text, View } from 'react-native';


export default function SplashScreen({navigation}) {
    setTimeout(() => {
        navigation.navigate('HomeScreen')
      }, 2000);
    return (
      <View style={styles.container}>
        <Text style={styles.ntext}>Note<Text style={styles.ntextpro}>Pro</Text></Text>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ntext:{
      fontSize:36,
      fontWeight:"700"
    },
    ntextpro:{
      fontSize:36,
      color: "orange"
    }
  });