import React, { Component } from 'react'
import { Image, StyleSheet, View, StatusBar, BackHandler } from 'react-native';
import {AndroidBackHandler} from 'react-navigation-backhandler';
import Consts from '../Consts';
import Controller from '../Controller';
import Realm from '../db/realm';

export default class Loading extends Component {

    async componentDidMount(){

        Realm.realmInit(()=>{

            Controller.controller = this.controller;

            setTimeout(()=>{
                this.props.navigation.navigate("Home");
            }, 3000)
            
        });
    }

    onBack = ()=>{

        BackHandler.exitApp();
        return true;
    }

    render() {
        return (
            <View style={s.con}>
                <Controller ref={r=>this.controller=r}/>
                <StatusBar backgroundColor={Consts.colors.c3}/>
                <AndroidBackHandler onBackPress={this.onBack}/>

                <Image style={s.img1} source={car} resizeMode="contain"/>
               
            </View>
        )
    }
}

let {height, width} = Consts;

const s = StyleSheet.create({

    con:{
        height,
        width,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Consts.colors.a1
    },

    img1:{
        
        width:"70%",
    }
})
