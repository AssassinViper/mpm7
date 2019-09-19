import React, {Component} from 'react';
import Carousel from 'react-native-snap-carousel';
import {Text, View} from 'react-native';
import Consts from '../Consts';
import Province from '../components/Provinces/Province';
import {
  Guilan,
  Lorestan,
  WestAzarbayjan,
} from '../components/Provinces/SvgData';
const {width, height} = Consts;
const ITEM_WIDTH = width * 0.5;
const ITEM_HEIGHT = ITEM_HEIGHT * 0.9;

export class StateSelect extends Component {
  carousel = React.createRef();
  data = [Guilan, WestAzarbayjan, Lorestan];

  _renderItem = ({item, index}) => (
    <View
      style={{
        height: ITEM_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Province
        svgData={item}
        width={ITEM_WIDTH}
        svgProps={{
          fill: '#e4f3df',
          fillOpacity: 1,
          stroke: '#000',
          strokeWidth: 1,
        }}
      />
    </View>
  );
  render() {
    return (
      <View>
        <Carousel
          sliderWidth={width}
          sliderHeight={height}
          itemWidth={ITEM_WIDTH}
          itemHeight={ITEM_HEIGHT}
          data={this.data}
          lockScrollWhileSnapping={true}
          renderItem={this._renderItem}
          inactiveSlideScale={0.6}
          inactiveSlideOpacity={0.4}
          inactiveSlideShift={40}
          centerContent={true}
          activeSlideAlignment={'center'}
          contentContainerCustomStyle={{justifyContent: 'space-evenly'}}
          slideStyle={{alignItems: 'center'}}
        />
      </View>
    );
  }
}

export default StateSelect;
