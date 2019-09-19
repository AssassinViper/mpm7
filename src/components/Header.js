import React, { Component } from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import left from '../assets/icons/left-arrow.png';
import Consts from '../Consts';

export default class Header extends Component{

    render(){

        return(
            <View style={s.con}>
                <View style={s.sec1}>
                    <TouchableOpacity onPress={this.props.onBack}>
                        <Image source={left} style={s.icon1} resizeMode="contain"/>
                    </TouchableOpacity>
                </View>
        
                <View style={s.sec3}>

                    {/*<Image source={this.props.icon} style={s.icon2} resizeMode="contain"/>*/}
                    <Text style={s.text1}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}

const s = StyleSheet.create({

    con:{

        elevation:5,
        flexDirection:'row',
        height:'10%',
        width:'100%',
        justifyContent:'space-between',
        //backgroundColor:'#3dbeff'
    },

    sec1:{
        flexDirection:'row',
        alignItems:'center',
        width:'20%',
        height:'100%',
    },

    sec2:{

        justifyContent:'center',
        alignItems:'center',
        width:"60%",
        height:"100%"
    },

    sec3:{

        flexDirection:"row-reverse",
        alignItems:'center',
        width:'70%',
        height:'100%',
    },

    text1:{
        fontFamily:'shabnam_bold',
        textAlign:'center',
        color:Consts.colors.b2,
        marginRight:10,
        fontSize:20
    },

    icon1:{
        
        height:'40%',
        tintColor:Consts.colors.c3,
    },

    icon2:{
        marginRight:20,
        height:'60%',
        width:'15%',
        top:2,
        tintColor:Consts.colors.c3,
    }
});