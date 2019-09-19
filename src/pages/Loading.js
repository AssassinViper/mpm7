import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Consts from '../Consts';
import Controller from '../Controller';
import Realm from '../db/realm';

export default class Loading extends Component {

    async componentDidMount(){

        Realm.realmInit(()=>{

            Controller.controller = this.controller;
            this.props.navigation.navigate("Home");
        });
    }

    render() {
        return (
            <View style={s.con}>
                <Controller ref={r=>this.controller=r}/>
               
            </View>
        )
    }
}

let {height, width} = Consts;

const s = StyleSheet.create({

    con:{
        height,
        width,
        backgroundColor:Consts.colors.a1
    }
})
