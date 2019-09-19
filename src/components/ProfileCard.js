import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Consts from '../Consts';
import n1 from '../assets/images/n1.png';
import n2 from '../assets/images/n2.png';
import n3 from '../assets/images/n3.png';

export default class ProfileCard extends Component {
    render() {

        let style = {backgroundColor:Consts.colors.a1};
        if(this.props.index % 2){
            style = {backgroundColor:Consts.colors.a2};
        }

        let pic = <Image style={s.img1} source={n1} resizeMode="contain"/>

        if(this.props.index == 1){
            pic = <Image style={s.img1} source={n2} resizeMode="contain"/>
        }

        if(this.props.index == 2){
            pic = <Image style={s.img1} source={n3} resizeMode="contain"/>
        }

        if(this.props.index > 2){
            pic = <Text style={s.text4}>{this.props.index+1}</Text>
        }

        return (
            <TouchableOpacity style={[s.con, style]} onPress={this.props.onPress}>

                {pic}

                <Text style={s.text1}>{this.props.name}</Text>

                <Text style={s.text2}>{this.props.score+" "}<Text style={s.text3}>{"امتیاز"}</Text></Text>
                
            </TouchableOpacity>
        )
    }
}

let {height, width} = Consts;

const s = StyleSheet.create({

    con:{

        height:height*0.1,
        width,
        flexDirection:'row-reverse',
        alignItems:'center',
    },

    img1:{
        height:'80%',
        width:"16%",
    },

    text1:{
        width:'56%',
        fontFamily:'shabnam',
        fontSize:16,
        color:Consts.colors.b2
    },

    text2:{
        width:"28%",
        paddingLeft:30,
        textAlign:'left',
        fontFamily:'shabnam',
        color:Consts.colors.b2
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
