import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Result = ({ dogBreed, probability, isLast }) => {
  return (
    <View style={isLast ? styles.lastResult : styles.result}>
      <Text style={styles.dogBreed}>{dogBreed}</Text>
      <Text style={styles.probability}>{probability}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  result: {
    color: '#003c34',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: "#78999480",
    borderBottomWidth: 1,
    paddingBottom: 12,
    paddingTop: 12,
  },
  dogBreed: {
    fontSize: 16,
    color: '#003c34',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  lastResult: {
    color: '#003c34',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    textTransform: 'capitalize',
  },
  probability: {
    fontSize: 16,
    color: '#003c34',
    fontWeight: 'bold',
    alignItems: 'center',
  },
});

export default Result;