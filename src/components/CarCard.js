import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Consts from '../Consts';
import Realm from '../db/realm';

export default class ProfileCard extends Component {

    select = ()=>{
        
        let realm = Realm.getRealm();
        let user = realm.objects("User")[0];
        realm.write(()=>{
            user.car = this.props.name;
            this.props.onSelect();
        })
    }

    render() {

        let style = {backgroundColor:Consts.colors.a1};
        if(this.props.index % 2){
            style = {backgroundColor:Consts.colors.a2};
        }

        return (
            <View style={[s.con, style]}>

                <Image style={s.img1} source={this.props.car} resizeMode="contain"/>

                <TouchableOpacity style={s.btn1} onPress={this.select}>

                    {this.props.price?(<Text style={s.text2}>{this.props.price}</Text>):
                    (<Text style={s.text2}>{"انتخاب"}</Text>)}

                </TouchableOpacity>
                
            </View>
        )
    }
}

let {height, width} = Consts;

const s = StyleSheet.create({

    con:{

        height:height*0.144,
        width,
        flexDirection:'row-reverse',
        alignItems:'center',
        justifyContent:'space-around'
    },

    img1:{
        height:'90%',
        width:"20%",
    },

    btn1:{

        height:'60%',
        width:'30%',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Consts.colors.c3
    },

    text1:{
        width:'56%',
        fontFamily:'shabnam',
        fontSize:16,
        color:Consts.colors.b2
    },

    text2:{

        fontFamily:'shabnam',
        color:Consts.colors.a1
    },

    text3:{
        fontFamily:'shabnam',
        color:Consts.colors.c3
    },

    text4:{
        height:'80%',
        width:"16%",
        textAlign:'center',
        textAlignVertical:'center',
        fontFamily:'shabnam',
        fontSize:40,
        color:Consts.colors.c3,
        bottom:10
    }
})