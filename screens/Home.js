import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, StatusBar, Modal, ScrollView} from 'react-native';

const data = [
  'Argentina',
  'Brasil',
  'Chile',
  'China',
  'Corea del Sur',
  'Corea del Norte',
  'España',
  'Estados Unidos',
  'Francia',
  'Inglaterra',
  'Japon',
  'Mexico',
  'Uruguay',
]

function HomeScreen({navigation}) {
  const [edad, setEdad] = useState('')
  const [modalVisible, setModalVisible] = useState('false')

  const [selectedItem, setSelectedItem] = useState('Select a country')
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  
  return (
    <View style={styles.container}>

{/* //Modal */}  

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <ScrollView style={styles.modalView}>
            <View style={styles.selectItemView}>
            {data.map((item, index) => (
              <TouchableOpacity key={index} style={styles.listButton} onPress={() => {handleItemClick(item), setModalVisible(!modalVisible)}}>
                <Text style={styles.listText}>{item}</Text>
              </TouchableOpacity>
            ))}
            </View>
          </ScrollView>
        </View>
      </Modal>

{/* //Home */}

      <Text style={styles.title}>I am {"\n"} of Age?</Text>
      <View style={styles.containerApp}>
        <TextInput style={styles.boxInput} keyboardType='numeric' placeholder='Enter your age' placeholderTextColor={'white'} onChangeText={(val) => setEdad(val)} selectionColor={'white'}></TextInput>
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          {selectedItem === null ? (
            <Text style={styles.buttonText}>Select a country</Text>
            ) : (
              <Text style={styles.buttonText}>{selectedItem}</Text>
            )
          } 
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBuscar} 
          onPress={() => {
            if (selectedItem == 'Argentina' || 
            selectedItem == 'Brasil' ||
            selectedItem == 'Chile' ||
            selectedItem == 'China' ||
            selectedItem == 'España' ||
            selectedItem == 'Estados Unidos' ||
            selectedItem == 'Francia' ||
            selectedItem == 'Inglaterra' ||
            selectedItem == 'Mexico' ||
            selectedItem == 'Uruguay' )
            {
              if (edad < 18 && edad >= 1) {
                navigation.navigate('soyMenor', {selectedItem}) 
              }else if (edad <= 100 && edad >= 18) {
                navigation.navigate('soyMayor', {selectedItem}) 
              }else {
                Alert.alert("Please, enter your age")
              }
            }else if (selectedItem == 'Corea del Sur') {
              if (edad < 19 && edad >= 1) {
                navigation.navigate('soyMenor', {selectedItem}) 
              }else if (edad <= 100 && edad >= 19) {
                navigation.navigate('soyMayor', {selectedItem}) 
              }else {
                Alert.alert("Please, enter your age")
              }
            }else if (selectedItem == 'Corea del Norte') {
              if (edad < 17 && edad >= 1) {
                navigation.navigate('soyMenor', {selectedItem}) 
              }else if (edad <= 100 && edad >= 17) {
                navigation.navigate('soyMayor', {selectedItem}) 
              }else {
                Alert.alert("Please, enter your age")
              }
            }else if (selectedItem == 'Japon') {
              if (edad < 20 && edad >= 1) {
                navigation.navigate('soyMenor', {selectedItem}) 
              }else if (edad <= 100 && edad >= 20) {
                navigation.navigate('soyMayor', {selectedItem}) 
              }else {
                Alert.alert("Please, enter your age")
              }
            }else if (edad == '' || edad == 0){
              Alert.alert("Please, enter your age")
            }else {
              Alert.alert("Please, select a country")
            }
          }}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(41,41,41,255)',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  containerApp: {
    width: '50%',
    marginTop: 50,
  },
  title: {
    marginTop: 100,
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'justify',
    letterSpacing: -7,
    color: 'white',
  },
  boxInput: {
    padding: 10,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: 'white',
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: 'white',
  },
  buttonText: {
    margin: 15,
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  buttonBuscar: {
    marginTop: 20,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: 'white',
    backgroundColor: 'darkcyan',
  },
  //Modal
  modalView: {
    margin: 30,
    backgroundColor: 'rgba(21,21,21,255)',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 7,
  },
  selectItemView: {
    marginBottom: '20%',
  },
  buttonClose: {
    backgroundColor: 'darkcyan',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'white',
  },
  listButton: {
    borderColor: 'white',
    borderTopWidth: 1,
    marginBottom: 15,
    width: '90%',
    marginLeft: '5%'
  },
  listText: {
    fontSize: 22,
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
  },
});

export {HomeScreen}