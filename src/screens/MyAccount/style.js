import {StyleSheet} from 'react-native'

export default  StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'white',
},
header:{
    height:45,
    backgroundColor:'#71C9DB',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
},
backIconImageContainer:{
    flex:2,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    alignSelf:'flex-start',
    left:0,
    height:'100%',
    width:50
},
backIconImage:{
    height:24,
    width:15,
},
headerText:{
    fontSize:18,
    color:'white',
    fontWeight:'bold',
},

inputContainer:{
        marginHorizontal:20,
        borderBottomWidth:1,
        borderColor:'gray'
    },
    input:{
        fontSize:17,
    },
    button:{
        height:45,
        backgroundColor:'#71C9DB',
        marginTop:50,
        marginHorizontal:20,
        borderRadius:5, 
        alignItems:'center',
        justifyContent:'center',       
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:16,
        color:'white',
    }

})