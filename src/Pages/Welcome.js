import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Logo from '../components/Logo';


export default function Welcome({ navigation }) {
    return (
        <View style={styles.container}>
            <Logo/>
            <Text>Welcome</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('LoginPage')}
                style={{ backgroundColor: 'blue' }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Go to Login Page</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('SigninPage')}
                style={{ backgroundColor: 'red' }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Go to Signin Page</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={{ backgroundColor: 'red' }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Go to Home Page</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});