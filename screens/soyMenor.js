import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, ScrollView, SafeAreaView, StatusBar, Image} from 'react-native';
import { useRoute } from '@react-navigation/native';
import image from '../assets/warning.gif';

function MenorScreen({navigation}){
    const route = useRoute();
    const { selectedItem } = route.params || {};
    return (
        <View style={styles.container}>
            <Text style={styles.title}> You are underage </Text>
            <Text style={styles.text}> Being underage, you are spared from severe penalties. However, in <Text style={{fontWeight: 'bold'}}>{selectedItem}</Text>, you could face imprisonment or correctional measures (depending on the offense) so be cautious.</Text>
            <Image source={image} style={styles.gif} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(21,21,21,255)',
        textAlign: 'center',
        alignItems: 'center',
        height: '100%',
    },
    title: {
        marginTop: 150,
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
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
        width: '80%',
    },
});

export { MenorScreen }