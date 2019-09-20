import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {View, Animated, Easing} from 'react-native';
import {svgPathProperties} from 'svg-path-properties';
const AnimatedPath = Animated.createAnimatedComponent(Path);

class Province extends React.Component {
  constructor(props) {
    super(props);
    const {svgData} = props;
    if (!svgData) {
      throw new Error('svgData prop must be passed to Province component');
    }
    this.pathLength = svgPathProperties(svgData.path).getTotalLength(
      svgData.path,
    );
    this.state = {
      pathOffset: new Animated.Value(this.pathLength),
      fillOpacity: new Animated.Value(0),
    };
    this.pathAnimStart = Animated.sequence([
      Animated.timing(this.state.pathOffset, {
        duration: 2000,
        toValue: 0,
      }),
      Animated.timing(this.state.fillOpacity, {
        duration: 800,
        toValue: 1,
      }),
    ]);
    // FIXME: throws a error while repeating the animation after it stopped
    // this.pathAnimFinish = Animated.sequence([
    //   Animated.timing(this.state.fillOpacity, {
    //     duration: 800,
    //     toValue: 0,
    //   }),
    //   Animated.timing(this.state.pathOffset, {
    //     duration: 2000,
    //     toValue: this.pathLength,
    //   }),
    // ]);
  }

  componentDidMount() {
    if (this.props.pathAnimation) {
      this.pathAnimStart.start();
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.pathAnimation == true) {
  //     this.pathAnimFinish.stop();
  //     this.pathAnimStart.start();
  //   } else {
  //     this.pathAnimStart.stop();
  //     this.pathAnimFinish.start();
  //   }
  // }

  render() {
    const {width, svgProps, svgData} = this.props;
    const {aspectRatio, viewBox, path} = svgData;
    let w = width;
    if (aspectRatio > 1) {
      w = width - (aspectRatio - 1) * width;
    }
    const _height = w * aspectRatio;
    return (
      <View
        style={{
          width: w,
          height: _height,
        }}>
        <Svg viewBox={viewBox} width={'100%'} height={'100%'}>
          <AnimatedPath
            strokeWidth={1}
            stroke={'#000'}
            fillOpacity={this.state.fillOpacity}
            strokeDasharray={this.pathLength}
            strokeDashoffset={this.state.pathOffset}
            d={path}
            {...svgProps}
          />
        </Svg>
      </View>
    );
  }
}
export default Province;
