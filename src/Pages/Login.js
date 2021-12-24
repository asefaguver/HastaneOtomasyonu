import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { app } from '../../Firebase';
 
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

const auth = getAuth(app);



export default function Login({navigation}) {
    const [text, onChangeText] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [btn, btnState] = React.useState(false);
    useEffect(()=>{
      signInWithEmailAndPassword(auth, text, password)
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
      <Text>Login</Text>
      <TextInput style={styles.input}
        onChangeText={(input) => onChangeText(input)}
        value={text}
        placeholder="username"/>
        <TextInput
        style={styles.input}
        onChangeText={(input) => onChangePassword(input)}
        value={password}
        placeholder="password"
        secureTextEntry="true"
        autoCorrect={false}
        secureTextEntry={true}
        //keyboardType="numeric"
      />

      <Button style={styles.buton}         
        title="Giriş Yap"
        color="#841584"
        onPress={() => btnState(!btn)}
      />

      <TouchableOpacity
                onPress={() => navigation.navigate('WelcomePage')}
                style={{ backgroundColor: 'green', marginTop:92 }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Go to Welcome Page</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('SigninPage')}
                style={{ backgroundColor: 'red', margin:12, }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Go to Signin Page</Text>
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
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
  
});