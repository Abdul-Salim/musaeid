import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { Button } from 'react-native-elements';
import axios from 'axios';
import { Icon } from 'react-native-elements';

import useSpeech from '../hooks/useSpeechListener';
import useSpeechGenerator from '../hooks/useSpeechGenerator';

import API_KEY from '../../keys';

const Search = () => {
    const [data, setData] = useState(null);
    const [term, setTerm] = useState(null);
    // const { width } = useWindowDimensions();
    const newWidth = 300;

    const {startListening, input} = useSpeech();
    const {isSpeaking, speak} = useSpeechGenerator()
    const SEARCH_ENGINE_ID = "bb0a10caaec3def65";

    useEffect(() => {
        // console.log(input)
        if(input?.length > 0) {
            fetchData(input)
        }
    }, [input])

    const fetchData = (term) => {
        if (term !== null && term.length > 0) {
            axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${term}`)
                .then((res) => {
                    console.log(res?.data?.items[0]?.htmlSnippet)
                    setData(res?.data?.items);
                    speak(res?.data?.items[0]?.snippet)
                })
                .catch((err) => {
                    console.log('eerrr', err);
                })
        }
    }

    return (
        <View style={styles.search}>
            <View style={styles.resultsContainer}>
                {data?.length > 0 && 
                    data?.map((item) => (
                        <Text key={item.cacheId}>
                            <RenderHtml source={{html: item.htmlTitle}} contentWidth={newWidth} />
                            {"\n"}
                            <RenderHtml source={{html: item.htmlSnippet}} contentWidth={newWidth} />
                        </Text>
                    ))
                }
            </View>
            <View style={styles.inputContainer}>
                <Icon name='search' />
                <TextInput style={styles.input} placeholder='Search' value={term} onChangeText={(text) => setTerm(text)} />
                <TouchableOpacity>
                    <Icon name='mic' onPress={()=> startListening()} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    search: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    inputContainer: {
        flexDirection: 'row',
        width: '90%',
        height: 40,
        borderColor: '#111',
        borderWidth: 1,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10
    },
    input: {
        width: '80%',
        fontSize: 14
    },
    resultsContainer: {
        height: '80%',
        // width: '80%'
    }
});
