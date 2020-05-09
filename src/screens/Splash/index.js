import React from 'react'
import {
    View,
    Image,
    Dimensions
} from 'react-native'
import styles from './style'
import splashIcon from '../../images/splash.png'
const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height);

const Splash = () => {
    return (
    <View style={styles.container}>
        <Image
            style={{
                height:screenHeight,
                width:screenWidth,
            }}
            source={splashIcon}
        />
    </View>);
}

export default Splash