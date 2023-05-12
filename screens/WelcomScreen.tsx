import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../components/Button';
import { RootSiblingParent } from 'react-native-root-siblings';
import Toast from 'react-native-root-toast';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/types';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

type Props = {
    navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen: React.FC<Props> = ({navigation}) => {

    const [name, setName] = useState('');


      
    const handleButtonPress = () => {
        if (name.length === 0) {
            Toast.show('Please Enter your Name!', {
                duration: Toast.durations.LONG,
            });
        } else {
            navigation.navigate('Home', { value: name});
        }
    }

    function getText(name: string): void {
        setName(name);
    }


    return (
        <RootSiblingParent>
            <SafeAreaView style={styles.container}>
                
                <View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'center', }}>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Welcome to TalkGPT, Let's us know you!</Text>
                    </View>
                    <TextInput onChangeText={getText} style={styles.input} placeholder='What is your Name?' />
                    <Button title="Submit" onPress={handleButtonPress} />
                </View>
            </SafeAreaView>
        </RootSiblingParent>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#fff'
    },
    textView: {
        marginBottom: 35,
    },
    text: {
        fontWeight: '900',
        fontSize: 38,
        textAlign: 'center'
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        minWidth: '100%',
        marginBottom: 16,
    },
});


export default WelcomeScreen;