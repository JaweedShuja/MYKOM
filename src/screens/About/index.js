import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native'
import styles from './style.js'
import BackIcon from '../../images/backIcon.png'
import HeaderLogo from '../../images/headerLogo.png'
import right from '../../images/right.webp'

const About = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>

<TouchableOpacity style={styles.backIconImageContainer}>
    <Image
        style={styles.backIconImage}
        source={BackIcon}
    />
</TouchableOpacity>
<Text style={styles.headerText}>
    About
</Text>     

</View>

<View style={styles.logoContainer}>
        <Image
        style={styles.logoImage}
        source={HeaderLogo}
        />
</View>

<TouchableOpacity style={[styles.optionContainer, {marginTop:50}]}>
        <Text style={styles.optionText}>
            Email Customer Care
        </Text>

        <Image
            style={styles.optionImage}
            source={right}
        />
</TouchableOpacity>
<TouchableOpacity style={[styles.optionContainer, {borderBottomWidth:1,}]}>
    <Text style={styles.optionText}>
            Email Us Business Inquiries
        </Text>

        <Image
            style={styles.optionImage}
            source={right}
        />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomLinkContainer}>
            <Text style={styles.bottomLinkText}>Term and Conditions - Privacy Policy</Text>
        </TouchableOpacity>
        </View>
    );
}

export default About