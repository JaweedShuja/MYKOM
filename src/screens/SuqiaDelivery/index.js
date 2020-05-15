import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text, TextInput} from 'react-native'
import DrawerIcon from '../../images/drawerIcon.png'
import styles from './style.js'
 
class SudiaDelivery extends Component {
   render() {
       return (
           <View style={styles.container}>
               <View style={styles.header}>

<TouchableOpacity 
onPress={this.toggleOpen}
style={styles.backIconImageContainer}>
    <Image
        style={styles.drawerIconImage}
        source={DrawerIcon}
    />
</TouchableOpacity>

<Text style={styles.headerText}>
    Select Mosque/s
</Text>
</View>
<View style={styles.inputContainer}>
        <TextInput style={styles.input}

        />
</View>
<View style={styles.optionContainer}>
<Text style={{color:'#71C9DB', fontWeight:'bold'}}>Water Suqia</Text>
<Text style={{color:'gray', fontWeight:'bold'}}>Mosque</Text>
<Text style={{color:'gray', fontWeight:'bold'}}>Quran Centers</Text>
</View>

           </View>

           
          
        )
    }
}

export default SudiaDelivery