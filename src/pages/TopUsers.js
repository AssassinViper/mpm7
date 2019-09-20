import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image } from 'react-native'
import Consts from '../Consts'
import Header from '../components/Header';
import mark from '../assets/icons/mark.png';
import ProfileCard from '../components/ProfileCard';
import { AndroidBackHandler } from 'react-navigation-backhandler';
import Dialog, {SlideAnimation} from 'react-native-popup-dialog';
import ViewProfile from '../pages/ViewProfile';
import c1 from '../assets/images/c1.png';
import c2 from '../assets/images/c2.png';
import c3 from '../assets/images/c3.png';
import c4 from '../assets/images/c4.png';
import c5 from '../assets/images/c5.png';
import c6 from '../assets/images/c6.png';
import c7 from '../assets/images/c7.png';
import c8 from '../assets/images/c8.png';

const Cars = {c1,c2,c3,c4,c5,c6,c7,c8};

export default class TopUsers extends Component {

    state = {name:"", score:"" , car:"c3", dialog:false}

    showProfile = (name, score, car)=>{

        this.state.name = name;
        this.state.score = score;
        this.state.car = car;
        this.state.dialog = true;

        this.setState(this.state);
    }

    dismiss = ()=>{

        this.state.dialog = false;
        this.setState(this.state);
    }

    onBack=()=>{
        
        if(this.state.dialog){
            this.dismiss()
        }else{
            this.props.navigation.navigate("Home");
            return true;
        }
    }

    render() {
        return (
            <View style={s.con}>
                <AndroidBackHandler onBackPress={this.onBack}/>
                <Header title="برترین های هفته قبل" onBack={this.onBack}/>

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
                    renderItem={({item, index})=>(<ProfileCard showProfile={this.showProfile} onPress={this.showProfile} car={item.car} name={item.name} score={item.score} key={`uc${index}`} index={index}/>)}
                />

                <Dialog visible={this.state.dialog} animationDuration={600} dialogAnimation={new SlideAnimation()}>
                    <ViewProfile dismiss={this.dismiss} name={this.state.name} score={this.state.score} car={this.state.car}/>
                </Dialog>

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
        tintColor:Consts.colors.c3
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
        fontSize:18,
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
    {name:"حسن شوماخر", score:"6780", car:"c7"},
    {name:"علی رضا ملکی", score:"6040", car:"c8"},
    {name:"نیکو رزبرگ", score:"5610", car:"c6"},
    {name:"اکبر مشتی", score:"5500", car:"c7"},
    {name:"امروز بامبی", score:"5435", car:"c5"},
    {name:"چی بگم آخه؟", score:"5105", car:"c4"},
    {name:"مریم اصغری", score:"5020", car:"c3"},
    {name:"پور قاسم", score:"4720", car:"c5"},
    {name:"امین بی حیایی", score:"4530", car:"c6"},
    {name:"فرشاد مرادونا", score:"4225", car:"c6"},
    {name:"لیور از پول", score:"4160", car:"c7"},
    {name:"عادل فردوس پوست", score:"4100", car:"c6"},
    {name:"مهدی شریفی", score:"3600", car:"c2"},
    {name:"اصغر فریادی", score:"3425", car:"c4"},
    {name:"علی علی نژاد", score:"3330", car:"c5"},
    {name:"مستر نو بادی", score:"3230", car:"c5"},
    {name:"رابرت 98", score:"3105", car:"c3"},
    {name:"فاطمه توقی", score:"3005", car:"c2"},
    {name:"امیررضا قربانی", score:"2055", car:"c3"},
    {name:"پری شب", score:"2030", car:"c2"},
]