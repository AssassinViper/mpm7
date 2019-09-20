import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { AndroidBackHandler } from 'react-navigation-backhandler';
import Header from '../components/Header';
import Dialog, {SlideAnimation} from 'react-native-popup-dialog';
import Consts from '../Consts';
import StateScoreCard from '../components/StateScoreCard';
import {xp2Level} from '../Utils';
import c1 from '../assets/images/c1.png';
import c2 from '../assets/images/c2.png';
import c3 from '../assets/images/c3.png';
import c4 from '../assets/images/c4.png';
import c5 from '../assets/images/c5.png';
import c6 from '../assets/images/c6.png';
import c7 from '../assets/images/c7.png';
import c8 from '../assets/images/c8.png';
import CarSelect from './CarSelect';
import Realm from '../db/realm';

const Cars = {c1,c2,c3,c4,c5,c6,c7,c8};

export default class Profile extends Component {

    state = {car:c1, dialog:false}

    selectCar = ()=>{

        this.state.dialog = true;
        this.setState(this.state);
    }

    changeCar = (cb)=>{

        let realm = Realm.getRealm();
        let user = realm.objects("User")[0];

        this.state.car = Cars[user.car];

        this.setState(this.state, cb);
    }

    dismiss = ()=>{
        this.state.dialog = false;
        this.setState(this.state);
    }

    onBack = ()=>{

        this.props.navigation.navigate("Home");
        return true;
    }

    render() {

        let level  = Math.floor(xp2Level(2015));
        let fractur = ((xp2Level(2015) - level) * 100).toFixed(2);

        return (
            <View style={s.con}>
                <AndroidBackHandler onBackPress={this.onBack}/>

                <Header onBack={this.onBack} title="صفحه شخصی"/>

                <ScrollView nestedScrollEnabled style={s.sec1}>

                    <View style={s.sec2}>

                        <TouchableOpacity style={s.btn1} onPress={this.selectCar}>
                            <Image style={s.img1} source={this.state.car} resizeMode="contain"/>
                        </TouchableOpacity>
                        
                        <Text style={s.text1}>{"رضا مارمولک"}</Text>
                    </View>

                    <View style={s.sec4}>

                        <View style={s.sec5}>

                            <Text style={s.text2}>{17}</Text>
                            <Text style={s.text3}>{"سطح"}</Text>

                        </View>

                        <Text style={s.text4}>{`امتیاز شما تا این لحظه ${2015}`}</Text>

                        <View style={s.sec6}>

                            <View style={{height:'100%', width:`${fractur}%`, borderRadius:30,
                                backgroundColor:Consts.colors.c2}}/>

                        </View>

                    </View>

                    <FlatList nestedScrollEnabled  style={s.sec3}
                    data={list}
                    renderItem={({item, index})=>(<StateScoreCard key={`ssc${index}`} index={index} name={item.name} score={item.score}/>)}/>
                    
                </ScrollView>
                

                <Dialog visible={this.state.dialog} animationDuration={600} dialogAnimation={new SlideAnimation()}>
                    <CarSelect onClose={this.dismiss} changeCar={this.changeCar}/>
                </Dialog>
            </View>
        )
    }
}

const car2Image = (name)=>{

    let pic;

    switch(name){

        case"c1":
            pic = c1;
            break;

        case"c2":
            pic = c2;
            break;
        
        case"c3":
        pic = c3;
        break;
    }

    alert(pic)
    return pic;
}

let {height, width} = Consts;

const s = StyleSheet.create({

    con:{
        height,
        width,
    },

    btn1:{
        height:'45%',
        width:'40%',
        alignItems:'center',
    },

    img1:{
        height:'100%',
    },

    sec1:{
        height:'90%',
        width:'100%',
    },

    sec2:{
        height:height*0.25,
        width,
        justifyContent:'center',
        alignItems:'center',
    },

    sec3:{
        height:height*0.7,
        width,
    },

    sec4:{
        height:height*0.2,
        width,
        alignItems:'center',
        backgroundColor:Consts.colors.a2
    },

    sec5:{
        width,
        flexDirection:'row',
        alignItems:'flex-end',
        bottom:20,
    },

    sec6:{
        height:"8%",
        width:'80%',
        borderRadius:30,
        overflow:'hidden',
        backgroundColor:Consts.colors.c3,
        flexDirection:'row',
        bottom:20,
    },

    text1:{
        marginTop:10,
        fontFamily:'shabnam',
        fontSize:16,
        color:Consts.colors.b3
    },

    text2:{
        fontFamily:'shabnam',
        fontSize:60,
        width:'56%',
        textAlign:'right',
        color:Consts.colors.c1,
    },

    text3:{
        fontFamily:'shabnam_bold',
        fontSize:20,
        marginBottom:'8%',
        paddingLeft:10,
        width:'44%',
        textAlign:'left',
        color:Consts.colors.c1,
        top:12,
        right:3
    },

    text4:{
        fontFamily:'shabnam',
        fontSize:11,
        color:Consts.colors.c1,
        bottom:25,
    },
})

const list = [
    {name:"یزد", score:1350},
    {name:"تهران", score:760},
    {name:"فارس", score:655},
    {name:"گیلان", score:630},
    {name:"لرستان", score:625},
    {name:"مشهد", score:515},
    {name:"هرمزگان", score:495},
    {name:"آذربایجان شرقی", score:365},
    {name:"کردستان", score:340},
    {name:"قم", score:220},
    {name:"اراک", score:140},

]