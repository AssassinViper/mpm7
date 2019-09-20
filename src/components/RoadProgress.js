import React from 'react';
import {Svg, G, Path, Circle, Image, Text} from 'react-native-svg';
import RN, {View, Animated, Easing} from 'react-native';
import {svgPathProperties} from 'svg-path-properties';

import Controller from '../Controller';
import c1 from '../assets/images/c1.png';
import c2 from '../assets/images/c2.png';
import c3 from '../assets/images/c3.png';
import c4 from '../assets/images/c4.png';
import c5 from '../assets/images/c5.png';
import c6 from '../assets/images/c6.png';
import c7 from '../assets/images/c7.png';
import c8 from '../assets/images/c8.png';
import Realm from '../db/realm';
const {Text: Label} = RN;
const CAR_WIDTH = 50;
const CAR_HEIGHT = 40;
const snapPoints = {
  0.03: 1,
  0.17: 2,
  0.43: 3,
  0.79: 4,
  0.98: 5,
};
const SP = [0.03, 0.17, 0.43, 0.79, 0.98];

const Cars = {c1, c2, c3, c4, c5, c6, c7, c8};

class RoadProgress extends React.Component {
  constructor(props) {
    super(props);
    this.path =
      'M273 497.2v-85.5s-10.3-36.5-38-34.6c-27.7 1.9-44.1-5.1-52.5-35.1s23.8-50.9 36.9-52.1c13.2-1.2 155.7 0 155.7 0s34.3-8.7 33.5-39.5c-.8-30.9-24.8-41.4-46.8-41.9s-227 0-227 0S98 207 92 178s13.7-52.3 30.5-54.5 104.5-1.3 104.5-1.3 36.7-2.1 37-51.5c.3-49.5 0-70.7 0-70.7';

    this.pathProps = svgPathProperties(this.path);
    this.pathTotalLength = this.pathProps.getTotalLength();
    this.carMoveAnim = new Animated.Value(0);
    this.carRef = React.createRef();
    this.state = {unlockedMissions: 0, car: c1, city: 'تهران', event: 'گیلان'};

    Controller.controller.progress_changeCar = this.changeCar;
    Controller.controller.progress_moveCar = this.moveCar;
    Controller.controller.progress_changeEvent = this.changeEvent;
  }

  componentDidMount() {
    let realm = Realm.getRealm();
    let user = realm.objects('User')[0];

    this.state.city = user.city;
    this.state.event = user.event;

    this.changeCar(user.car);

    // const {pathProps, carRef} = this;
    // this.carMoveAnim.addListener(({value}) => {
    //   this.moveCar(value / this.pathTotalLength);
    // });
    // Animated.timing(this.carMoveAnim, {
    //   toValue: this.pathTotalLength,
    //   duration: 5 * 1000,
    //   easing: Easing.linear,
    // }).start();
    // this.moveCar(1);
  }

  changeCar = id => {
    this.setState({car: Cars[id]});
  };

  changeEvent = event => {
    this.setState({event});
  };

  moveCar = percent => {
    const value = percent * (this.pathTotalLength - 130) + 50;

    if (percent >= SP[4] && this.state.unlockedMissions < 5) {
      this.setState({unlockedMissions: 5});
      // alert(5);
    } else if (percent >= SP[3] && this.state.unlockedMissions < 4) {
      this.setState({unlockedMissions: 4});
      // alert(4);
    } else if (percent >= SP[2] && this.state.unlockedMissions < 3) {
      this.setState({unlockedMissions: 3});
      // alert(3);
    } else if (percent >= SP[1] && this.state.unlockedMissions < 2) {
      this.setState({unlockedMissions: 2});
      // alert(2);
    } else if (percent >= SP[0] && this.state.unlockedMissions < 1) {
      this.setState({unlockedMissions: 1});
      // alert(1);
    }
    const carProps = this.pathProps.getPropertiesAtLength(value);
    this.carRef.current.setNativeProps({
      matrix: [
        1,
        0,
        0,
        1,
        carProps.x - CAR_WIDTH / 2,
        carProps.y - CAR_HEIGHT / 2,
      ],
    });
  };

  componentWillUnmount() {
    this.carMoveAnim.removeAllListeners();
  }

