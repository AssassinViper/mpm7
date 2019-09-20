import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import img from '../assets/images/mellat-park.jpg';
import Consts from '../Consts';
const {width} = Consts;
const IMAGE_SIZE = width * 0.4;

const PlaceDescription = () => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image} resizeMode={'cover'} />
      <View style={{}}>
        <Text style={styles.heading}>گیلان</Text>
        <Text style={styles.place}>پارک ملت رشت</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    flexGrow: 1,
    borderRadius: 40,
    backgroundColor: '#172121',
    overflow: 'visible',
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderColor: '#172121',
    borderWidth: 8,
    borderRadius: IMAGE_SIZE / 2,
    overflow: 'hidden',
    position: 'absolute',
    bottom: '12%',
    padding: 8,
    right: -IMAGE_SIZE / 2.5,
  },
  heading: {
    fontFamily: 'shabnam',
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
    marginRight: IMAGE_SIZE / 5,
  },
  place: {
    fontFamily: 'shabnam',
    color: '#eee',
    fontSize: 20,
    marginRight: IMAGE_SIZE / 5,
  },
});

export default PlaceDescription;
