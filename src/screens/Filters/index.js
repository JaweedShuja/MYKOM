import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import styles from './style.js'
import BackIcon from '../../images/backIcon.png'
import right from '../../images/right.webp'

const Filters = (props) => {
    return(
        <View>
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
    Filters
</Text>
</View>

<TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>
            100 - 200 ml
        </Text>

        <Image
            style={styles.optionImage}
            source={right}
        />
</TouchableOpacity>


<TouchableOpacity style={[styles.optionContainer,{borderTopWidth:1,}]}>
        <Text style={styles.optionText}>
            250 - 375 ml
        </Text>

        <Image
            style={styles.optionImage}
            source={right}
        />
</TouchableOpacity>

<TouchableOpacity style={[styles.optionContainer,{borderTopWidth:1,}]}>
        <Text style={styles.optionText}>
            500 - 900 ml
        </Text>

        <Image
            style={styles.optionImage}
            source={right}
        />
</TouchableOpacity>

<TouchableOpacity style={[styles.optionContainer,{borderTopWidth:1,}]}>
        <Text style={styles.optionText}>
            1 Ltr - 1.5 Ltr
        </Text>

        <Image
            style={styles.optionImage}
            source={right}
        />
</TouchableOpacity>

<TouchableOpacity style={[styles.optionContainer,{borderTopWidth:1,}]}>
        <Text style={styles.optionText}>
            Sparkling 330 - 500 ml
        </Text>

        <Image
            style={styles.optionImage}
            source={right}
        />
</TouchableOpacity>

<TouchableOpacity style={[styles.optionContainer,{borderTopWidth:1,}]}>
        <Text style={styles.optionText}>
            Sparkling 500 - 1 Ltr
        </Text>

        <Image
            style={styles.optionImage}
            source={right}
        />
</TouchableOpacity>

<TouchableOpacity style={[styles.optionContainer,{borderTopWidth:1,}]}>
        <Text style={styles.optionText}>
            Gallons
        </Text>

        <Image
            style={styles.optionImage}
            source={right}
        />
</TouchableOpacity>

<TouchableOpacity style={[styles.optionContainer,{borderTopWidth:1,borderBottomWidth:1,}]}>
        <Text style={styles.optionText}>
            Others
        </Text>

        <Image
            style={styles.optionImage}
            source={right}
        />
</TouchableOpacity>
        </View>
    );
}


export default Filters


Filters.navigationOptions = {
    header:null
}