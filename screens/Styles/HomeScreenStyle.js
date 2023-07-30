import { StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f5f5',
    },
    ntext:{
      fontSize:36,
      fontWeight:"700"
    },
    ntextpro:{
      fontSize:36,
      color: "orange"
    },
    itemContainer:{
      flex:1,
      justifyContent:'space-between',
      margin:5,
      backgroundColor:'#ffffff',
      overflow:'hidden',
      marginVertical:20,
      marginHorizontal:10,
      
    },
    itemTitle:{
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal:10,    
      paddingTop:10 
    },
    postUserImg:{
      width:50,
      height:50,
      borderWidth:1,
      borderColor:'orange',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:25,
      overflow:'hidden',
      backgroundColor:'orange',
    },
    itemInit:{
      width:49,
      height:49,
    },
    userName: {  
      fontSize: 16,  
      color:"#3b1a0c",
      fontWeight:500,
    },
    userNamesub:{
      fontSize: 12,  
      color:"#3b1a0c",
      fontWeight:500,
    },
    postDesciption:{
      height:110,
      fontSize: 15,  
      color:"#808782",
      marginTop:20,
      marginHorizontal:10,
      lineHeight:22,
      textAlign:'justify',
      overflow:'hidden',
    },
    LikeCounder:{
        marginLeft:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'

    },
    LikeCounderCount:{
      fontSize:10,
      paddingTop:5,
      marginRight:3,
    },
    list:{
      flex: 1,
      backgroundColor: '#f0f5f5',
      color:"black"
    } ,
    Items:{
      flex: 1,
      backgroundColor: '#f0f5f5',
      color:"black"
    },
    postMenu:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
      height:40,
      marginTop:5,
      marginBottom:5,
      borderTopColor:'#ced6d0',
      borderTopWidth:1,
      
    },
    postMenuLinksContainer:{
        width:50,
        height:40,
        textAlign:'center',
        
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
    },
    postMenuLinks:{
        textAlign:'center',
        color:'#fff',
        fontSize:10,
        fontWeight:500,
    },
    HomeBtn:{
      width : 20,
      height : 20,
      borderRadius:1,
    },
    postDetails:{
      marginLeft:10,
      flexDirection:'column',
    },
    postFollowBtn:{
      marginLeft:70,
      padding:5,
      backgroundColor:'#f27805',
      borderRadius:5,
    },
    postFollowBtnText:{
      color:'#fff',
    },
    BottomMenu:{
      height:50,
      backgroundColor: 'orange',
      bottom:70,
      position:'absolute',
    }

  });