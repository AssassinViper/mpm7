import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Consts from '../Consts';
import close from '../assets/icons/close.png'
import { FlatList } from 'react-native-gesture-handler';
import CarCard from '../components/CarCard';
import c1 from '../assets/images/c1.png';
import c2 from '../assets/images/c2.png';
import c3 from '../assets/images/c3.png';
import c4 from '../assets/images/c4.png';
import c5 from '../assets/images/c5.png';
import c6 from '../assets/images/c6.png';
import c7 from '../assets/images/c7.png';
import c8 from '../assets/images/c8.png';
import { AndroidBackHandler } from 'react-navigation-backhandler';

export default class CarSelect extends Component {

    onSelect = ()=>{

        this.props.changeCar(()=>{
            
            this.props.onClose();
        })
    }

    render() {
        return (
            <View style={s.con}>

                <AndroidBackHandler onBackPress={this.props.onClose}/>

                <TouchableOpacity style={s.btn1} onPress={this.props.onClose}>
                        <Image style={s.img1} source={close} resizeMode="contain"/>
                </TouchableOpacity>

                <FlatList style={s.list1}
                data={list}
                renderItem={({item,index})=>(<CarCard onSelect={this.onSelect} name={item.name} key={`cc${index}`} 
                index={index} price={item.price} car={item.car}/>)}/>

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


const list = [
    {price:0, car:c1, name:"c1"},
    {price:0, car:c2, name:"c2"},
    {price:0, car:c3, name:"c3"},
    {price:0, car:c4, name:"c4"},
    {price:"5000 تومن", car:c5, name:"c5"},
    {price:"8000 تومن", car:c6, name:"c6"},
    {price:"15000 تومن", car:c7, name:"c7"},
    {price:"45000 تومن", car:c8, name:"c8"},
]