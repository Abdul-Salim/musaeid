import Tts from 'react-native-tts';
import { useState, useEffect } from 'react';

// const speechOptions = {
//     voice: "en-in-x-ene-network",
// }

Tts.setDefaultLanguage('en-IN');
// Tts.addEventListener('tts-progress', (event) => console.log("progress", event));
// Tts.addEventListener('tts-start', event => console.log('start', event));
// Tts.addEventListener('tts-finish', event => console.log('finish', event));
// Tts.addEventListener('tts-cancel', event => console.log('cancel', event));

const useSpeechGenerator = () => {
    const [isSpeaking, setspeaking] = useState(false);

    useEffect(() => {
        Tts.addEventListener('tts-progress', (event) => setspeaking(true));
        Tts.addEventListener('tts-progress', (event) => setspeaking(true));
        Tts.addEventListener('tts-finish', event => setspeaking(false));
    }, [])

    const speak = (text) => {
        Tts.speak(text);
    }
    // const getCurrentStatus = () => {


        // const status = await Speech.isSpeakingAsync();
        // console.log(status)

        // return status
    // }
    // useEffect(async() => {
    //     Tts.addEventListener('tts-progress', (event) => setspeaking(true));
 
    //     const status = await Speech.isSpeakingAsync();
    //     setspeaking(status);
    // }, [Speech])

    return {isSpeaking, speak};
}

export default useSpeechGenerator;
