import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function SettingsScreen({navigation}) {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f90' }}>
      <Text>Randevularım !</Text>
      <TouchableOpacity
                onPress={() => navigation.navigate('LoginPage')}
                style={{ backgroundColor: 'green', margin:12 }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Go to Login Page</Text>
            </TouchableOpacity>
    </View>
  );
}
