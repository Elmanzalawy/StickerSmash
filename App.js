import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';

import ImageViewer from './components/ImageViewer';

// const placeholderImage = 
const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={{ color: '#fff' }}>Open up App.js to start working on your app!</Text> */}
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
