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

const ReceverDetails = (props) => {
    

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
                    
                    <TouchableOpacity
                    onPress={() => props.navigation.navigate('FinalizeOrder')}
                     style={styles.continueButton}>
                        <Text style={styles.continueButtonText}>Next</Text>
                    </TouchableOpacity>    
                 
            </View>
        </View>
    );
}

export default ReceverDetails


ReceverDetails.navigationOptions = {
    header:null
}