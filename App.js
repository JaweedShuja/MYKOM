import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'

import Splash from './src/screens/Splash'
import CountrySelect from './src/screens/CountrySelect'
import CitySelect from './src/screens/CitySelect'
import AreaSelect from './src/screens/AreaSelect'
import Dashboard from './src/screens/Dashboard'
import About from './src/screens/About'
import MyAddressBook from './src/screens/MyAddressBook'
import History from './src/screens/History'
import MyAccount from './src/screens/MyAccount'
import Filters from './src/screens/Filters'
import AddAddress from './src/screens/AddAddress'
import ItemByCompany from './src/screens/ItemByCompany'
import SuqiaDelivery from './src/screens/SuqiaDelivery'
import ReceverDetails from './src/screens/ReceiverDetails'
import FinalizeOrder from './src/screens/FinelizeOrder'
import MyOrders from './src/screens/MyOrders'

const RootStack = createStackNavigator(
  {
    Splash: {
      screen: Splash
    },
    CitySelect: {
      screen: CitySelect
    },
    AreaSelect:{
        screen: AreaSelect
    },
    Dashboard:{
        screen:Dashboard
    },
    Filters:{
        screen:Filters
    },
    SuqiaDelivery:{
        screen:SuqiaDelivery
    },
    ReceverDetails:{
        screen:ReceverDetails
    },
    FinalizeOrder:{
        screen:FinalizeOrder
    },
    MyAccount:{
        screen:MyAccount
    },
    MyOrders:{
        screen:MyOrders
    },
    MyAddressBook:{
        screen:MyAddressBook
    },
    AddAddress:{
        screen:AddAddress
    },
    History:{
        screen:History
    },
    ItemByCompany:{
        screen:ItemByCompany
    }
  },
  {
    initialRouteName: 'Splash'
  }

);

class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

export default createAppContainer(RootStack);