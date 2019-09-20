import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Consts from '../Consts'
import Header from '../components/Header';
import { AndroidBackHandler } from 'react-navigation-backhandler';

export default class Progress extends Component {
    
    onBack = ()=>{
        this.props.navigation.navigate("Home");
        return true;
    }

    render() {
        return (
            <View style={s.con}>
                <AndroidBackHandler onBackPress={this.onBack}/>
                <Header title="پروسه تکمیل سفر" onBack={this.onBack}/>
                
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
