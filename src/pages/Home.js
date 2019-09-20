import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableNativeFeedback,
  Image,
  Animated,
} from 'react-native';
import Consts from '../Consts';
const {width: WIDTH} = Consts;
import Controller from '../Controller';
import Province from '../components/Provinces/Province';
import {Tehran} from '../components/Provinces/SvgData';
import scoreboardIcon from '../assets/images/scoreboard.png';
import arrowUpIcon from '../assets/images/arrow_up.png';
import logo from '../assets/images/racing.png';
const ICON_SIZE = 36;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.arrowOpacity = new Animated.Value(0);
    this.arrowTransY = new Animated.Value(20);
  }
  componentDidMount() {
    Animated.stagger(0, [
      Animated.timing(this.arrowOpacity, {toValue: 1, duration: 600}),
      Animated.timing(this.arrowTransY, {toValue: 0, duration: 500}),
    ]).start();
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          {/* ScoreBoard Icon */}
          <TouchableNativeFeedback onPress={alert}>
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

          {/* profile icon */}
          <View style={styles.tempIcon} />
        </View>

        {/* main center content */}
        <View style={styles.content}>
          <Text style={[styles.textFontStyle, styles.contentText]}>
            مکان فعلی شما: تهران
          </Text>
          <Province
            width={WIDTH * 0.6}
            svgData={Tehran}
            svgProps={{fill: '#c5f0b9', strokeWidth: 1, stroke: '#c5f0b9'}}
            pathAnimation={true}
          />
          <Text style={[styles.textFontStyle, styles.contentText]}>
            مسیرت رو انتخاب کن {' ; -)'}
          </Text>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <TouchableNativeFeedback>
            <View style={styles.footerButton}>
              <Animated.Image
                resizeMode={'contain'}
                source={arrowUpIcon}
                style={[
                  styles.scoreBoardIcon,
                  {
                    transform: [{translateY: this.arrowTransY}],
                    opacity: this.arrowOpacity,
                  },
                ]}
              />
              <Text style={styles.footerButtonText}>32 %</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  contentText: {
    fontSize: 22,
  },
  footer: {
    flexGrow: 4,
    backgroundColor: '#c5f0b9',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerButton: {
    width: '80%',
    padding: 10,
    backgroundColor: '#6bc94f',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'shabnam',
    marginLeft: 10,
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
});
