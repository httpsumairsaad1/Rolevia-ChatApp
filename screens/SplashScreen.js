import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Ensure you have react-native-linear-gradient installed

const SplashScreen = () => {

const navigation = useNavigation()
  useEffect(() => {
      setTimeout(() => {
          navigation.navigate('Slider')
      }, 2500);
  }, [])
  

  return (
    <LinearGradient 
      colors={['#3C4D57', '#82A7BD']} 
      style={styles.container}
    >
      <Image 
        source={require('../assets/logo-rolevia.png')} // Replace with your logo path
        style={styles.logo}
        resizeMode="contain"
      /> 
      <Text style={styles.bottomText}>Rolevia</Text>
      <Text style={styles.versionText}>Version 1.0</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    width: 230, // Adjust based on your design
    height: 230,
  },
  bottomText: {
    position: 'absolute',
    bottom: 50,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  versionText: {
    position: 'absolute',
    bottom: 35,
    color: '#FFFFFF',
    fontSize: 12
  },
});

export default SplashScreen;
