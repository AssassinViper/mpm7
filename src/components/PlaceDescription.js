import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import img from '../assets/images/n3.png';
const IMAGE_SIZE = 140;

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
    borderWidth: 10,
    borderRadius: IMAGE_SIZE / 2,
    overflow: 'hidden',
    position: 'absolute',
    top: '12%',
    right: -IMAGE_SIZE / 2,
    
  },
  heading: {
    fontFamily: 'shabnam',
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    margin: 10,
    marginRight: IMAGE_SIZE / 3,
  },
  place: {
    fontFamily: 'shabnam',
    color: '#eee',
    fontSize: 20,
    marginRight: IMAGE_SIZE / 2,
  },
});

export default PlaceDescription;
