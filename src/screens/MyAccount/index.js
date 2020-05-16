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

const MyAccount = (props) => {
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
    My Account
</Text>
</View>
        <View style={[styles.inputContainer, {marginTop:30}]}>
            
        <TextInput style={styles.input}
            placeholder="Name"
        />
        </View>
        <View style={[styles.inputContainer, {marginTop:10,}]}>
            
        <TextInput style={styles.input}
            placeholder="Email Address"
        />
        </View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
                Save
            </Text>
        </TouchableOpacity> 

        </View>
    );
}

export default MyAccount


MyAccount.navigationOptions = {
    header:null
}