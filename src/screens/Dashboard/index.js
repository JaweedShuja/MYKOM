import React,{useState} from 'react'
import { 
    Text, 
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback,
    TextInput
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
import Nestle from '../../images/nestle.png'
var _props
let Home = []
let Categories = []
let Deals = []
let Account = []
let Cart = []
Home.push(
    <View>
        <View style={styles.buttonContainer}>
                <TouchableOpacity 
                
                style={[
                    styles.button,
                    {borderColor: true ? '#71C9DB' : 'white'},
                ]}>
                    <Text style={[styles.buttonText, {color:'#71C9DB'}]}>
                        Water
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                
                style={[
                    styles.button,
                    {borderColor: false ? '#71C9DB' : 'white'},
                ]}>
                    <Text style={[styles.buttonText, {color:'gray'}]}>
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
                    <TouchableOpacity
                    onPress={() => _props.navigation.navigate('ItemByCompany')}
                     style={styles.product}>
                            <Image
                            source={Nestle}
                            style={{height:54, width:90,}}

                            />
                    </TouchableOpacity>
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
    </View>
)
Categories.push(
    <View>
        <ScrollView>
        <TouchableOpacity style={{height:50, borderColor:'black', borderBottomWidth:1,  justifyContent:'center',}}>
            <Text style={{marginLeft:10,  fontSize:18}}>
                Water Botol 1.5 LTR
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:50, borderColor:'black', borderBottomWidth:1,  justifyContent:'center',}}>
            <Text style={{marginLeft:10,  fontSize:18}}>
                Water Botol 2.25 LTR
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:50, borderColor:'black', borderBottomWidth:1,  justifyContent:'center',}}>
            <Text style={{marginLeft:10,  fontSize:18}}>
                Water Botol 5 LTR
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:50, borderColor:'black', borderBottomWidth:1,  justifyContent:'center',}}>
            <Text style={{marginLeft:10,  fontSize:18}}>
                Juice Regular
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:50, borderColor:'black', borderBottomWidth:1,  justifyContent:'center',}}>
            <Text style={{marginLeft:10,  fontSize:18}}>
                Juice Family Pack
            </Text>
        </TouchableOpacity>
        </ScrollView>
    </View>
)
Deals.push(
    <View style={{alignItems:'center', justifyContent:'center',}}>
        <Text style={{fontSize:18}}>No Deals Right Now</Text>
    </View>
)
Account.push(
    <View>
        <View style={[{
        marginHorizontal:20,
        borderBottomWidth:1,
        borderColor:'gray'
    }, {marginTop:30}]}>
            
            <TextInput style={{input:{
        fontSize:17,
    },}}
                placeholder="Name"
            />
            </View>
            <View style={[{
        marginHorizontal:20,
        borderBottomWidth:1,
        borderColor:'gray'
    }, {marginTop:10,}]}>
                
            <TextInput style={{input:{
        fontSize:17,
    },}}
                placeholder="Email Address"
            />
            </View>
    
            <TouchableOpacity style={{
        height:45,
        backgroundColor:'#71C9DB',
        marginTop:50,
        marginHorizontal:20,
        borderRadius:5, 
        alignItems:'center',
        justifyContent:'center',       
    }}>
                <Text style={{
        fontWeight:'bold',
        fontSize:16,
        color:'white',
    }}>
                    Save
                </Text>
            </TouchableOpacity> 
    </View>
)
Cart.push(
    <View style={{alignItems:'center', justifyContent:'center',}}>
        <Text style={{fontSize:18}}>Your Cart is Empty</Text>
    </View>
)
export default class Dashboard extends React.Component{
    static navigationOptions = {
        header:null
    }
    constructor(props){
        super(props)
        _props = props;
        this.state = {
            buttonOne:'#71C9DB',
            buttonTwo:'gray',
            isButtonOne: true,
            isButtonTwo: false,
            open: false,
            currentFragment:'Home'
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
                <TouchableOpacity
                style={{width:'100%'}}
                onPress={() => {
                    this.props.navigation.navigate('Filters')
                    // this.setState({open:false})

                }}
                >
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
                <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('SuqiaDelivery')
                    // this.setState({open:false})

                }}
                style={{width:'100%'}}
                >
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
                <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('MyAccount')
                    // this.setState({open:false})

                }}
                style={{width:'100%'}}
                >
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
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.navigate('History')
                    // this.setState({open:false})

                }}
                style={{width:'100%'}}
                >
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
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.navigate('MyAddressBook')
                    // this.setState({open:false})

                }}
                style={{width:'100%'}}
                >
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
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.navigate('CitySelect')
                    // this.setState({open:false})

                }}
                style={{width:'100%'}}
                >
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
                <TouchableOpacity
                style={{width:'100%'}}
                >
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
                <TouchableOpacity
                style={{width:'100%'}}
                >
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
                <TouchableOpacity
                style={{width:'100%'}}
                >
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
            <View style={{flex:1,}}>
            <View style={{flex:13, backgroundColor:'white'}}>
            {
                this.state.currentFragment == "Home" ? Home : null}
              {  this.state.currentFragment == "Categories" ? Categories : null
            }
            {
                this.state.currentFragment == "Deals" ? Deals : null
            }
            {
                this.state.currentFragment == "Account" ? Account : null

            }
            {
                this.state.currentFragment == "Cart" ? Cart : null

            }
                </View>
                <View style={{flex:2, }}>
                <View style={styles.bottomNavBar}>
                <TouchableOpacity 
                onPress={() => {this.setState({ 
                    currentFragment:"Home"
                })}}
                style={styles.navItem}>
                    <Image
                        source={HomeIcon}
                        style={styles.navImage}
                    />
                    <Text style={styles.navText}>
                        Home
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                 onPress={() => {this.setState({ 
                    currentFragment:"Categories"
                })}}
                style={styles.navItem}>
                    <Image
                        source={CategoriesIcon}
                        style={styles.navImage}
                    />
                    <Text style={styles.navText}>
                        Categories
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                 onPress={() => {this.setState({ 
                    currentFragment:"Deals"
                })}}
                style={styles.navItem}>
                    <Image
                        source={DealsIcon}
                        style={styles.navImage}
                    />
                    <Text style={styles.navText}>
                        Deals
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={() => {this.setState({ 
                    currentFragment:"Account"
                })}}
                 style={styles.navItem}>
                    <Image
                        source={AccountIcon}
                        style={styles.navImage}
                    />
                    <Text style={styles.navText}>
                        Acount
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                 onPress={() => {this.setState({ 
                    currentFragment:"Cart"
                })}}
                style={styles.navItem}>
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
            
            </View>
            
            
            </MenuDrawer>
        </View>
        </TouchableWithoutFeedback>
    );
  }
}
