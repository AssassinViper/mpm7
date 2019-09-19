import React, { Component } from 'react'
import { Image, StyleSheet, Text, View, StatusBar, BackHandler } from 'react-native';
import {AndroidBackHandler} from 'react-navigation-backhandler';
import Consts from '../Consts';
import Controller from '../Controller';
import Realm from '../db/realm';
import splash from '../assets/images/splash.png'

export default class Loading extends Component {

    async componentDidMount(){

        Realm.realmInit(()=>{

            Controller.controller = this.controller;

            setTimeout(()=>{
                
                this.goTo();

            }, 1000)
            
        });
    }

    goTo = ()=>{

        let realm = Realm.getRealm();
        let user = realm.objects("User")[0];

        /*
        realm.write(()=>{
            realm.delete(user);
        })
        */

        if(user){

            if(user.verified){

                this.props.navigation.navigate("TopUsers");

            }else{

                this.props.navigation.navigate("Verification");
            }

        }else{

            this.props.navigation.navigate("Register");
        }
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

                <Image style={s.img1} source={splash} resizeMode="contain"/>
                <Text style={s.text1}>{"پیاده سوار"}</Text>
               
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
        
        height:"45%",
        tintColor:Consts.colors.c3
    },

    text1:{
        fontSize:30,
        marginTop:height*0.06,
        fontFamily:'shabnam_bold',
        color:Consts.colors.c3,
    }
})
