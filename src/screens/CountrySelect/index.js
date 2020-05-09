import React, {useState} from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native'
import styles from './style'
import Pakistan from '../../images/pakistan.png'
import Dubai from '../../images/dubai.png'
import Bahrain from '../../images/bahrain.png'
import CheckedIcon from '../../images/checkedIcon.png'

const handleClick = (id, setIsSeleted, setSelectedIndex) => {
    setIsSeleted(true);
    setSelectedIndex(id);
}
const renderItem = (item, setIsSeleted, setSelectedIndex, isSelected, selectedIndex) => {
    return( 
        <TouchableOpacity 
            onPress={() => handleClick(item.id, setIsSeleted, setSelectedIndex)}
            style={styles.itemContainer}>

            <View 
            style={styles.itemMapContainer}>
            <Image
                style={styles.itemFlagImage}
                source={item.img}
            />
            </View>
            
            <Text 
                style={[styles.itemText, {color: isSelected == true && selectedIndex == item.id ? 'blue' : 'black'}]}>
                {item.countryName}
            </Text>

            {isSelected == true && selectedIndex == item.id ?
            <Image
                style={styles.itemCheckedImage}
                source={CheckedIcon}
            />
            : null}

        </TouchableOpacity>
    );
}
const CountrySelect = () => {
    const [data, setData] = useState([
        {countryName:'Pakistan', id:1, img:Pakistan},
        {countryName:'Dubai', id:2, img:Dubai},
        {countryName:'Bahrain', id:3, img:Bahrain},
        
    ])
    const [isSelected, setIsSeleted] = useState(false)
    const [selectedIndex, setSelectedIndex ] = useState(-1)


    return <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Select Country</Text>
        </View>
        <FlatList
            keyExtractor={item => item.countryName}
            data={data}
            renderItem={({item}) => renderItem(item, setIsSeleted, setSelectedIndex, isSelected, selectedIndex)}
        />
        {
            isSelected == true ?
        <View style={styles.continueButtonContainer}>
            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>    
        </View> : null
        }
    </View>
}

export default CountrySelect