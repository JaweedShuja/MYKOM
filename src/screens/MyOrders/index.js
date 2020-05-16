import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
} from 'react-native'
import styles from './style.js'
import BackIcon from '../../images/backIcon.png'
import settingsIcon from '../../images/settings.png'

const MyOrders = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>

<TouchableOpacity 
onPress={() => props.navigation.goBack()}
style={styles.backIconImageContainer}>
    <Image
        style={styles.backIconImage}
        source={BackIcon}
    />
</TouchableOpacity>
<Text style={styles.headerText}>
    History
</Text>
</View>
        <View style={{height:'100%', alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:18}}>You Have no Orders</Text>
        </View>

        </View>
    );
}

export default MyOrders


MyOrders.navigationOptions = {
    header:null
}