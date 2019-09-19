import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, Platform } from 'react-native'
import Consts from '../Consts';

let {height, width} = Dimensions.get("window");

if(Platform.OS === 'android'){
    height -=24;
}

export default class RegisterInput extends Component {

    render() {

        let style = {}
        if(this.props.wrong){

            style = {borderWidth:2}
        }

        return (
            <View style={s.con}>

                <TextInput placeholder={this.props.placeholder} value={this.props.value}
                onChangeText={this.props.onChangeText} style={[s.input, style]}/>
            
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

    input:{
        height:'86%',
        width:'86%',
        textAlign:'right',
        borderRadius:16,
        fontFamily:'shabnam',
        paddingHorizontal:20,
        fontSize:16,
        borderColor:Consts.colors.d1,
        backgroundColor:Consts.colors.a2
    }
})
