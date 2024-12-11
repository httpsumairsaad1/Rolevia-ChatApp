import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Animated, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const VoiceScreen = () => {
  const [animation, setAnimation] = useState(new Animated.Value(1));

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1.5,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const handleVoiceClick = () => {
    startAnimation();
  };

  return (
    <ImageBackground
      source={require('./assets/bgPictureVoiceScreen.png')} // Your background image
      style={styles.container}
      resizeMode="cover"
    >
    <LinearGradient colors={['#3C4D57', '#82A7BD']} style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <View style={styles.profileWrapper}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }} // Replace with actual user profile image
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        {/* Translate Button */}
        <TouchableOpacity style={[styles.button, styles.smallButton]}>
          <Image source={require('./assets/translate.png')} style={styles.smallIcon} />
        </TouchableOpacity>

        {/* Voice Button with Animation */}
        <TouchableOpacity style={styles.voiceButton} onPress={handleVoiceClick}>
          <Animated.View
            style={[
              styles.ringEffect,
              {
                transform: [{ scale: animation }],
              },
            ]}
          />
          <Image source={require('./assets/voice.png')} style={styles.voiceIcon} />
        </TouchableOpacity>

        {/* Close Button */}
        <TouchableOpacity style={[styles.button, styles.smallButton]}>
          <Image source={require('./assets/close.png')} style={styles.smallIcon} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 18,
  },
  profileWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 50,
    padding: 2,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: '90%',
  },
  button: {
    backgroundColor: '#3C4D57',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginVertical: 20,
  },
  smallButton: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  smallIcon: {
    width: 52,
    height: 52,
  },
  voiceButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#82A7BD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  voiceIcon: {
    width: 50,
    height: 50,
  },
  ringEffect: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(25, 200, 255, 0.1)',
    borderWidth: 3,
    borderColor: 'rgba(88, 180, 225, 0.4)',
  },
});

export default VoiceScreen;
