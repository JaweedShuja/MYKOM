import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(128, 128, 128,0.2)'   
    },
    header:{
        height:45,
        backgroundColor:'#71C9DB',
        flexDirection:'row',
        alignItems:'center',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.3,
        shadowRadius: 2.25,
        elevation: 4,
    },
    headerText:{
        fontSize:18,
        color:'white',
        fontWeight:'bold',
        marginLeft:30
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
    itemText:{
        marginLeft:10,
        fontSize:16
    },
    itemContainer:{
        height:50,
        borderBottomWidth:1,
        borderColor:'gray',
        flexDirection:'row',
        alignItems:'center', 
     },
     itemCheckedImage:{
        height:20,
        width:20,
        right:10,
        position:'absolute'
    },
    FlatListContainer:{
        flex:3
    },
    ButtonContainer:{
        flex:1,   
        justifyContent:'flex-end',
    },
    continueButton:{
        height:45,
        width:'90%',
        alignSelf:'center',
        backgroundColor:'#71C9DB',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        bottom:10,
        position:'absolute'
    },
    continueButtonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})