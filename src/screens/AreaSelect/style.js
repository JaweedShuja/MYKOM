import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'   
    },
    header:{
        height:105,
        backgroundColor:'#71C9DB',
        flexDirection:'row',
        justifyContent:'center',
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
        marginTop:14
    },
    backIconImageContainer:{
        flex:2,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        alignSelf:'flex-start',
        left:0,
        height:'50%',
        width:50,
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
        backgroundColor:'#71C9DB',
        marginHorizontal:20,
        alignItems:'center',
        justifyContent:'center',
        bottom:10,
        borderRadius:5,
    },
    continueButtonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    },
    headerSearchContainer:{
        height:45,
        backgroundColor:'white',
        width:Math.round(Dimensions.get('window').width)-20,
        position:'absolute',
        bottom:5,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
    },
    headerSearchIconImage:{
        height:20,
        width:20,
        marginLeft:10,
    },
    headerSearchTextInput:{
        fontSize:18,
        width:'100%',
    }
})