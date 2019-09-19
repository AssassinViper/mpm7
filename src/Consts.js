import {Platform, Dimensions} from 'react-native';

let {height, width, fontScale} = Dimensions.get('window');

if (Platform.OS == 'android') {
  height -= 24;
}

export const Consts = {
  height,
  width,
  fontScale,

  colors: {
    a1: '#FFFFFF',
    a2: '#EEEEEE',

    b1: '#000000',
    b2: '#111111',

    c3: '#77C360',
  },
};

export default Consts;
