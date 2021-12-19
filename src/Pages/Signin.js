import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function Signin({navigation}) {
    const [text, onChangeText] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [name, onChangeName] = React.useState(null);
  
    return (
    <View style={styles.container}>
      <Text>Signin</Text>
      <TextInput style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="name surname"/>

      <TextInput style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="username"/>

        <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="password"
        autoCorrect={false}
        secureTextEntry={true}
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