import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

const VoiceScreen = () => {
  const animationRef = useRef(null);

  const handleVoiceClick = () => {
    // Start Lottie animation on button click
    animationRef.current?.play();
  };

  console.log(require('./assets/bgPictureVoiceScreen.png'))
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
        
        <View style={styles.animationCircle}>
          <LottieView
              ref={animationRef}
              source={require('./assets/Animation.json')} 
              style={styles.lottieAnimation}
              autoPlay={false}
              loop={false}
            />
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonsContainer}>
          {/* Translate Button */}
          <TouchableOpacity style={[styles.button, styles.smallButton]}>
            <Image source={require('./assets/icons/subtitles.png')} style={styles.smallIcon} />
          </TouchableOpacity>

          {/* Voice Button with Animation */}
          <TouchableOpacity style={styles.voiceButton} onPress={handleVoiceClick}>
            <LottieView
              ref={animationRef}
              source={require('./assets/voice-animation.json')} 
              style={styles.lottieAnimation}
              autoPlay={false}
              loop={false}
            />
          </TouchableOpacity>

          {/* Close Button */}
          <TouchableOpacity style={[styles.button, styles.smallButton]}>
            <Image source={require('./assets/icons/cross.png')} style={styles.smallIcon} />
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
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginVertical: 20,
  },
  smallButton: {
    width: 40,
    height: 40,
    paddingHorizontal: 50,
    backgroundColor: 'rgba(130, 167, 189, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  smallIcon: {
    width: 40,
    height: 40,
  },
  voiceButton: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationCircle: {
    width: 80,
    height: 80,
    marginLeft: 140,
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieAnimation: {
    width: 350, // Adjust size based on your animation file
    height: 350,
  },
});

export default VoiceScreen;
