import React, { Component } from 'react'
import { Text, StyleSheet, View, BackHandler, TouchableOpacity } from 'react-native'
import Consts from '../Consts';
import RegisterInput from '../components/RegisterInput';
import Header from '../components/Header';
import RegisterButton from '../components/RegisterButton';
import Realm from '../db/realm';

export default class Verification extends Component {

    continue = ()=>{

        let realm = Realm.getRealm();
        realm.write(()=>{

            let user = realm.objects("User")[0];

            user.verified = true;

            this.props.navigation.navigate("Home");
        })
    }

    onBack = ()=>{

        this.props.navigation.navigate("Register");
        return true;
    }

    render() {
        return (
            <View style={s.con}>
                <Header onBack={this.onBack}/>
                <Text style={s.text1}>{"کد تایید"}</Text>
                <RegisterInput placeholder="کد تایید شماره همراه" onChangeText={this.onFull_name}/>
                
                <TouchableOpacity style={s.sec1} onPress={this.onForgot}>
                    <Text style={s.text2}>{"ارسال مجدد"}</Text>
                </TouchableOpacity>
                
                <View style={s.space}/>
                <RegisterButton title={"تکمیل ثبت نام"} onPress={this.continue}/>
            </View>
        )
    }
}

let {height, width} = Consts;
const s = StyleSheet.create({

    con:{
        height,
        width,
    },

    sec1:{
        height:height*0.06,
        width,
        justifyContent:'center',
        alignItems:'flex-end',
        paddingHorizontal:width*0.1,
        //backgroundColor:'red',
    },

    space:{

        height:height*0.46
    },

    text1:{
        fontFamily:'shabnam_bold',
        fontSize:25,
        marginRight:width*0.08,
        marginBottom:20,
    },

    text2:{
        fontSize:15,
        fontFamily:'shabnam',
        color:Consts.colors.c3,
    }
});