import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text, TextInput} from 'react-native'
import DrawerIcon from '../../images/drawerIcon.png'
import styles from './style.js'

import Home from '../../images/homeS.png'
import Lock from '../../images/lockS.png'
import Acom from '../../images/acomS.png'
import Tick from '../../images/tick.png'
import Botol from '../../images/botol.png'
import sirma from '../../images/sirma.png'
import sirma2 from '../../images/sirma2.png'
import BackIcon from '../../images/backIcon.png'


class SudiaDelivery extends Component {
    static navigationOptions = {
        header:null
    }
    constructor(props){
        super(props)
    }
   render() {
       return (
           <View style={styles.container}>
               <View style={styles.header}>

               <TouchableOpacity 
onPress={() => this.props.navigation.goBack()}
style={styles.backIconImageContainer}>
    <Image
        style={{
            height:24,
            width:15,
        }}
        source={BackIcon}
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

<TouchableOpacity 
onPress={() => this.props.navigation.navigate('ReceverDetails')}
style={styles.SelectoptionContainer}>
        <Image
            style={styles.SelectOptionImage}
            source={Home}
        />
        <Text style={{marginLeft:10}}>The chash families</Text>
        <Image
            source={Tick}
            style={styles.yesIcon}
        />
</TouchableOpacity>
<TouchableOpacity 
onPress={() => this.props.navigation.navigate('ReceverDetails')}
style={styles.SelectoptionContainer}>
<Image
            style={styles.SelectOptionImage}
            source={Lock}
        />
        <Text style={{marginLeft:10}}>Quaratine areas</Text>
        <Image
            source={Tick}
            style={styles.yesIcon}
        />
</TouchableOpacity>
<TouchableOpacity 
onPress={() => this.props.navigation.navigate('ReceverDetails')}
style={styles.SelectoptionContainer}>
<Image
            style={styles.SelectOptionImage}
            source={Acom}
        />
        <Text style={{marginLeft:10}}>Labour Accomandation</Text>
        <Image
            source={Tick}
            style={styles.yesIcon}
        />
</TouchableOpacity>
<View style={{height:'100%', backgroundColor:'white'}}>
<View style={{height:100, backgroundColor:'white', }}>

</View>
<View style={{height:150, backgroundColor:'#71C9DB', flexDirection:'row', justifyContent:'space-around', paddinTop:10 }}>
        <View>
        <View style={{height:80, width:80}}>
            <Image
                style={{height:70, width:70, marginTop:5,}}
                source={Botol}
            />
        </View>
        <Text style={{fontWeight:'bold', color:'white'}}>30 x 200 ML</Text>
        <Text style={{fontWeight:'bold', color:'white'}}>8.00 AED</Text>
        </View>
        <View>
        <View style={{height:80, width:80}}>
            <Image
                style={{height:70, width:70, marginTop:5,}}
                source={sirma}
            />
        </View>
        <Text style={{fontWeight:'bold', color:'white'}}>30 x 200 ML</Text>
        <Text style={{fontWeight:'bold', color:'white'}}>8.00 AED</Text>
        </View>
        <View>
        <View style={{height:80, width:80}}>
            <Image
                style={{height:70, width:70, marginTop:5,}}
                source={sirma2}
            />
        </View>
        <Text style={{fontWeight:'bold', color:'white'}}>30 x 200 ML</Text>
        <Text style={{fontWeight:'bold', color:'white'}}>8.00 AED</Text>
        </View>
</View>
</View>

           </View>

           
          
        )
    }
}

export default SudiaDelivery