import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { app } from '../../Firebase';
 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export default function Signin({navigation}) {
    const [text, onChangeText] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);    
    const [btn, btnState] = React.useState(false);
    useEffect(()=>{
      createUserWithEmailAndPassword(auth, text, password)
      .then((userCredential) => {
        navigation.navigate('Home');
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    },[btn]);
  
    return (
    <View style={styles.container}>
      <Text>Signin</Text>
      

      <TextInput style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="mail"/>

        <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="password"
        autoCorrect={false}
        secureTextEntry={true}
        />
        <Button style={styles.buton}         
        title="Giriş Yap"
        color="#841584"
        onPress={() => btnState(!btn)}
      />
      <TouchableOpacity
                onPress={() => navigation.navigate('WelcomePage')}
                style={{ backgroundColor: 'green', margin:12 }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Go to Welcome Page</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('LoginPage')}
                style={{ backgroundColor: 'blue', margin:12 }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Go to Login Page</Text>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});