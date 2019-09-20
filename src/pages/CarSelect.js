import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Consts from '../Consts';
import close from '../assets/icons/close.png'
import { FlatList } from 'react-native-gesture-handler';

export default class CarSelect extends Component {
    render() {
        return (
            <View style={s.con}>
                <TouchableOpacity style={s.btn1} onPress={this.props.onClose}>
                        <Image style={s.img1} source={close} resizeMode="contain"/>
                </TouchableOpacity>

                <FlatList style={s.list1}
                data={[{},{},{},{},{},{}]}
                renderItem={({item,index})=>(<View/>)}/>
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
    },

    btn1:{
        height:"10%",
        width:"20%",
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-end'
    },

    img1:{
        height:'40%',
        tintColor:Consts.colors.c3
    },

    list1:{
        height:'90%',
        width:'100%'
    }
})
