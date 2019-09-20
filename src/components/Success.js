import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Consts from '../Consts';

export default class Success extends Component {
    render() {
        return (
            <View style={s.con}>
                
            </View>
        )
    }
}

let {height, width} = Consts;

const s = StyleSheet.create({

    con:{
        height:height*0.5,
        width:width*0.8,
        backgroundColor:'red'
    }
});
