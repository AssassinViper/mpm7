import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './pages/Home';
import Loading from './pages/Loading';

class emptyView extends React.Component{

  render(){
      return(<View></View>)
  }
}

const Navigator = createBottomTabNavigator({

  Loading,
  Home,

},{
        
  initialRouteName:'Loading',
  /*navigationOptions:{
      headerStyle:{height:0, opacity:0}
  },*/
  headerLayoutPreset:false,
  lazy:true,
  animationEnabled:true,
  swipeEnabled:false,
  tabBarComponent:emptyView
});

export default createAppContainer(Navigator);
