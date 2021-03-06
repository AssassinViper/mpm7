import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import Realm from '../db/realm';
import Controller from '../Controller';
import c1 from '../assets/images/c1.png';
import c2 from '../assets/images/c2.png';
import c3 from '../assets/images/c3.png';
import c4 from '../assets/images/c4.png';
import c5 from '../assets/images/c5.png';
import c6 from '../assets/images/c6.png';
import c7 from '../assets/images/c7.png';
import c8 from '../assets/images/c8.png';
import Consts from '../Consts';

const Cars = {c1, c2, c3, c4, c5, c6, c7, c8};

export default class SnapShot extends Component {
  state = {component: null, car: c1, progress: 25, city:"", event:""};

  constructor(props) {
    super(props);

    Controller.controller.SnapShot = this;
  }

  componentDidMount() {
    this.setData();

    if(Controller.controller.Home_changePercent != undefined){
      
      this.interval = setInterval(() => {
        if (this.state.progress < 100) {
          this.state.progress += Consts.speed
          //0.15
          Controller.controller.Home_changePercent(
            Math.floor(this.state.progress),
          );

          if(Controller.controller.progress_moveCar != undefined){
            Controller.controller.progress_moveCar(this.state.progress/100);
          }
          
          this.setData();
        }
      }, 200);
    }
  }

  clearInterval = ()=>{
    
    clearInterval(this.interval);
  }

  change_percent = (percent)=>{
    this.state.progress = percent;
  }

  setData = () => {
    let realm = Realm.getRealm();
    let user = realm.objects('User')[0];

    this.state.city = user.city;

    this.state.car = Cars[user.car];

    if (user.event == 'none') {
      let c = (
        <Image style={s.img1} source={this.state.car} resizeMode="contain" />
      );

      this.state.component = c;
      this.setState(this.state);
    } else {

      this.state.event = user.event;

      let c = (
        <View style={s.sec1}>
          <View style={s.sec2}>
            <View
              style={{
                backgroundColor: Consts.colors.c2,
                borderRadius: 10,
                height: '100%',
                width: `${this.state.progress}%`,
              }}
            />
            <Image
              style={s.img2}
              source={this.state.car}
              resizeMode="contain"
            />
          </View>

          <View style={s.sec3}>
            <Text style={s.text1}>{this.state.city}</Text>
            <Text style={s.text1}>{this.state.event}</Text>
          </View>
        </View>
      );

      this.state.component = c;
      this.setState(this.state);
    }
  };

  render() {
    return <View style={s.con}>{this.state.component}</View>;
  }
}

let {height, width} = Consts;

const s = StyleSheet.create({
  con: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  img1: {
    height: '30%',
  },

  img2: {
    height: height * 0.08,
    width: height * 0.08,
    right: 30,
    bottom: 2,
  },

  sec1: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sec2: {
    height: '10%',
    width: '70%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Consts.colors.c5,
    borderRadius: 10,
    top: 10,
  },

  sec3: {
    flexDirection: 'row',
    width: '70%',
    marginTop: 5,
    top: 10,
    justifyContent: 'space-between',
  },

  text1: {
    fontFamily: 'shabnam',
    fontSize: 12,
    color: Consts.colors.b3,
  },
});
