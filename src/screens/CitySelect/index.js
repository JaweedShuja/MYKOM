import React, {useState} from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native'
import styles from './style'
import BackIcon from '../../images/backIcon.png'
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

            
            <Text 
                style={[styles.itemText, {color: isSelected == true && selectedIndex == item.id ? 'blue' : 'black'}]}>
                {item.cityName}
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
const CitySelect = (props) => {
    const [data, setData] = useState([
        {cityName:'Karachi', id:1},
        {cityName:'Islamabad', id:2},
        {cityName:'Lahore', id:3},
        {cityName:'Hyderabad', id:4},
        {cityName:'Faisalabad', id:5},
        {cityName:'Rawalpindi', id:6},
        {cityName:'Multan', id:7},
        {cityName:'Sakkar', id:8},
        {cityName:'Peshawar', id:9},
        {cityName:'Queta', id:10},
        {cityName:'Muzaffarabad', id:11},
        {cityName:'Mirpur', id:12},
    ])
    const [isSelected, setIsSeleted] = useState(false)
    const [selectedIndex, setSelectedIndex ] = useState(-1)

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
                    Select City
                </Text>     

            </View>
            <View style={styles.FlatListContainer}>
                <FlatList
                    keyExtractor={item => item.cityName}
                    data={data}
                    renderItem={({item}) => renderItem(item, setIsSeleted, setSelectedIndex, isSelected, selectedIndex)}
                />
            </View>
            <View style={styles.ButtonContainer}>
                    {
                    isSelected == true ?
                    <TouchableOpacity
                    onPress={() => props.change('AreaSelect')}
                     style={styles.continueButton}>
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>    
                 : null
                }
            </View>
        </View>
    );
}

export default CitySelect