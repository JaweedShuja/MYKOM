import React,{useState} from 'react'
import { 
    Text, 
    View,
    Image,
    TouchableOpacity,
    ScrollView,
 } from 'react-native'
import styles from './style'
import DrawerIcon from '../../images/drawerIcon.png'
import HeaderLogo from '../../images/headerLogo.png'
import CoverImage from '../../images/cover.jpg'
import HomeIcon from '../../images/home.png'
import CategoriesIcon from '../../images/categories.png'
import DealsIcon from '../../images/deals.png'
import AccountIcon from '../../images/account.png'
import CartIcon from '../../images/cart.png'

const handleClickButtonOne = (setButtonOne, setButtonTwo, setIsButtonOne, setIsButtonTwo) => {
    setButtonOne('#71C9DB')
    setButtonTwo('gray')
    setIsButtonOne(true)
    setIsButtonTwo(false)
}   
const handleClickButtonTwo = (setButtonOne, setButtonTwo, setIsButtonOne, setIsButtonTwo) => {
    setButtonOne('gray')
    setButtonTwo('#71C9DB')
    setIsButtonOne(false)
    setIsButtonTwo(true)
}
const Dashboard = () => {
    const [buttonOne, setButtonOne] = useState('#71C9DB')
    const [buttonTwo, setButtonTwo] = useState('gray')
    const [isButtonOne, setIsButtonOne] = useState(true)
    const [isButtonTwo, setIsButtonTwo] = useState(false)

    return(
        <View style={styles.container}>
            <View style={styles.header}>

                <TouchableOpacity style={styles.backIconImageContainer}>
                    <Image
                        style={styles.drawerIconImage}
                        source={DrawerIcon}
                    />
                </TouchableOpacity>
                <Image
                    style={styles.headerLogoImage}
                    source={HeaderLogo}
                />

            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                onPress={() => {handleClickButtonOne(setButtonOne,setButtonTwo, setIsButtonOne, setIsButtonTwo)}}
                style={[
                    styles.button,
                    {borderColor: isButtonOne ? '#71C9DB' : 'white'},
                ]}>
                    <Text style={[styles.buttonText, {color:buttonOne}]}>
                        Water
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {handleClickButtonTwo(setButtonOne, setButtonTwo, setIsButtonOne, setIsButtonTwo)}}
                style={[
                    styles.button,
                    {borderColor: isButtonTwo ? '#71C9DB' : 'white'},
                ]}>
                    <Text style={[styles.buttonText, {color:buttonTwo}]}>
                        Beverages
                    </Text>
                </TouchableOpacity>
                
            </View>
            <ScrollView style={styles.scroller}>
                 <Image
                    source={CoverImage}
                    style={styles.coverImage}
                 /> 
                 <View style={styles.productRowContainer}>
                    <View style={styles.product}>

                    </View>
                    <View style={styles.product}>

                    </View>
                    <View style={styles.product}>

                    </View>
                </View>
                <View style={styles.productRowContainer}>
                    <View style={styles.product}>

                    </View>
                    <View style={styles.product}>

                    </View>
                    <View style={styles.product}>

                    </View>
                </View>  
                <View style={styles.productRowContainer}>
                    <View style={styles.product}>

                    </View>
                    <View style={styles.product}>

                    </View>
                    <View style={styles.product}>

                    </View>
                </View>
                <View style={styles.productRowContainer}>
                    <View style={styles.product}>

                    </View>
                    <View style={styles.product}>

                    </View>
                    <View style={styles.product}>

                    </View>
                </View>
                <View style={styles.productRowContainer}>
                    <View style={styles.product}>

                    </View>
                    <View style={styles.product}>

                    </View>
                    <View style={styles.product}>

                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottomNavBar}>
                <TouchableOpacity style={styles.navItem}>
                    <Image
                        source={HomeIcon}
                        style={styles.navImage}
                    />
                    <Text style={styles.navText}>
                        Home
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image
                        source={CategoriesIcon}
                        style={styles.navImage}
                    />
                    <Text style={styles.navText}>
                        Categories
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image
                        source={DealsIcon}
                        style={styles.navImage}
                    />
                    <Text style={styles.navText}>
                        Deals
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image
                        source={AccountIcon}
                        style={styles.navImage}
                    />
                    <Text style={styles.navText}>
                        Acount
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image
                        source={CartIcon}
                        style={styles.navImage}
                    />
                    <Text style={styles.navText}>
                        Cart
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Dashboard