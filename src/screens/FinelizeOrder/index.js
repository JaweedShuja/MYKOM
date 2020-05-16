import React, {useState} from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native'
import styles from './style'
import BackIcon from '../../images/backIcon.png'
import CheckedIcon from '../../images/checkedIcon.png'

const FinelizeOrder = (props) => {
    

    return(
        <View style={styles.container}>
            <View style={styles.header}>

                
                <Text style={styles.headerText}>
                    Recever Details
                </Text>     

            </View>
           <View style={{height:120, width:'90%', backgroundColor:'white', alignSelf:'center', marginTop:10,}}>
                <Text style={{fontWeight:'bold', fontSize:17, marginTop:10, textAlign:'center'}}>Your contribution will reach following categories:</Text>
                <Text style={{marginLeft:10, marginTop:15}}>Labor Accomandation</Text>
           </View>
            <View style={styles.ButtonContainer}>
                    <View style={{backgroundColor:'white', height:170,  margin:10, borderRadius:5,}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20, marginTop:10}}>
                            <Text>Quantity</Text>
                            <Text>10 PACKS</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20,}}>
                            <Text>Total</Text>
                            <Text>65.00 AED</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20,}}>
                            <Text>Vat(%5)</Text>
                            <Text>3.25 AED</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20,}}>
                            <Text>Grand Total</Text>
                            <Text>68.25 AED</Text>
                        </View>
                        <View style={{height:1, backgroundColor:'gray', marginTop:15, opacity:0.2}}></View>
                    <TouchableOpacity
                    onPress={() => props.navigation.navigate('Dashboard')}
                     style={styles.continueButton}>
                        <Text style={styles.continueButtonText}>Checkout</Text>
                    </TouchableOpacity>  
                    </View>  
                 
            </View>
        </View>
    );
}

export default FinelizeOrder


FinelizeOrder.navigationOptions = {
    header:null
}