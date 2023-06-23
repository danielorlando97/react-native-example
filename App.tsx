import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button  } from 'react-native';
import React, {useState} from "react"
import { users } from './src/db'

export default function App() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const handleClick = () => {
    const user = users.find(u => u.username === username && u.password === password)
    if (user) {
     alert('Login successful')
    } else {
     alert('Login failed')
    }
   }

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <Image source={require('./assets/images.png')} style={styles.image}/>
      <TextInput
        placeholder='Username'
        onChangeText={text => setUsername(text)}
        value={username}
        style={styles.input}
      />
      <TextInput
        placeholder='Password'
        onChangeText={text => setPassword(text)}
        value={password}
        style={styles.input}
        secureTextEntry={true}
      />

      <Button
          title="Login"
          onPress={handleClick}
       />
       
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:50
  },
  image:{
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 50
   },
   input:{
    width: 300,
    margin: 12,
    paddingBottom:3, 
    borderBottomWidth: 1,
   }
});
