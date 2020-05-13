import React,{useState} from 'react'
import { 
    Text, 
    View,
    Image,
    TouchableOpacity,
    ScrollView,
 } from 'react-native'
import styles from './style'
import MenuDrawer from 'react-native-side-drawer'
import SwipeGesture from '../../../swipe-gesture'
import DrawerIcon from '../../images/drawerIcon.png'
import HeaderLogo from '../../images/headerLogo.png'
import CoverImage from '../../images/cover.jpg'
import HomeIcon from '../../images/home.png'
import CategoriesIcon from '../../images/categories.png'
import DealsIcon from '../../images/deals.png'
import AccountIcon from '../../images/account.png'
import CartIcon from '../../images/cart.png'


export default class Dashboard extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            buttonOne:'#71C9DB',
            buttonTwo:'gray',
            isButtonOne: true,
            isButtonTwo: false
        }
        this.handleClickButtonOne = this.handleClickButtonOne.bind(this);
        this.handleClickButtonTwo = this.handleClickButtonTwo.bind(this);

    }
    handleClickButtonOne(){
        console.log('b')
        this.setState({
            setButtonOne:'#71C9DB',
            setButtonTwo:'gray',
            setIsButtonOne:true,
            setIsButtonTwo:false,
        })
        
    }
    handleClickButtonTwo(){
        console.log('b')

        this.setState({
            setButtonOne:'gray',
            setButtonTwo:'#71C9DB',
            setIsButtonOne:false,
            setIsButtonTwo:true,
        })
    } 
    render(){

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
                onPress={() => {this.handleClickButtonOne()}}
                style={[
                    styles.button,
                    {borderColor: this.state.isButtonOne ? '#71C9DB' : 'white'},
                ]}>
                    <Text style={[styles.buttonText, {color:this.state.buttonOne}]}>
                        Water
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {this.handleClickButtonTwo()}}
                style={[
                    styles.button,
                    {borderColor: this.state.isButtonTwo ? '#71C9DB' : 'white'},
                ]}>
                    <Text style={[styles.buttonText, {color:this.state.buttonTwo}]}>
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
}
