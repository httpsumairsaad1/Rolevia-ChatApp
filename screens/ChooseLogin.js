import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ChooseLogin = () => {
  const navigation= useNavigation()
  return (
    <LinearGradient colors={['#151515', '#17435D']} style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/logo-rolevia.png')} style={styles.logo} />

      {/* Login and SignUp Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#141718' }]} onPress={()=>{navigation.navigate('Login')}}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#82A7BD' }]} onPress={()=>{navigation.navigate('Signup')}}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChooseLogin;
