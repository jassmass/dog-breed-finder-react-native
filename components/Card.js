import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Card = ({ navigation, title, image, dogInfo }) => {
  return (
    <TouchableOpacity
      style={styles.dogCard}
      onPress={() => navigation.navigate('DogDetails', { dogInfo })}
    >
      <Text style={styles.dogCardTitle}>
        {title}
      </Text>
      <Image
        source={image}
        style={styles.dogCardImage}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  dogCard: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#78999480',
    borderRadius: 16,
    padding: 16,
  },
  dogCardTitle: {
    fontWeight: 'bold',
    color: '#003c34',
    fontFamily: 'Roboto',
    fontSize: 20,
  },
  dogCardImage: {
    width: undefined,
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  }
})

export default Card;