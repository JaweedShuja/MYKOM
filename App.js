import React, {useState, useEffect} from 'react'
import {
    Text,
    View,
} from 'react-native'
import Splash from './src/screens/Splash'
import CountrySelect from './src/screens/CountrySelect'
import CitySelect from './src/screens/CitySelect'
import AreaSelect from './src/screens/AreaSelect'
import Dashboard from './src/screens/Dashboard'
import About from './src/screens/About'
import MyAddressBook from './src/screens/MyAddressBook'
import History from './src/screens/History'
import MyAccount from './src/screens/MyAccount'


export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentScreen:'Dashboard'
        }
        this.changeScreen = this.changeScreen.bind(this)
    }
    componentDidMount(){
        var t = setInterval(() => {
            this.setState({
                currentScreen:'CountrySelect'
            })
            clearInterval(t)
        },3000)
    }
    changeScreen(name){
        this.setState({
            currentScreen:name
        })
    }
    render(){

    // switch(this.state.currentScreen){
    //     case 'Splash' :
    //     return <Splash/>;

    //     case 'CountrySelect' :
    //     return <CountrySelect change={this.changeScreen}/>;

    //     case 'CitySelect':
    //     return <CitySelect change={this.changeScreen}/>
        
    //     case 'AreaSelect' :
    //     return <AreaSelect change={this.changeScreen}/>

    //     case 'Dashboard' :
    //     return <Dashboard changeScreen={this.changeScreen}/>

    // }
    return <MyAccount/>
}
    
}
