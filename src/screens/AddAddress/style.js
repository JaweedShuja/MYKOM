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
        marginBottom:10,
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
        },
        ImageContainer:{
            flexDirection:'row',
            height:130,
            alignItems:'center',
            justifyContent:'space-around'
        },
        VilaImage:{
            height:80, 
            width:80,
        },
        BuildingImage:{
            height:80, 
            width:80,
            opacity:0.5,   
        },
        ImageIconContainer:{
            borderWidth:1,
            borderColor:'black',
            padding:10,
            borderRadius:5,
        },
        ImageText:{
            alignSelf:'center'
        }
})