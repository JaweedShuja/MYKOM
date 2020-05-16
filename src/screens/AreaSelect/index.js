import React, {useState} from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    TextInput,
} from 'react-native'
import styles from './style'
import BackIcon from '../../images/backIcon.png'
import CheckedIcon from '../../images/checkedIcon.png'
import SearchIcon from '../../images/searchIcon.png'

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
const AreaSelect = (props) => {
    const [data, setData] = useState([
        {cityName:'New Karachi', id:1},
        {cityName:'North Karachi', id:2},
        {cityName:'Nagan Chorangi', id:3},
        {cityName:'Sakhi Hasan', id:4},
        {cityName:'Buffer Zone', id:5},
        {cityName:'North Nazimabad', id:6},
        {cityName:'Nazim Abad', id:7},
        {cityName:'Naya Nazim abad', id:8},
        {cityName:'Board Office', id:9},
        {cityName:'Saddar', id:10},
        {cityName:'Liyaqat Abad', id:11},
        {cityName:'Numaish', id:12},
    ])
    const [isSelected, setIsSeleted] = useState(false)
    const [selectedIndex, setSelectedIndex ] = useState(-1)

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
                    Select Area
                </Text>
                <View style={styles.headerSearchContainer}>
                    <Image
                        style={styles.headerSearchIconImage}
                        source={SearchIcon}
                    />
                    <TextInput
                        style={styles.headerSearchTextInput}
                        placeholder="Type Here..."
                    />
                </View>     

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
                    onPress={() => props.navigation.navigate('Dashboard')}
                     style={styles.continueButton}>
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>    
                 : null
                }
            </View>
        </View>
    );
}

export default AreaSelect

AreaSelect.navigationOptions = {
    header:null
}