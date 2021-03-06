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
    logoContainer:{
        height:120,
        width:120,
        backgroundColor:'#71C9DB',
        alignSelf:'center',
        marginTop:60,
        alignItems:'center',
        justifyContent:'center',
    },
    logoImage:{
        height:30,
        width:100,
    },
    optionContainer:{
        height:55,
        alignItems:'center',
        flexDirection:'row',
        borderColor:'gray',
        borderTopWidth:1,
    },
    optionText:{
        marginLeft:20,
        fontSize:16,
        opacity:0.7
    },
    optionImage:{
        height:25,
        width:25,
        right:0,
        position:'absolute',
        marginRight:10,
    },
    bottomLinkContainer:{
        position:'absolute',
        bottom:20,
        alignSelf:'center',
        padding:10,
    },
    bottomLinkText:{
        color:'#71C9DB'
    },
    

})