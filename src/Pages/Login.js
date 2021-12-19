import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';

export default function Login({navigation}) {
    const [text, onChangeText] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);

    return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="username"/>
        <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
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
        onPress={() => alert('Hoş geldiniz !')}
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