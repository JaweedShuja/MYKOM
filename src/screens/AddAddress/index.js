import React from 'react'
import {Text, View, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native'
import styles from './style'
import BackIcon from '../../images/backIcon.png'
import VillaIcon from '../../images/villa.png'
import buildingIcon from '../../images/building.png'
const AddAddress = (props) => {
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
<ScrollView>
        <View style={styles.ImageContainer}>
            <View style={styles.ImageIconContainer}>
                <Image
                    style={styles.VilaImage}
                    source={VillaIcon}
                />
                <Text style={styles.ImageText}>Villa</Text>
            </View>
            <View style={styles.ImageIconContainer}>
                <Image
                    style={styles.BuildingImage}
                    source={buildingIcon}
                />
                <Text style={[styles.ImageText, {opacity:0.5}]}>Building</Text>
            </View>
        </View>
        <View style={[styles.inputContainer, {marginTop:30}]}>
            
        <TextInput style={styles.input}
            placeholder="City"
            value="Karachi"
        />
        </View>
        <View style={[styles.inputContainer, {marginTop:10,}]}>
            
        <TextInput style={styles.input}
            placeholder="Area"
            value="North Nazimabad"
        />
        </View>
        <View style={[styles.inputContainer, {marginTop:10,}]}>
            
        <TextInput style={styles.input}
            placeholder="Street Number"
        />
        </View>
        <View style={[styles.inputContainer, {marginTop:10,}]}>
            
        <TextInput style={styles.input}
            placeholder="House Number"
        />
        </View>
        <View style={[styles.inputContainer, {marginTop:10,}]}>
            
        <TextInput style={styles.input}
            placeholder="Landmark"
        />
        </View>

        <TouchableOpacity 
        onPress={() => props.navigation.navigate('Dashboard')}
        style={styles.button}>
            <Text style={styles.buttonText}>
                Confirm
            </Text>
        </TouchableOpacity> 
        </ScrollView>
        </View>
    );
}

export default  AddAddress

AddAddress.navigationOptions = {
    header:null
}