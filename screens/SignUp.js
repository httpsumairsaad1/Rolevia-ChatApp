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
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleInputChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // Signup Handler
  const handleSignup = async () => {
    const { name, email, password } = formData;

    // Validate inputs
    if (!name || !email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'All fields are required.',
      });
      return;
    }

    if (password.length < 6) {
      Toast.show({
        type: 'error',
        text1: 'Weak Password',
        text2: 'Password must be at least 6 characters.',
      });
      return;
    }

    setLoading(true);

    try {
      // Create user with Firebase
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;

      // Save user to Firestore
      await firestore().collection('Users').doc(userId).set({
        name: name,
        email: email,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      // Send Email Verification
      await auth().currentUser.sendEmailVerification();

      // Show success message
      Toast.show({
        type: 'success',
        text1: 'Account Created',
        text2: 'A verification email has been sent.',
      });
      setFormData({ name: '', email: '', password: '' })

      // Redirect to Login
      navigation.navigate('Login');
    } catch (error) {
      // Handle Firebase errors
      console.log("error",error)
      let errorMessage = 'Something went wrong. Please try again.';
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'This email is already in use.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email format.';
      }
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient colors={['#151515', '#17435D']} style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/logo-rolevia.png')} style={styles.logo} />

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#999"
          style={styles.input}
          value={formData.name}
          onChangeText={(text) => handleInputChange('name', text)}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          style={styles.input}
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
          value={formData.password}
          onChangeText={(text) => handleInputChange('password', text)}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#82A7BD' }]}
          onPress={handleSignup}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Sign Up</Text>
          )}
        </TouchableOpacity>
      </View>

      {/* Connect With Google and Facebook */}
      <Text style={styles.connectText}>Or connect with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#D44638' }]}>
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

export default SignUpScreen;
