import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { speak, isSpeaking } from '../components/speech';
// import Tts from 'react-native-tts';

import { selectValue } from '../redux/slices/counterSlice';
import Categories from '../components/Categories';
import Tts from 'react-native-tts';
import useSpeech from '../hooks/useSpeechListener';

const Home = ({navigation}) => {
    const speaking = isSpeaking();
    const {startListening, input} = useSpeech();
    // const listAll = async () => {
    //     const voices = await Speech.getAvailableVoicesAsync();
    //     console.log(voices);
    // }
    // useEffect(() => {
    //     startListening()
    // }, []);

    const x = () => {
        console.log(speaking)
        if (!speaking) {
            Tts.speak('Hello, world!', {
                androidParams: {
                    KEY_PARAM_PAN: -1,
                    KEY_PARAM_VOLUME: 0.5,
                    KEY_PARAM_STREAM: 'STREAM_MUSIC',
                },
            });
        } else {
            console.log("success")
        }
    };
    const value = useSelector(selectValue);
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Categories iconName='mic' type="ionicons" onPress={() => navigation.navigate('Voice')} />
                <Categories iconName='home' onPress={() => speak('Hi all')} />
                <Categories iconName='calendar' onPress={() => navigation.navigate('Shcedule')} />
                <Categories iconName='search' type="ionicons" onPress={() => navigation.navigate('Search')} />
                <Categories iconName='finance' type='material-community' onPress={() => navigation.navigate('Finance')} />
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    inner: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    container: {
        flex: 1,
        backgroundColor: '#005f73',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2%',
    },
});
