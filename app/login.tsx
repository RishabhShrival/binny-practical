
import { useRouter } from 'expo-router';
import { getAnalytics } from 'firebase/analytics';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { app } from '../firebaseconfig';


export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useRouter();

  const handleLogin = async () => {
    if (username === '' || password === '') {
      Alert.alert('Please enter both username and password');
      return;
    }
    try{
        //login using firebase auth here
        const analytics = getAnalytics(app);
        const auth = getAuth(app);
        const userCredential = await signInWithEmailAndPassword(auth, username, password);
        const user = userCredential.user;
        console.log('User logged in:', user);
    }catch(error){
        Alert.alert('Error', 'Failed to initialize analytics');
        return;
    }
    // On success:
    navigation.push('./display');
  };

  const handleSignup = async () => {
    try{
        //signup using firebase auth here
        const auth = getAuth(app);
        const userCredential = await createUserWithEmailAndPassword(auth, username, password);
        const user = userCredential.user;
        console.log('User signed up:', user);
    }
    catch(error){
        Alert.alert('Error', 'Failed to sign up');
        return;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});