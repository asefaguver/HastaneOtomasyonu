import * as React from 'react';
import { Text, View,TouchableOpacity,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Picker} from '@react-native-picker/picker';



function HomeScreen() {
  const [selectedLanguage, setSelectedLanguage] = React.useState('manisa');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f09',flexDirection: "column" }}>
      <Text style={{flex: 0.5, fontWeight: 'bold',  fontSize: 30 }}>Hastane kayıt randevu sistemine hoş geldiniz!</Text>
      
      <Picker
        style={{ backgroundColor: "yellow", flex: 0.1 }}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Manisa Devlet Hastanesi" value="manisa" />
        <Picker.Item label="Sakarya özel x Hastanesi" value="sakarya" />
      </Picker>
      
      
      <Button         
        title="Randevu Oluştur"
        onPress={() => alert('Randevunuz oluşturuldu !')}
      />
    </View>
  );
}

function SettingsScreen() {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f90' }}>
      <Text>Randevularım !</Text>
      
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
