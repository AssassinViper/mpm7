import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native';
import Consts from '../Consts';
import Controller from '../Controller';

export default class Home extends Component {

    componentDidMount(){

        alert(Controller.controller.ab)
    }

    render() {
        return (
            <View style={s.con}>
                <Text style={{fontFamily:'shabnam', fontSize:20}}>{"آب جوج"}</Text>
            </View>
        )
    }
}

let {height, width} = Consts;

const s = StyleSheet.create({

    con:{
        height,
        width,
    }
})
