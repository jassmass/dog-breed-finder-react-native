import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Card from './Card'

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.finderHero}>
        <Text style={styles.finderHeroTitle}>
          Dog Breed Finder
        </Text>
        <Image
          style={styles.heroImage}
          source={require('../assets/images/home-image.png')}
          resizeMode="contain"
        />

        <Text style={styles.heroDescription}>
          Identify a dog's breed, learn about its temperament, find similar dogs, and more.
        </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.heroButton}
          onPress={() => navigation.navigate('Finder')}
        >
          <Text style={styles.heroButtonText}>
            Find the Breed
          </Text>
        </TouchableOpacity>
      </View>
      <Card
        title="Beagle"
        image={require('../assets/images/Beagle-Dog-Transparent.png')}
        navigation={navigation}
        dogInfo={{
          name: "Beagle",
          hypoallergenic: "No",
          lifeExpectancy: "12-15 years",
          colors: "Lemon & White, Tri-color, Chocolate",
          origin: "England, United Kingdom",
          height: "36–41 cm",
          temperament: "Amiable, Intelligent, Gentel",
          image: require('../assets/images/Beagle-Dog-Transparent.png')
        }}
      />
      <Card
        title="Boston Terrier"
        image={require('../assets/images/pngwing.com.png')}
        navigation={navigation}
        dogInfo={{
          name: "Boston Terrier",
          hypoallergenic: "No",
          lifeExpectancy: "13 – 15 years",
          colors: "Brindle & White, Seal & White, Black & White",
          origin: "United States",
          height: "38 – 43 cm",
          temperament: "Friendly, Intelligent, Lively",
          image: require('../assets/images/pngwing.com.png')
        }}
      />
      <Card
        title="Cairn Terrier"
        image={require('../assets/images/cairn-terrier.jpeg')}
        navigation={navigation}
        dogInfo={{
          name: "Cairn Terrier",
          hypoallergenic: "Yes",
          lifeExpectancy: "12 – 15 years",
          colors: "Abundant shaggy outer coat, soft downy undercoat",
          origin: "Scotland",
          height: "23 – 33 cm",
          temperament: "Gay, Hardy, Assertive, Intelligentl",
          image: require('../assets/images/cairn-terrier.jpeg')
        }}
      />
      <Card
        title="Chihuahua"
        image={require('../assets/images/chihuahua.jpeg')}
        navigation={navigation}
        dogInfo={{
          name: "Chihuahua",
          hypoallergenic: "No",
          lifeExpectancy: "12 – 20 years",
          colors: "Black, White, Fawn, Chocolate, Cream",
          origin: "Mexico",
          height: "15 – 25 cm",
          temperament: "Aggressive, Devoted, Lively, Alert",
          image: require('../assets/images/chihuahua.jpeg')
        }}
      />
      <Card
        title="Cocker Spaniel"
        image={require('../assets/images/cocker-spaniel.jpeg')}
        navigation={navigation}
        dogInfo={{
          name: "Cocker Spaniel",
          hypoallergenic: "No",
          lifeExpectancy: "12 – 15 years",
          colors: "Black, Blue Roan, Orange Roa",
          origin: "United Kingdom",
          height: "38 – 43 cm",
          temperament: "Playful, Affectionate, Friendly, Faithful",
          image: require('../assets/images/cocker-spaniel.jpeg')
        }}
      />
      <Card
        title="Dauchshund"
        image={require('../assets/images/dachshund_dog.png')}
        navigation={navigation}
        dogInfo={{
          name: "Dauchshund",
          hypoallergenic: "No",
          lifeExpectancy: "12 – 16 years",
          colors: "Black, Black & Tan, Chocolate & Tan",
          origin: "Germany",
          height: "28 – 36 cm",
          temperament: "Clever, Playful, Stubborn, Devoted",
          image: require('../assets/images/dachshund_dog.png')
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    paddingLeft: 24,
    paddingRight: 24,
  },
  finderHero: {
    width: '100%',
    paddingBottom: 24,
  },
  finderHeroTitle: {
    fontSize: 28,
    marginTop: 24,
    fontWeight: 'bold',
    color: '#003c34',
    fontFamily: 'Roboto',
  },
  heroDescription: {
    marginTop: 24,
    fontSize: 18,
    fontFamily: 'Roboto',
    color: '#003c34',
    lineHeight: 24,
    fontWeight: '400',
  },
  heroImage: {
    marginTop: 12,
    width: '100%',
    height: 330,
    borderRadius: 18,
  },
  heroButton: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 16,
    paddingBottom: 16,
    width: '40%',
    backgroundColor: '#003c34',
    marginTop: 24,
    borderRadius: 18,
  },
  heroButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  finderHeroDivider: {
    borderBottomColor: '#003c34',
    borderBottomWidth: 1,
  }
});


export default HomeScreen;