  render() {
    const {origin, destination} = this.props;

    return (
      <View style={{flexGrow: 1}}>
        <Svg
          style={{borderWidth: 0, borderColor: 'blue'}}
          width={'100%'}
          height={'100%'}
          viewBox="0 0 500 500"
          xmlSpace="preserve">
          <Path
            fill={'#3d353b'}
            d="M292.6 498.6h-39.2v-80c0-11.9-9.7-21.5-21.5-21.5h-8.5c-33.5 0-60.7-27.2-60.7-60.7v-4.2c0-33.5 27.2-60.7 60.7-60.7h144.2c11.9 0 21.5-9.7 21.5-21.5 0-11.9-9.7-21.5-21.5-21.5l-234.9.1c-33.5 0-60.7-27.2-60.7-60.7v-4.2c0-33.5 27.2-60.7 60.7-60.7h90.4c11.9 0 21.5-9.7 21.5-21.5V.4h39.2v81.1c0 33.5-27.2 60.7-60.7 60.7h-90.4c-11.9 0-21.5 9.7-21.5 21.5v4.2c0 11.9 9.7 21.5 21.5 21.5l234.9-.1c33.5 0 60.7 27.2 60.7 60.7s-27.2 60.7-60.7 60.7H223.4c-11.9 0-21.5 9.7-21.5 21.5v4.2c0 11.9 9.7 21.5 21.5 21.5h8.5c33.5 0 60.7 27.2 60.7 60.7v80z"
          />
          <Path
            fill={'#fff'}
            d="M262.8 0h2.5v8.9h-2.5zM274.2 471.9h-2.5v-17.6h2.5v17.6zm0-35.3h-2.5V419h2.5v17.6zm-5.9-34.3c-2.3-5.2-5.8-9.9-10.1-13.7l1.7-1.9c4.5 4 8.2 9 10.7 14.5l-2.3 1.1zm-24.9-21.9c-3.7-1.1-7.6-1.7-11.6-1.7h-5.5v-2.5h5.5c4.2 0 8.3.6 12.3 1.8l-.7 2.4zm-34.9-4.4c-5.6-2.1-10.9-5.5-15.2-9.8l1.8-1.8c4 4 9 7.2 14.3 9.2l-.9 2.4zm-24.9-24.9c-1.8-4.7-2.7-9.7-2.7-14.8v-3h2.5v3c0 4.8.8 9.5 2.5 13.9l-2.3.9zm2.9-34.5l-2.3-1c2.3-5.6 5.9-10.6 10.4-14.7l1.7 1.8c-4.2 3.9-7.6 8.7-9.8 13.9zm24.4-22.5l-.8-2.4c4.2-1.4 8.7-2.1 13.1-2.1h4.7v2.5h-4.7c-4.1.1-8.3.7-12.3 2zm156.6-2h-16v-2.5h17.6l.1 2.5h-1.7zm-33.7 0h-17.6v-2.5h17.6v2.5zm-35.3.1h-17.6v-2.5h17.6v2.5zm-35.3 0h-17.6v-2.5h17.6v2.5zm123.4-4.6l-1.1-2.2c5.1-2.6 9.6-6.3 13.2-10.7l1.9 1.6c-3.8 4.6-8.7 8.6-14 11.3zm22-27.6l-2.4-.6c.8-3.1 1.2-6.4 1.2-9.7 0-2.4-.2-4.9-.7-7.3l2.5-.5c.5 2.5.7 5.1.7 7.7-.1 3.6-.5 7.1-1.3 10.4zm-8.5-33.2c-3.3-4.6-7.6-8.6-12.5-11.5l1.3-2.2c5.2 3.1 9.8 7.3 13.3 12.2l-2.1 1.5zm-28.6-16.7c-1.3-.1-2.7-.2-4-.2H354v-2.5h13.5c1.4 0 2.9.1 4.3.2l-.3 2.5zm-35.2-.2h-17.6v-2.5h17.6v2.5zm-35.3 0h-17.6v-2.5H301v2.5zm-35.2 0h-17.6v-2.5h17.6v2.5zm-35.3 0h-17.6v-2.5h17.6v2.5zm-35.3 0h-17.6v-2.5h17.6v2.5zm-35.3 0h-17.6v-2.5h17.6v2.5zm-35.4-.7c-6-1.2-11.6-3.6-16.6-7.1l1.5-2c4.7 3.4 9.9 5.6 15.6 6.7l-.5 2.4zm-28.7-20.5c-3.1-5.3-4.9-11.1-5.4-17.2l2.5-.2c.5 5.7 2.3 11.2 5.1 16.2l-2.2 1.2zm-2.1-34.6l-2.4-.6c1.4-5.9 4-11.4 7.8-16.3l2 1.5c-3.6 4.7-6.1 9.8-7.4 15.4zm20.4-26.1l-1.2-2.2c5.4-2.8 11.3-4.4 17.4-4.7l.1 2.5c-5.7.2-11.2 1.7-16.3 4.4zm108.8-4.6h-4.3v-2.5h4.3c4.3 0 8.6-.7 12.7-2.1l.8 2.4c-4.3 1.5-8.9 2.2-13.5 2.2zm-21.9 0h-17.6v-2.5H201v2.5zm-35.3.1h-17.6V121h17.6v2.5zm86.2-11.5l-1.7-1.8c4.2-3.9 7.5-8.7 9.6-14l2.3.9c-2.3 5.6-5.8 10.8-10.2 14.9zm13.4-32.5h-2.5V61.9h2.5v17.6zm0-35.3h-2.5V26.6h2.5v17.6zM271.7 489.7h2.5v8.9h-2.5z"
          />
          <Path
            fill={'#fff'}
            d="M289.7 498.6h-1.4v-80c0-31.1-25.3-56.4-56.5-56.4h-8.5c-14.2 0-25.8-11.6-25.8-25.8v-4.2c0-14.2 11.6-25.8 25.8-25.8h144.2c31.1 0 56.4-25.3 56.4-56.5 0-31.1-25.3-56.4-56.5-56.4l-234.9.1c-14.2 0-25.8-11.6-25.8-25.8v-4.2c0-14.2 11.6-25.8 25.8-25.8h90.4c31.1 0 56.4-25.3 56.4-56.5V.2h1.4v81.1c0 31.9-25.9 57.9-57.8 57.9h-90.4c-13.4 0-24.4 10.9-24.4 24.4v4.2c0 13.4 10.9 24.4 24.4 24.4l234.9-.1c31.9 0 57.9 25.9 57.9 57.8s-25.9 57.9-57.8 57.9H223.3c-13.4 0-24.4 10.9-24.4 24.4v4.2c0 13.4 10.9 24.4 24.4 24.4h8.5c31.9 0 57.9 25.9 57.9 57.8v80z"
          />
          <Path
            fill={'#fff'}
            d="M257.7 498.6h-1.4v-80c0-13.4-10.9-24.4-24.4-24.4h-8.5c-31.9 0-57.9-25.9-57.9-57.8v-4.2c0-31.9 25.9-57.9 57.8-57.9h144.2c13.4 0 24.4-10.9 24.4-24.4 0-13.4-10.9-24.4-24.4-24.4l-234.9.1c-31.9 0-57.9-25.9-57.9-57.8v-4.2c0-31.9 25.9-57.9 57.8-57.9h90.4c13.4 0 24.4-10.9 24.4-24.4V.2h1.4v81.1c0 14.2-11.6 25.8-25.8 25.8h-90.4c-31.1 0-56.4 25.3-56.4 56.5v4.2c0 31.1 25.3 56.4 56.5 56.4l234.9-.1c14.2 0 25.8 11.6 25.8 25.8 0 14.2-11.6 25.8-25.8 25.8H223.3c-31.1 0-56.4 25.3-56.4 56.5v4.2c0 31.1 25.3 56.4 56.5 56.4h8.5c14.2 0 25.8 11.6 25.8 25.8v80z"
          />
          <G>
            <Path d={this.path} fill="transparent" />
          </G>
          <G>
            <Circle
              fill={this.state.unlockedMissions >= 1 ? '#8b3888' : '#707070'}
              cx={228.7}
              cy={419.5}
              r={16.8}
            />
            <Circle
              fill={this.state.unlockedMissions >= 2 ? '#5e50db' : '#707070'}
              cx={224.2}
              cy={332.5}
              r={16.8}
            />
            <Circle
              fill={this.state.unlockedMissions >= 3 ? '#72bb0a' : '#707070'}
              cx={363.7}
              cy={250}
              r={16.8}
            />
            <Circle
              fill={this.state.unlockedMissions >= 4 ? '#08a0ae' : '#707070'}
              cx={138.8}
              cy={164.5}
              r={16.8}
            />
            <Circle
              fill={this.state.unlockedMissions >= 5 ? '#ffce00' : '#707070'}
              cx={206.2}
              cy={80.5}
              r={16.8}
            />
          </G>

          <G fontSize={35}>
            <Circle cx={275} cy={520} r={45} fill={'#d21358'} />
            <Circle cx={265} cy={-20} r={45} fill={'#6fc94d'} />
          </G>
          <G
            fill={'#fff'}
            fontSize={20}
            fontFamily={'shabnam'}
            transform="translate(0 2)">
            <Text transform="translate(225.538 422.464)">{'1'}</Text>
            <Text transform="translate(218.538 336.464)">{'2'}</Text>
            <Text transform="translate(357.538 254.464)">{'3'}</Text>
            <Text transform="translate(133.538 168.464)">{'4'}</Text>
            <Text transform="translate(200.538 83.465)">{'5'}</Text>
          </G>

          <Image
            ref={this.carRef}
            href={this.state.car}
            width={CAR_WIDTH}
            height={CAR_HEIGHT}
            transform={`translate(${CAR_WIDTH / 2} ${CAR_HEIGHT /
              2}) rotate(0) translate(-${CAR_WIDTH / 2} -${CAR_HEIGHT / 2})`}
          />
        </Svg>

        <Label
          style={{
            position: 'absolute',
            fontFamily: 'shabnam',
            textAlign: 'center',
            top: 20,
            width: '100%',
            fontSize: 25,
          }}>
          {'حرکت از ' + this.state.city + ' به سمت ' + this.state.event}
        </Label>
      </View>
    );
  }
}

export default RoadProgress;
