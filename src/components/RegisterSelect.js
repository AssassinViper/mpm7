import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions,Image, Platform, TouchableOpacity } from 'react-native'
import Consts from '../Consts';
import popup from '../assets/icons/popup.png';
import Dialog from 'react-native-popup-dialog';
import RadioButton from './RadioButton';

let {height, width} = Dimensions.get("window");

if(Platform.OS === 'android'){
    height -=24;
}

export default class RegisterSelect extends Component {

    state = {dialog:false, select:{}, list:[]}

    componentWillMount(){
        this.state.select = {value:this.props.title, key:"1"};
    }

    componentWillUpdate(){

        if(this.props.value){

            this.props.list.forEach(element => {
                
                if(element.key == this.props.value){
                    this.state.select = element
                }
            });
        }
    }

    onPress = ()=>{

        this.show();
    }

    show = ()=>{

        this.state.dialog = true;
        this.setState(this.state);
    }

    dismiss = ()=>{

        this.state.dialog = false;
        this.setState(this.state);
    }

    onSelect=(key, value)=>{

        this.state.select = {key, value};
        this.props.onChange(value);
        this.setState(this.state,this.dismiss);
    }


    render() {
        return (
            <View style={s.con}>

                <Dialog visible={this.state.dialog} onTouchOutside={this.dismiss} onDismiss={this.props.onDismiss}>
                    <View style={[s.dialog_con]}>
                        <Text style={s.text2}>{this.props.title}</Text>

                        {this.props.list.map((value,index)=>(

                            <RadioButton selected={this.state.select} onSelect={this.onSelect} itemKey={value.key} title={value.value}/>
                        ))}

                    </View>
                </Dialog>

                <TouchableOpacity style={s.btn1} onPress={this.onPress}>

                    <Image style={s.img1} source={popup} resizeMode='contain'/>

                    <Text style={s.text1}>{this.state.select.value || this.props.title}</Text>

                </TouchableOpacity>
                
            </View>
        )
    }
}

const s = StyleSheet.create({

    con:{

        height:height*0.1,
        width,
        marginVertical:5,
        justifyContent:'center',
        alignItems:'center',
    },

    btn1:{
        height:'86%',
        width:'86%',
        textAlign:'right',
        borderRadius:16,
        fontFamily:'shabnam',
        paddingHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:Consts.colors.a2
    },

    dialog_con:{

        //flex:1,
        //height:'auto',
        overflow:'scroll',
        maxHeight:height*0.9,
        width: width*0.8,
        alignSelf:'center',
        paddingBottom:40,
    },

    sec1:{

        height:height*0.07,
        width:'90%',
        alignSelf:'center',
        marginBottom:10,
        backgroundColor:'red'
    },

    img1:{
        height:'100%',
        width:'8%',
        tintColor:Consts.colors.c3,
    },

    text1:{
        fontFamily:'shabnam',
        fontSize:16,
        textAlign:'right'
    },

    text2:{
        marginVertical:20,
        marginRight:20,
        fontSize:18,
        fontFamily:'shabnam'
    }
})
