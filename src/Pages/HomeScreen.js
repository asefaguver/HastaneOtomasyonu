import React, {useState} from 'react';
import { Text, View,TouchableOpacity,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { app } from '../../Firebase';
import { getFirestore } from "firebase/firestore"


import { collection, query, where, getDocs, doc } from "firebase/firestore";
const db = getFirestore(app);
const q = collection(db, "hospitals");

(async() => 
{
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    dataSet.add(doc.id);
  })
})();
const dataSet = new Set();


export default function HomeScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState('manisa');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#f09',flexDirection: "column" }}>
      <Text style={{ fontWeight: 'bold',  fontSize: 30 }}>Hastane kayıt randevu sistemine hoş geldiniz!</Text>
      
      <Picker
        style={{ backgroundColor: "yellow", width:300,height:50 }}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
         
        <Picker.Item label="Manisa Devlet Hastanesi" value="manisa" />
        <Picker.Item label="Sakarya Eğitim Araştırma Hastanesi" value="sakarya" />
        <Picker.Item label="Bakırköy Ruh Ve Sinir Hastalıkları Hastanesi" value="bakırköy" />
        <Picker.Item label="Özel Acıbadem Hastanesi" value="istanbul" />
        {dataSet.forEach(id => {<Picker.Item label={id} value="sakarya" />} )}
      </Picker>

      <Picker
        style={{ backgroundColor: "yellow", width:300,height:50 }}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Göz hastalıkları" value="manisa" />
        <Picker.Item label="Cildiye" value="sakarya" />
        <Picker.Item label="Psikiyatri" value="bakırköy" />
        <Picker.Item label="KBB" value="istanbul" />
      </Picker>
      
      <Button onPress={showDatepicker} title="Show date picker!" />
      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={mode}
          is24Hour={true}
          display='default'
          onChange={onChange}
        />
      )}
      
      <Button         
        title="Randevu Oluştur"
        onPress={() => alert('Randevunuz oluşturuldu !')}        
      />
      
    </View>
  );
}