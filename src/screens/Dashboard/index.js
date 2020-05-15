import React,{useState} from 'react'
import { 
    Text, 
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback
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

import filter from '../../images/filter.png'
import suqia from '../../images/suqia.png'
import user from '../../images/user.png'
import cartWhite from '../../images/cartWhite.png'
import homeWhite from '../../images/homeWhite.png'
import pin from '../../images/pin.png'
import world from '../../images/world.png'
import WhatsApp from '../../images/whatsapp.png'
import faq from '../../images/faq.png'

export default class Dashboard extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            buttonOne:'#71C9DB',
            buttonTwo:'gray',
            isButtonOne: true,
            isButtonTwo: false,
            open: false,
        }
        this.handleClickButtonOne = this.handleClickButtonOne.bind(this);
        this.handleClickButtonTwo = this.handleClickButtonTwo.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this)

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
    onSwipePerformed = (action) => {
    
        switch(action){
          case 'left':{
            this.toggleOpen()
            break;
          }
           case 'right':{
            console.log('right Swipe performed');
            break;
          }
           case 'up':{
            console.log('up Swipe performed');
            break;
          }
           case 'down':{
            console.log('down Swipe performed');
            break;
          }
           default : {
           console.log('Undeteceted action');
           }
        }
      }
      toggleOpen = () => {
        this.setState({ open: !this.state.open });
      }; 
      drawerContent = () => {
        return (
            <SwipeGesture gestureStyle={{ width:'100%', backgroundColor:'#71C9DB', flex:1, height:'100%', marginTop:-5}} 
                onSwipePerformed={this.onSwipePerformed}>
              
            {/* <View style={{backgroundColor:'#38B6FF', flex:1,}}> */}
                
    
                <Text
                    style={{color:'white', marginLeft:15, fontSize:25, marginTop:20,}}
                >Welcome</Text>
    
               <View style={styles.drawerOptionContainer}>
                   <Image
                        style={styles.drawerIcon}
                        source={filter}
                   />
                <TouchableOpacity>
                <Text
                    style={{color:'white', marginLeft:15, fontSize:16,  marginTop:20,}}
                >Filters</Text>
                </TouchableOpacity>
                </View>
    

                <View style={styles.drawerOptionContainer}>
                   <Image
                        style={styles.drawerIcon}
                        source={suqia}
                   />
                <TouchableOpacity>
                <Text
                    style={{color:'white', marginLeft:15, fontSize:16, marginTop:20,}}
                >Suqia Delivery</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.drawerOptionContainer}>
                   <Image
                        style={{height:40, width:30, marginLeft:7, marginTop:19}}
                        source={user}
                   />
                <TouchableOpacity>
                <Text   
                    style={{color:'white', marginLeft:15,  fontSize:16, marginTop:20,}}
                >My Account</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.drawerOptionContainer}>
                   <Image
                        style={styles.drawerIcon}
                        source={cartWhite}
                   />
                <TouchableOpacity>
                <Text
                    style={{color:'white', marginLeft:15, fontSize:16,  marginTop:20,}}
                >My Orders</Text>
                </TouchableOpacity>
                </View>
    
                <View style={styles.drawerOptionContainer}>
                   <Image
                        style={styles.drawerIcon}
                        source={homeWhite}
                   />
                <TouchableOpacity>
                <Text
                    style={{color:'white', marginLeft:15, fontSize:16, marginTop:20,}}
                >My Address Book</Text>
                </TouchableOpacity>
                </View>
    
                <View style={styles.drawerOptionContainer}>
                   <Image
                        style={{height:30, 
                            width:16,
                            marginLeft:15,
                            marginTop:15,}}
                        source={pin}
                   />
                <TouchableOpacity>
                <Text   
                    style={{color:'white', marginLeft:20,  fontSize:16, marginTop:20,}}
                >Select You City</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.drawerOptionContainer}>
                   <Image
                        style={{height:20, 
                            width:20,
                            marginLeft:13,
                            marginTop:15,}}
                        source={world}
                   />
                <TouchableOpacity>
                <Text
                    style={{color:'white', marginLeft:15, fontSize:16,  marginTop:20,}}
                >Change to Arabic</Text>
                </TouchableOpacity>
                </View>
    
                <View style={styles.drawerOptionContainer}>
                   <Image
                        style={{height:35, 
                            width:35,
                            marginLeft:5,
                            marginTop:15,}}
                        source={WhatsApp}
                   />
                <TouchableOpacity>
                <Text
                    style={{color:'white', marginLeft:10, fontSize:16, marginTop:20,}}
                >WhatsApp Us</Text>
                </TouchableOpacity>
                </View>
    

                <View style={styles.drawerOptionContainer}>
                   <Image
                        style={styles.drawerIcon}
                        source={faq}
                   />
                <TouchableOpacity>
                <Text   
                    style={{color:'white', marginLeft:15,  fontSize:16, marginTop:20,}}
                >Help Center</Text>
                </TouchableOpacity>
                </View>
                
            {/* </View> */}
            </SwipeGesture>
    
        );
      };
    render(){

    return(
        <TouchableWithoutFeedback
        onPress={() => this.setState({open:false})}
        >
        <View style={styles.container}>
            <MenuDrawer 
          open={this.state.open} 
          drawerContent={this.drawerContent()}
          drawerPercentage={60}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
            <View style={styles.header}>

                <TouchableOpacity 
                onPress={this.toggleOpen}
                style={styles.backIconImageContainer}>
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
            </MenuDrawer>
        </View>
        </TouchableWithoutFeedback>
    );
  }
}
