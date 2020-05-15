import React from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import styles from './style.js'
import BackIcon from '../../images/backIcon.png'
import Juice from '../../images/juice.png'

const ItemByCompany = () => {
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
    NESTLE
</Text>
</View>
<View style={styles.categoryBarContainer}>
        <Text style={styles.categoryText}>All</Text>
        <Text style={[styles.categoryText, {borderBottomWidth:3, borderColor:'#71C9DB'}]}>Juice</Text>
        <Text style={styles.categoryText}>Water</Text>
        <Text style={styles.categoryText}>Milk</Text>


</View>
<ScrollView>
        <View style={styles.itemContainer}>
            <Image
                style={styles.itemImage}
                source={Juice}
            />
            <View style={styles.itemDetailsContainer}>
                <Text style={styles.sizeText}>200 ml</Text>
                <Text style={styles.qtyText}>2 pieces</Text>
                <Text style={styles.priceText}>AED 6.15</Text>
            </View>

            <TouchableOpacity style={styles.plusContainer}>
                <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.itemContainer}>
            <Image
                style={styles.itemImage}
                source={Juice}
            />
            <View style={styles.itemDetailsContainer}>
                <Text style={styles.sizeText}>200 ml</Text>
                <Text style={styles.qtyText}>2 pieces</Text>
                <Text style={styles.priceText}>AED 6.15</Text>
            </View>

            <TouchableOpacity style={styles.plusContainer}>
                <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.itemContainer}>
            <Image
                style={styles.itemImage}
                source={Juice}
            />
            <View style={styles.itemDetailsContainer}>
                <Text style={styles.sizeText}>200 ml</Text>
                <Text style={styles.qtyText}>2 pieces</Text>
                <Text style={styles.priceText}>AED 6.15</Text>
            </View>

            <TouchableOpacity style={styles.plusContainer}>
                <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.itemContainer}>
            <Image
                style={styles.itemImage}
                source={Juice}
            />
            <View style={styles.itemDetailsContainer}>
                <Text style={styles.sizeText}>200 ml</Text>
                <Text style={styles.qtyText}>2 pieces</Text>
                <Text style={styles.priceText}>AED 6.15</Text>
            </View>

            <TouchableOpacity style={styles.plusContainer}>
                <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
        </View>
</ScrollView>

        </View>
    );
}

export default ItemByCompany