import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '983516591273-fgom6uvkkk8urjoeafrp6et120buophh.apps.googleusercontent.com',
});

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please fill in all fields.',
      });
      return;
    }

    setLoading(true);
    try {
      // Sign in with Firebase
      await auth().signInWithEmailAndPassword(email, password);

      // Check if the email is verified
      if (auth().currentUser && !auth().currentUser.emailVerified) {
        Toast.show({
          type: 'error',
          text1: 'Verify Email',
          text2: 'Please verify your email before logging in.',
        });
        setLoading(false);
        return;
      }

      // Navigate to the Home screen
      Toast.show({
        type: 'success',
        text1: 'Login Successful!',
        text2: 'Welcome back!',
      });
      
      navigation.navigate('Home');
    } catch (error) {
      // Handle errors
      if (error.code === 'auth/user-not-found') {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'No user found with this email.',
        });
      } else if (error.code === 'auth/wrong-password') {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Incorrect password. Please try again.',
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: error.message,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      // Ensure Google Play services are available
      await GoogleSignin.hasPlayServices();
      
      // Sign in with Google
      const { idToken } = await GoogleSignin.signIn();
      
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
      // Sign in with Firebase using the Google credential
      await auth().signInWithCredential(googleCredential);
  
      // On success, navigate and show a success message
      Toast.show({
        type: 'success',
        text1: 'Google Sign-In Successful!',
        text2: 'Welcome!',
      });
      navigation.navigate('Home');
    } catch (error) {
      console.log(error)
      Toast.show({
        type: 'error',
        text1: 'Google Sign-In Failed',
        text2: error.message || 'An error occurred. Please try again.',
      });
    }
  };

  return (
    <LinearGradient colors={['#151515', '#17435D']} style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/logo-rolevia.png')} style={styles.logo} />

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#82A7BD' }]}
          onPress={handleLogin}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>

      {/* Connect With Google and Facebook */}
      <Text style={styles.connectText}>Or connect with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#D44638' }]} onPress={handleGoogleSignIn}>
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#4267B2' }]}>
          <Text style={styles.socialText}>Facebook</Text>
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
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#17435D',
    borderRadius: 8,
    paddingHorizontal: 15,
    color: '#FFF',
    marginBottom: 15,
    fontSize: 16,
  },
  connectText: {
    color: '#FFF',
    fontSize: 16,
    marginVertical: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  socialButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
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

export default LoginScreen;
