import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },  
    header:{
        height:45,
        backgroundColor:'#71C9DB',
        alignItems:'center',
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
    },
    itemContainer:{
       height:50,
       borderBottomWidth:1,
       borderColor:'gray',
       flexDirection:'row',
       alignItems:'center', 
    },
    itemMapContainer:{
        marginLeft:10,
    },
    itemText:{
        marginLeft:10,
        fontSize:16
    },
    itemFlagImage:{
        height:40,
        width:40,
        borderRadius:30,
        borderWidth:1,
        borderColor:'gray'
    },
    itemCheckedImage:{
        height:20,
        width:20,
        right:10,
        position:'absolute'
    },
    continueButtonContainer:{
        height:100,
        justifyContent:'flex-end'
    },
    continueButton:{
        height:45,
        backgroundColor:'#81A9B1',
        marginHorizontal:20,
        bottom:10,
        alignItems:'center',
        justifyContent:'center',
    },
    continueButtonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})