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
    categoryBarContainer:{
        height:50,
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'black',
        paddingTop:10,
        // alignItems:'center',
    },
    categoryText:{
        fontSize:18,
        marginLeft:20,
        height:'100%'
    },
    itemContainer:{
        height:150,
        marginHorizontal:10,
        borderColor:'black',
        borderWidth:1,
        borderRadius:5,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
    },
    itemImage:{
        height:120,
        width:120,   
    },
    itemDetailsContainer:{
        
    },
    sizeText:{
        fontSize:18,
        color:'gray'
    },
    qtyText:{
        fontWeight:'bold',
        fontSize:17
    },
    priceText:{
        fontSize:18,
        color:'#71C9DB',
        fontWeight:'bold',
    },
    plusContainer:{
        height:40,
        width:40,
        borderColor:'gray',
        borderWidth:2,
        borderRadius:70,
        position:'absolute',
        right:10,
        alignItems:'center',
        justifyContent:'center'
    },
    plusText:{
        fontSize:25,
        color:'#71C9DB'
    }
})