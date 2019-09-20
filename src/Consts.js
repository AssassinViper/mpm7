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

        a1:"#FFFFFF",
        a2:"#F9F9F9",
        a3:"#F5F5F5",
        a4:"#F3F3F3",
        a5:"#EFEFEF",

        b1:"#212121",
        b2:"#212621",
        b3:"#242126",

        c2:"#6ea85d",
        c3:"#6FC256",//c3:"#77C360",
        c4:"#8fe077",
        c5:"#a6e892",

        d1:"#ba1616"
    }
}

export default Consts;
