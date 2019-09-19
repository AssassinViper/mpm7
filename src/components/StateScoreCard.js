import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Consts from '../Consts';

export default class ProfileCard extends Component {

    showProfile = ()=>{

        this.props.onPress(this.props.index, this.props.name, this.props.score);
    }

    render() {

        let style = {backgroundColor:Consts.colors.a1};
        if(this.props.index % 2){
            style = {backgroundColor:Consts.colors.a2};
        }

        return (
            <View style={[s.con, style]} onPress={this.showProfile}>

                <Text style={s.text4}>{this.props.index+1}</Text>

                <Text style={s.text1}>{this.props.name}</Text>

                <Text style={s.text2}>{this.props.score+" "}<Text style={s.text3}>{"امتیاز"}</Text></Text>
                
            </View>
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
        fontSize:35,
        color:Consts.colors.c3,
        bottom:10
    }
})
