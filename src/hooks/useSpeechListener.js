import { useEffect, useState } from 'react';
import Voice from '@react-native-voice/voice';

const useSpeech = () => {
    const [input, setInput] = useState('');

    useEffect(() => {
        Voice.onSpeechStart = onSpeechStartHandler
        Voice.onSpeechEnd = onSpeechEndHandler
        Voice.onSpeechResults = onSpeechResultsHandler

        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        }

    }, []);

    const onSpeechStartHandler = (e) => {

        // console.log('start', e);
    }

    const onSpeechEndHandler = (e) => {
        // console.log('end', e);
    }
    const onSpeechResultsHandler = (e) => {
        console.log('helll', input, e.value)
        setInput(e.value[0])
    }

    const startListening = async () => {
        try {
            await Voice.start('en-IN');
        } catch (err) {
            console.log("errororororororo", err)
        }
    }

    const stopListening = async () => {
        // const x = await Voice.isRecognizing()
        // console.log('z', x)
        Voice.stop();
    }


    return {onSpeechStartHandler, onSpeechEndHandler, input, startListening, stopListening, setInput};

}

export default useSpeech;