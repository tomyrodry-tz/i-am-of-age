import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, ScrollView, SafeAreaView, StatusBar, Image} from 'react-native';
import { useRoute } from '@react-navigation/native';
import image from '../assets/death.gif';

function MayorScreen({navigation}){
    const route = useRoute();
    const { selectedItem } = route.params || {};

    let pena = '';
    if (selectedItem == 'China' || selectedItem == 'Corea del Norte' || selectedItem == 'Corea del Sur' || selectedItem == 'Japon') {
        pena = 'death penalty';
    }else if (selectedItem == 'Estados Unidos') {
        pena = 'life imprisonment or death penalty, depending on the state you are in.'
    }else {
        pena = 'life imprisonment';
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}> You are of legal age </Text>
            <Text style={styles.text}> In <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{selectedItem}</Text>, the maximum sentence you can receive for murdering someone is <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{pena}</Text>, so be careful.</Text>
            <Image source={image} style={styles.gif} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(41,41,41,255)',
        textAlign: 'center',
        alignItems: 'center',
        height: '100%',
    },
    title: {
        marginTop: 150,
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 22,
    },  
    text: {
        marginTop: 30,
        color: 'white',
        textAlign: 'center',
        fontSize: 19,
    },
    gif: {
        marginTop: 50,
        height: 300,
    },
});

export { MayorScreen }