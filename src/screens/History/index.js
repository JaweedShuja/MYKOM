import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native'
import styles from './style.js'
import BackIcon from '../../images/backIcon.png'
import settingsIcon from '../../images/settings.png'

const History = (props) => {
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
<TouchableOpacity style={styles.settingsIconContainer}>    
<Image
    style={styles.settingsIcon}
    source={settingsIcon}
/>
</TouchableOpacity>
</View>
<View style={styles.noOrderContainer}>
        <Text style={styles.noOrderText}>
            No order history available
        </Text>
        </View>

        </View>
    );
}

export default History

History.navigationOptions = {
    header:null
}