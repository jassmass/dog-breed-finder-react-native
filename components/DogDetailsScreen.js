import React from 'react';
import { Image, ScrollView, Text, StyleSheet } from 'react-native';

const DogDetailsScreen = ({ route }) => {
  const {
    image,
    colors,
    height,
    hypoallergenic,
    lifeExpectancy,
    name,
    origin,
    temperament
  } = route.params.dogInfo;
  console.log('dogInfo', colors);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.dogDetailsTitle}>
        {name}
      </Text>
      <Image style={styles.dogImage} source={image} />
      <Text style={styles.dogCharacteristic}>
        {`Hypoallergenic: ${hypoallergenic}`}
      </Text>
      <Text style={styles.dogCharacteristic}>
        {`Life Expectancy: ${lifeExpectancy}`}
      </Text >
      <Text style={styles.dogCharacteristic}>
        {`Origin: ${origin}`}
      </Text>
      <Text style={styles.dogCharacteristic}>
        {`Temperament: ${temperament}`}
      </Text>
      <Text style={styles.dogCharacteristic}>
        {`Colors: ${colors}`}
      </Text>
      <Text style={styles.dogCharacteristic}>
        {`Height: ${height}`}
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  dogDetailsTitle: {
    fontSize: 28,
    marginTop: 24,
    fontWeight: 'bold',
    color: '#003c34',
    fontFamily: 'Roboto',
    marginLeft: 15,
  },
  dogImage: {
    width: undefined,
    height: undefined,
    aspectRatio: 1,
    flex: 1,
    marginBottom: 24,
  },
  dogCharacteristic: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 15,
  }
});

export default DogDetailsScreen;