import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const styles = StyleSheet.create({

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'yellow',
    margin: 10,
  },
});

export default function SettingsScreen({navigation}) {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#f90' }}>
      <Text style={{fontSize:18, fontWeight:'bold'}}>Randevularım !</Text>
      <FlatList
        data={[
          {key: 'Manisa Devlet Hastanesi | Göz Hastalıkları'},
          {key: 'Sakarya Eğitim Araştırma Hastanesi | Cildiye'},
          {key: 'Bakırköy Ruh Ve Sinir Hastalıkları Hastanesi | Psikiyatri'},
          {key: 'Özel Acıbadem Hastanesi | KBB'},
          /*{key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},*/
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      <TouchableOpacity
                onPress={() => navigation.navigate('LoginPage')}
                style={{ backgroundColor: 'green', margin:12, alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Go to Login Page</Text>
            </TouchableOpacity>
    </View>
  );
}
