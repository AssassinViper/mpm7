import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Dimensions, Platform } from 'react-native'
import Consts from '../Consts';

let {height, width} = Dimensions.get("window");

if(Platform.OS === 'android'){
    height -=24;
}

export default class RegisterButton extends Component {
    render() {

        //let enable = this.props.enable;
        let enable = true;

        return (
            
            <View style={s.con}>
            <TouchableOpacity disabled={!enable} style={enable?s.con1:s.con2} onPress={this.props.onPress}>

                <Text style={enable?s.text1:s.text2}>{this.props.title}</Text>
                
            </TouchableOpacity>
            </View>
        )
    }
}

const s = StyleSheet.create({

    con:{

        height:height*0.1,
        width,
        alignItems:'center',
    },

    con1:{

        height:height*0.1,
        width:width*0.86,
        marginVertical:10,
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center',
        elevation:4,
        backgroundColor:Consts.colors.c3
    },

    con2:{

        height:height*0.1,
        width:width*0.86,
        marginVertical:10,
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:Consts.colors.c3
    },

    text1:{
        fontFamily:'shabnam',
        fontSize:18,
        color:Consts.colors.a1,
    },

    text2:{
        fontFamily:'shabnam',
        fontSize:18,
        color:Consts.colors.c3,
    }
})
