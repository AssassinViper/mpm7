import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableNativeFeedback,
  Image,
  Animated,
  TouchableOpacity,
  BackHandler,
  TextInput,
} from 'react-native';
import Consts from '../Consts';
const {width: WIDTH, height: HEIGHT} = Consts;
import Controller from '../Controller';
import Province from '../components/Provinces/Province';
import {
  Tehran,
  Guilan,
  WestAzarbayjan,
  Lorestan,
} from '../components/Provinces/SvgData';
import scoreboardIcon from '../assets/images/scoreboard.png';
import arrowUpIcon from '../assets/images/arrow_up.png';
import logo from '../assets/images/racing.png';
import profile from '../assets/icons/profile.png';
import SnapShot from '../components/SnapShot';
import Realm from '../db/realm';
import Success from '../components/Success';
import {AndroidBackHandler} from 'react-navigation-backhandler';
const ICON_SIZE = 36;

export default class Home extends Component {
  state = {
    percent: 0,
    event_selected: false,
    city: 'تهران',
    event: '',
    map: Tehran,
  };
  percentText = React.createRef();

  constructor(props) {
    super(props);
    Controller.controller.Home_changePercent = this.changePercent;
    Controller.controller.Home_onChangeEvent = this.onChangeEvent;
    this.arrowOpacity = new Animated.Value(0);
    this.arrowTransY = new Animated.Value(20);
  }
  componentDidMount() {
    Animated.stagger(0, [
      Animated.timing(this.arrowOpacity, {toValue: 1, duration: 800}),
      Animated.timing(this.arrowTransY, {toValue: 0, duration: 700}),
    ]).start();

    this.loadData();
  }

  onChangeEvent = ()=>{

    let realm = Realm.getRealm();
    let user = realm.objects('User')[0];

    this.state.event = user.event;
    this.state.map = event2map(this.state.event);
    this.state.percent = 0;
    Controller.controller.SnapShot.change_percent(0)
    this.state.event_selected = true;

    this.setState(this.state);
  };

  changePercent = percent => {

    if(percent == 100){
      //Controller.controller.show_Dialog(<Success/>);
    }
    this.percentText.current.setNativeProps({text: percent + ' %'});
  };

  loadData = cb => {
    let realm = Realm.getRealm();
    let user = realm.objects('User')[0];
    this.state.city = user.city;
    this.state.event = user.event;
    
    if(user.event != "none"){
      this.state.event_selected = true;
      this.state.map = event2map(user.event);
    }else{
      this.state.event = user.city;
    }

    this.setState(this.state, cb);
  };

  onProfile = () => {
    this.props.navigation.navigate('Profile');
  };

  onTopUsers = () => {
    this.props.navigation.navigate('TopUsers');
  };

  onStateSelect = () => {
    this.props.navigation.navigate('StateSelect');
  };

  onProgress = () => {
    this.props.navigation.navigate('Progress');
  };

  onBack = () => {
    Controller.controller.SnapShot.clearInterval();
    BackHandler.exitApp();
    return true;
  };

  render() {
    let percent_style = {display: 'flex'};

    let progress_btn_style = styles.footerButton;
    let percentIcon = {};

    if (!this.state.event_selected) {
      percent_style = {
        display: 'none',
      };
      progress_btn_style = styles.btn2;
      percentIcon = {tintColor: Consts.colors.c3};
    }

    return (
      <View style={styles.container}>
        <AndroidBackHandler onBackPress={this.onBack} />
        {/* Header */}
        <View style={styles.header}>
          {/* ScoreBoard Icon */}
          <TouchableNativeFeedback onPress={this.onTopUsers}>
            <Image
              resizeMode={'contain'}
              source={scoreboardIcon}
              style={styles.scoreBoardIcon}
            />
          </TouchableNativeFeedback>

          {/* App Title */}
          <View style={styles.appTitle}>
            <Text style={[styles.textFontStyle, styles.appTitleText]}>
              جاده سوار
            </Text>
            <Image
              resizeMode={'contain'}
              source={logo}
              style={styles.scoreBoardIcon}
            />
          </View>

          <TouchableNativeFeedback onPress={this.onProfile}>
            <Image
              resizeMode={'contain'}
              source={profile}
              style={styles.scoreBoardIcon}
            />
          </TouchableNativeFeedback>
        </View>

        {/* main center content */}
        <View style={styles.content}>
          <Text style={[styles.textFontStyle, styles.contentText]}>{"نقطه شروع من : تهران"}</Text>

          <Province
            height={HEIGHT * 0.25}
            svgData={this.state.map}
            svgProps={{fill: '#c5f0b9', strokeWidth: 1, stroke: '#c5f0b9'}}
            pathAnimation={true}
          />

          
          <Text style={styles.txt2}>{"\n"+this.state.event}</Text>

          <TouchableOpacity style={styles.btn1} onPress={this.onStateSelect}>
            <Text style={styles.txt1}>{'سفر های این هفته'}</Text>
          </TouchableOpacity>

        </View>

        {/* footer */}
        <View style={styles.footer}>
          <View style={styles.sec1}>
            <SnapShot />
          </View>

          <TouchableOpacity
            disabled={!this.state.event_selected}
            style={progress_btn_style}
            onPress={this.onProgress}>
            <Animated.Image
              resizeMode={'contain'}
              source={arrowUpIcon}
              style={[
                styles.scoreBoardIcon,
                {
                  transform: [{translateY: this.arrowTransY}],
                  opacity: this.arrowOpacity,
                },
                percentIcon,
              ]}
            />
            <TextInput
              editable={false}
              ref={this.percentText}
              style={[styles.footerButtonText, percent_style]}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    height: Consts.height * 0.6,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },
  contentText: {
    fontSize: 22,
  },

  btn1: {
    height: Consts.height * 0.1,
    width: Consts.width * 0.8,
    backgroundColor: Consts.colors.c3,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  btn2: {
    height: Consts.height * 0.1,
    width: Consts.width * 0.8,
    padding: 10,
    borderColor: Consts.colors.c3,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginBottom: 20,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sec1: {
    height: '50%',
    width: '100%',
  },

  footer: {
    height: Consts.height * 0.31,
    alignItems: 'center',
  },
  footerButton: {
    height: Consts.height * 0.1,
    width: Consts.width * 0.8,
    padding: 10,
    backgroundColor: Consts.colors.c3,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 22,
    padding: 0,
    fontFamily: 'shabnam',
    marginLeft: 10,
    textAlign: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 5,
  },

  scoreBoardIcon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    margin: 2,
  },
  appTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitleText: {
    fontSize: 24,
    marginRight: 5,
  },
  textFontStyle: {
    fontFamily: 'shabnam',
  },
  tempIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'green',
  },

  txt1: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'shabnam',
  },

  txt2: {
    position: 'absolute',
    height: '60%',
    width: '100%',
    top: Consts.height * 0.1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'shabnam',
    fontSize: 20,
    //backgroundColor:'red',
    color: 'rgba(0,0,0,0.2)',
  },
});

const event2map = event => {

  let pic = undefined;

  switch (event) {
    case 'تهران':
      pic = Tehran;
      break;
    case 'گیلان':
      pic = Guilan;
      break;
    case 'لرستان':
      pic = Lorestan;
      break;
    case 'آذربایجان غربی':
      pic = WestAzarbayjan;
      break;
    default:
      pic = Tehran;
  }

  return pic
};
