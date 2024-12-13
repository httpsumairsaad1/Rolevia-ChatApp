import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SliderScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation= useNavigation()

  const images = [
    { 
      src: require('../assets/img1.png'), 
      title: 'Unlock the Power\nOf Future AI' 
    },
    { 
      src: require('../assets/img2.png'), 
      title: 'Chat With Your\nFavourite AI' 
    },
    { 
      src: require('../assets/img3.png'), 
      title: 'Boost Your Mind\nPower with AI' 
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Auto-swipe every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <LinearGradient 
      colors={['#3C4D57', '#82A7BD']} 
      style={styles.container}
    >
      {/* Skip Button */}
      <TouchableOpacity style={styles.skipButton} onPress={()=>{navigation.navigate('ChooseLogin')}}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.slider}>
        <Image 
          source={images[currentIndex].src} 
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>{images[currentIndex].title}</Text>
      </View>
      
      {/* Dots Indicator */}
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View 
            key={index} 
            style={[
              styles.dot, 
              currentIndex === index && styles.activeDot
            ]}
          />
        ))}
      </View>

      {/* Navigator Section */}
      <View style={styles.navigator}>
        {/* Previous Button */}
        <TouchableOpacity onPress={handlePrev} style={styles.navButton}>
          <Text style={styles.navText}>{"←"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>{"|"}</Text>
        </TouchableOpacity>
        {/* Next Button */}
        <TouchableOpacity onPress={handleNext} style={styles.navButton}>
          <Text style={styles.navText}>{"→"}</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButton: { position: 'absolute', top: 20, right: 20 },
  skipText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  slider: {
    width: 336,
    height: 438,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: 280,
    height: 438,
    borderRadius: 20,
  },
  title: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3C4D57',
    marginHorizontal: 5,
    opacity: 0.5,
  },
  activeDot: {
    width: 12,
    height: 12,
    backgroundColor: '#FFF', // Highlight color for active dot
    opacity: 1,
  },
  navigator: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '40%',
    backgroundColor: '#3C4D57', 
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  navButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  navText: {
    color: '#FFFFFF', // Button text color
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SliderScreen;
