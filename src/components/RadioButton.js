import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions,Image, Platform, TouchableOpacity } from 'react-native'
import checked from '../assets/icons/checked.png';
import notchecked from '../assets/icons/not_checked.png';
import Consts from '../Consts';

let {height, width} = Dimensions.get("window");

if(Platform.OS === 'android'){
    height -=24;
}

export default class RadioButton extends Component {

    state={selected:false, style:{opacity:1}}

    componentWillMount(){

        if(this.props.selected.key === this.props.itemKey){
            this.state.selected = true;
        }
    }

    onSelect = ()=>{

        this.state.selected = true;
        this.setState(this.state);
        this.props.onSelect(this.props.itemKey, this.props.title);
    }

    render() {

        let img = this.state.selected?checked:notchecked;

        return (
            <TouchableOpacity style={s.con} onPress={this.onSelect}>

                <Image style={s.img1} source={img} resizeMode='contain'/>
                
                <Text style={s.text1}>{this.props.title}</Text>

            </TouchableOpacity>
        )
    }
}

const s = StyleSheet.create({

    con:{
        height:height*0.07,
        width:'80%',
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center',
        marginVertical:5,
        justifyContent:'space-between',
        paddingHorizontal:20,
        backgroundColor:Consts.colors.a2,
        borderRadius:10,
    },

    img1:{
        width:'10%',
        tintColor:Consts.colors.c3
    },

    text1:{
        fontFamily:'shabnam',
        fontSize:15,
        textAlign:'right',
        color:Consts.colors.c4,
    }
})
