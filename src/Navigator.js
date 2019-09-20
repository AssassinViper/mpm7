import React from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Home from './pages/Home';
import Loading from './pages/Loading';
import StateSelect from './pages/SelectDestination';
import Register from './pages/Register';
import Verification from './pages/Verification';
import TopUsers from './pages/TopUsers';
import Profile from './pages/Profile';
import Progress from './pages/Progress';
import Dialog, {ScaleAnimation} from 'react-native-popup-dialog';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Consts from './Consts';
import checked from '../src/assets/icons/checked.png'
import Controller from './Controller';

let {height, width} = Consts;
class emptyView extends React.Component {

  state = {dialog:false, diag_comp:null};

  constructor(props){
    super(props);
    Controller.controller.show_Dialog = this.show;
  }

  show = (Component)=>{
    /*
    this.state.diag_comp = Component;
    this.state.dialog = true;
    this.setState(this.state); */
  }

  dismiss = ()=>{
    this.state.dialog = false;
    this.setState(this.state);
  }

  render() {
    return <View>

      <Dialog visible={this.state.dialog} dialogAnimation={new ScaleAnimation()}>
        {this.state.diag_comp}
        <TouchableOpacity style={{height:height*0.08, width:width*0.2}} onPress={this.dismiss}>
          <Image source={checked} style={{height:'50%', tintColor:Consts.colors.c3}} resizeMode="contain"/>
        </TouchableOpacity>
      </Dialog>

    </View>;
  }
}

const Navigator = createBottomTabNavigator(
  {
    StateSelect,
    Loading,
    Home,
    Register,
    Verification,
    TopUsers,
    Profile,
    Progress,
  },
  {
    initialRouteName: 'Loading',
    /*navigationOptions:{
      headerStyle:{height:0, opacity:0}
  },*/
    headerLayoutPreset: false,
    lazy: true,
    animationEnabled: true,
    swipeEnabled: false,
    tabBarComponent: emptyView,
  },
);

export default createAppContainer(Navigator);
