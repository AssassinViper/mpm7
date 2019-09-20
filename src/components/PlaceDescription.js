import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Consts from '../Consts';
import Controller from '../Controller';
import Realm from '../db/realm';
const {width} = Consts;
const IMAGE_SIZE = width * 0.33;

export default class PlaceDescription extends Component {

  onSelect = ()=>{

    let realm = Realm.getRealm();
    let user = realm.objects("User")[0];

    realm.write(()=>{
      
      user.event = this.props.city;
      
      Controller.controller.Home_onChangeEvent();
      Controller.controller.SnapShot.setData();

      if(Controller.controller.Progress_loadData){
        Controller.controller.Progress_loadData();
      }

      this.props.navigation.navigate("Progress");
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={this.props.pic}
            style={{
              width: IMAGE_SIZE,
              height: IMAGE_SIZE,
              borderRadius: IMAGE_SIZE / 2,
            }}
            resizeMode={'cover'}
          />
        </View>
        <View style={{height: Consts.height * 0.4, width: '100%'}}>
          <Text style={styles.heading}>{this.props.city}</Text>
          <Text style={styles.place}>{this.props.place}</Text>
          <Text style={styles.text1}>{content}</Text>

          <TouchableOpacity style={styles.bt1} onPress={this.onSelect}>
            <Text style={styles.text2}>{'انتخاب'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const content =
  'اگر قصد قدم زدن در یک مکان دنج و پر از آرامش را دارید، اگر به ‌دنبال جایی مناسب برای ورزش کردن هستید، اگر مکان مناسبی برای ثبت عکس‌های زیبا و هنری می‌خواهید، یا حتی اگر می‌خواهید با خانواده به یک پیک‌نیک نیمروزه بروید، تا پایان این مقاله همراه ما باشید';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '85%',
    borderRadius: 35,
    backgroundColor: '#172121',
    overflow: 'visible',
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderColor: '#172121',
    borderWidth: 8,
    borderRadius: IMAGE_SIZE / 2,
    overflow: 'hidden',
    position: 'absolute',
    bottom: '10%',
    right: -IMAGE_SIZE / 2.5,
  },
  heading: {
    fontFamily: 'shabnam',
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
    marginRight: IMAGE_SIZE / 5,
  },
  place: {
    fontFamily: 'shabnam',
    color: '#eee',
    fontSize: 20,
    marginRight: IMAGE_SIZE / 5,
  },

  bt1: {
    height: '15%',
    width: '40%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: Consts.colors.c3,
  },

  text2: {
    fontFamily: 'shabnam',
    direction: 'rtl',
    fontSize: 15,
    color: Consts.colors.a1,
  },

  text1: {
    width: '68%',
    fontSize: 12,
    alignSelf: 'center',
    right: width * 0.057,
    fontFamily: 'shabnam',
    direction: 'rtl',
    color: Consts.colors.a1,
  },
});
