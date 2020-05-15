
import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        marginTop:-5,   
    },
    header:{
        height:45,
        backgroundColor:'#71C9DB',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.3,
        shadowRadius: 2.25,
        elevation: 4,
    },
    backIconImageContainer:{
        flex:2,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        alignSelf:'flex-start',
        left:5,
        height:'100%',
        width:50
    },
    drawerIconImage:{
        height:30,
        width:35,
    },
    headerText:{
        fontSize:18,
        color:'white',
        fontWeight:'bold',
    },
    inputContainer:{
        height:60,
        backgroundColor:'rgba(128,128,128,0.5)',
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        height:40,
        backgroundColor:'white',
        width:'90%',
        borderRadius:5,
    },
    optionContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10,
    }
})