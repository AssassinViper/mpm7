import {Platform, Dimensions} from 'react-native';

let {height, width, fontScale} = Dimensions.get('window');

if(Platform.OS == "android"){

    height -= 24;
}

const Consts = {

    height,
    width,
    fontScale,

    colors:{

        a1:"#FFFFFF",
        a2:"#EEEEEE",

        b1:"#000000",
        b2:"#111111",

        c1:"#F2F2F2",
    }
}

export default Consts;