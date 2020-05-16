import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native'
import styles from './style.js'
import BackIcon from '../../images/backIcon.png'
import right from '../../images/right.webp'

const MyAddressBook = (props) => {
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
    My Address Book
</Text>     

</View>

<TouchableOpacity 
onPress={() => props.navigation.navigate('AddAddress')}
style={[styles.optionContainer, {borderBottomWidth:1,}]}>
        <Text style={styles.optionText}>
            + Add a new address
        </Text>

        <Image
            style={styles.optionImage}
            source={right}
        />
</TouchableOpacity>


        </View>
    );
}

export default MyAddressBook

MyAddressBook.navigationOptions = {
    header:null
}