import React, { Component } from 'react'
import { Text, StyleSheet, View, BackHandler } from 'react-native'
import Consts from '../Consts';
import RegisterInput from '../components/RegisterInput';
import Header from '../components/Header';
import RegisterButton from '../components/RegisterButton';
import Realm from '../db/realm';
import RegisterSelect from '../components/RegisterSelect';

export default class Register extends Component {

    state = {full_name:"", phone_number:"", city:"تهران", name_wrong:false, phone_wrong:false};

    componentDidMount(){
        
    }

    onFull_name = (t)=>{
        this.state.full_name = t;
    }

    onPhoneNumber = (t)=>{
        this.state.phone_number = t;
    }

    onCity = (value)=>{

        this.state.city = value;
    }

    check_input = (cb)=>{

        if(this.state.full_name.length < 7){

            this.state.name_wrong = true;
        }else{
            this.state.name_wrong = false;
        }

        if(this.state.phone_number.length != 11){

            this.state.phone_wrong = true;
        }else{
            this.state.phone_wrong = false;
        }

        this.setState(this.state, cb);
    }

    continue = ()=>{

        this.check_input(()=>{

            if(!this.state.name_wrong && !this.state.phone_wrong){

                let realm = Realm.getRealm();
                let newUser = {};
                
                newUser.full_name = this.state.full_name;
                newUser.city = this.state.city;
                newUser.phone_number = this.state.phone_number;
                newUser.verified = false;

                realm.write(()=>{
                    let user = realm.objects("User");
                    if(user){
                        realm.delete(user);
                    }
                    
                    realm.create("User", newUser);
                    this.props.navigation.navigate("Verification");
                });
            }
        });
    }

    onBack = ()=>{

        BackHandler.exitApp();
        return true;
    }

    render() {
        return (
            <View style={s.con}>
                <Header onBack={this.onBack}/>
                <Text style={s.text1}>{"ثبت نام"}</Text>
                <RegisterInput wrong={this.state.name_wrong} placeholder="نام کاربری" onChangeText={this.onFull_name}/>
                <RegisterInput wrong={this.state.phone_wrong} placeholder="شماره همراه" onChangeText={this.onPhoneNumber}/>
                <RegisterSelect title={"تهران"} list={cityList} onChange={this.onCity}/>
                <View style={s.space}/>
                <RegisterButton title={"تایید"} onPress={this.continue}/>
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

    space:{

        height:height*0.3
    },

    text1:{
        fontFamily:'shabnam_bold',
        fontSize:25,
        marginRight:width*0.08,
        marginBottom:20,
    }
});

cityList = [
    {key:"1", value:"تهران"},
    {key:"2", value:"اصفهان"},
    {key:"3", value:"مشهد"},
]
