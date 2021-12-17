import React, { useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as tf from "@tensorflow/tfjs";
import { fetch as tfjsFetch, decodeJpeg } from "@tensorflow/tfjs-react-native";
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as FileSystem from "expo-file-system";
import Result from './Result';

function FinderScreen() {
  const [image, setImage] = React.useState(null);
  const [isLoadingResults, setIsLoadingResults] = React.useState(false);
  const [isTfReady, setIsTfReady] = React.useState(false);
  const [results, setResults] = React.useState(null);

  useEffect(() => {
    (async () => {
      await tf.ready();
      setIsTfReady(true);
    })();
  }, []);

  const uploadPhoto = async () => {
    setResults(null);
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setIsLoadingResults(true);
        setImage(result.uri);
        classifyImage(result.uri);
      }
    }
  }

  const classifyImage = async (imgUri) => {
    try {
      const fileUri = imgUri;
      const imgB64 = await FileSystem.readAsStringAsync(fileUri,
        { encoding: FileSystem.EncodingType.Base64 }
      );
      const imgBuffer = tf.util.encodeString(imgB64, 'base64').buffer;
      const newData = new Uint8Array(imgBuffer);
      const imageTensor = decodeJpeg(newData);
      if (isTfReady) {
        const model = await mobilenet.load();
        const predictions = await model.classify(imageTensor);
        setResults(predictions);
        setIsLoadingResults(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  let index = 0;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>
          What breed is that dog?
        </Text>
        <Text style={styles.heroText}>
          Identify a dog's breed in just a few second. Upload a photo to try it.
        </Text>
      </View>
      <View style={styles.classifier}>
        <Image
          source={image ? { uri: image } : require('../assets/images/placeholder-dog.png')}
          style={styles.heroImage}
        />
        <View style={styles.uploadButton}>
          <TouchableOpacity
            onPress={() => uploadPhoto()}
          >
            <Text style={styles.uploadButtonLabel}>
              Upload image
            </Text>
          </TouchableOpacity>
          <Text
            style={image ? styles.clearButton : styles.noImageUploaded}
            onPress={() => {
              setImage(null)
              setResults(null)
            }}
          >
            {image ? "Clear" : 'No image selected'}
          </Text>
        </View>
      </View>
      {(results || isLoadingResults) &&
        <View style={styles.results}>
          {isLoadingResults ?
            <ActivityIndicator size="large" /> :
            results.map((result, resultIdx) => {
              index++;
              return <Result
                key={resultIdx}
                dogBreed={result.className}
                probability={Math.round(result.probability * 100) + '%'}
                isLast={index === 3 ? true : false}
              />
            })}
        </View>
      }
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  hero: {
    backgroundColor: '#003c34',
    height: 200,
    padding: 24,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Roboto',
  },
  heroText: {
    marginTop: 48,
    color: '#fff',
    fontSize: 18,
    lineHeight: 24,
  },
  classifier: {
    padding: 24,
  },
  heroImage: {
    width: undefined,
    height: undefined,
    flex: 1,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#78999480',
    borderRadius: 18,
  },
  uploadButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  uploadButtonLabel: {
    width: 150,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 18,
    display: 'flex',
    textAlign: 'center',
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  noImageUploaded: {
    marginRight: 24,
    fontSize: 16,
  },
  clearButton: {
    marginRight: 24,
    fontSize: 16, 
    textDecorationLine: 'underline',
  },
  results: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#78999480',
    borderRadius: 18,
    padding: 24,
    backgroundColor: '#fff',
    marginLeft: 24,
    marginRight: 24,
    marginTop: 24,
    marginBottom: 24,
  },
})

export default FinderScreen;
