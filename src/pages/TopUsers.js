import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image } from 'react-native'
import Consts from '../Consts'
import Header from '../components/Header';
import mark from '../assets/icons/mark.png';
import ProfileCard from '../components/ProfileCard';

export default class TopUsers extends Component {

    onBack=()=>{
        
        this.props.navigation.navigate("Home");
        return true;
    }

    render() {
        return (
            <View style={s.con}>
                
                <Header title="برترین های هفته گذشته" onBack={this.onBack}/>

                <View style={s.sec1}>
                    <Text style={s.text1}>{"مقصد های هفته گذشته"}</Text>

                    <View style={s.sec2}>
                        <Image style={s.img1} source={mark} resizeMode="contain"/>
                        
                        <View style={s.sec3}>

                            <Text style={s.text2}>{"تهران - پل طبیعت"}</Text>
                            <Text style={s.text2}>{"مشهد - کوهسنگی"}</Text>
                            <Text style={s.text2}>{"اصفهان - پل خواجو"}</Text>

                        </View>
                    </View>

                </View>

                <FlatList
                    style={s.list1}
                    data={list}
                    renderItem={({item, index})=>(<ProfileCard name={item.name} score={item.score} key={`uc${index}`} index={index}/>)}
                />

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

    img1:{

        height:'80%',
        width:'20%',
    },

    sec1:{
        height:"22%",
        width:"100%",
        justifyContent:'space-evenly',
        backgroundColor:Consts.colors.a2
    },

    sec2:{
        height:'60%',
        width:'100%',
        flexDirection:'row-reverse',
        alignItems:'center',
    },

    list1:{
        height:"68%",
        width:'100%',
    },

    text1:{
        width:'100%',
        textAlign:'right',
        direction:'rtl',
        fontFamily:'shabnam',
        fontSize:20,
        paddingRight:20,
        color:Consts.colors.b2,
    },

    text2:{
        width:'100%',
        textAlign:'right',
        direction:'rtl',
        fontFamily:'shabnam',
        fontSize:14,
        color:Consts.colors.b2,
    }
})

const list = [
    {name:"حسن شوماخر", score:"6780"},
    {name:"علی رضا ملکی", score:"6040"},
    {name:"نیکو رزبرگ", score:"5610"},
    {name:"اکبر مشتی", score:"5500"},
    {name:"امروز بامبی", score:"5435"},
    {name:"چی بگم آخه؟", score:"5105"},
    {name:"مریم اصغری", score:"5020"},
    {name:"پور قاسم", score:"4720"},
    {name:"امین بی حیایی", score:"4530"},
    {name:"فرشاد مرادونا", score:"4225"},
    {name:"لیور از پول", score:"4160"},
    {name:"عادل فردوس پوست", score:"4100"},
    {name:"مهدی شریفی", score:"3600"},
    {name:"اصغر فریادی", score:"3425"},
    {name:"علی علی نژاد", score:"3330"},
    {name:"مستر نو بادی", score:"3230"},
    {name:"رابرت 98", score:"3105"},
    {name:"فاطمه توقی", score:"3005"},
    {name:"امیررضا قربانی", score:"2055"},
    {name:"پری شب", score:"2030"},
]