
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { app } from '../firebaseconfig';
import { useColorScheme } from '../hooks/useColorScheme.web';


export default function Index() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    if (username === '' || password === '') {
      Alert.alert('Please enter both username and password');
      setLoading(false);
      return;
    }
    try{
        //login using firebase auth here
        const auth = getAuth(app);
        const userCredential = await signInWithEmailAndPassword(auth, username, password);
        const user = userCredential.user;
        // Show alert with entered values after login
        Alert.alert('Login Successful', `email: ${username}`,[
          {
            text:'Cancel',
            onPress: ()=> console.log('Cancel Pressed'),
            style:'cancel'
          },
          {
            text:'Ok',
            onPress: ()=>navigation.push('./display'),
            style:'default'
          }
        ]);
        // console.log('User logged in:', user);
    }catch(error){
        Alert.alert('Error', 'Failed to initialize analytics');
        setLoading(false);
        return;
    }
    // On success:
    setLoading(false);
    navigation.push('./display');
  };

  const handleSignup = async () => {
    setLoading(true);
    if (username === '' || password === '') {
      Alert.alert('Please enter both username and password');
      setLoading(false);
      return;
    }
    try{
        //signup using firebase auth here
        const auth = getAuth(app);
        const userCredential = await createUserWithEmailAndPassword(auth, username, password);
        const user = userCredential.user;
        // console.log('User signed up:', user);
    }
    catch(error){
        Alert.alert('Error', 'Failed to sign up');
        setLoading(false);
        return;
    }
    Alert.alert('Account created successfully','You can now log in with your email and password.');
    setLoading(false);
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Login</ThemedText>
      <ThemedView style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1, marginBottom: 0,color: useColorScheme() === 'dark' ? 'white' : 'black' }]}
          placeholder="email"
          value={username}
          onChangeText={setUsername}
        />
      </ThemedView>
      <ThemedView style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1, marginBottom: 0,color: useColorScheme() === 'dark' ? 'white' : 'black' }]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} size={24} color="#888" />
        </TouchableOpacity>
      </ThemedView>
      <ThemedView style={styles.loginButton}>
        <Button title="Login" onPress={handleLogin} color={loading ? 'grey' : 'blue'} />
      </ThemedView>
      <ThemedView style={styles.loginButton}>
        <Button title="Sign Up" onPress={handleSignup} color={loading?'grey':'green'} />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    marginVertical: 8,
    width: '100%',
    maxWidth: 350,
    alignSelf: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    width: '100%',
    maxWidth: 350,
    marginBottom: 12,
  },
  eyeIcon: {
    padding: 8,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});