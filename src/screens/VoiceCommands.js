import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Icon } from 'react-native-elements';
import useSpeech from '../hooks/useSpeechListener';
import useInputParser from '../hooks/useInputParser';

const VoiceCommands = () => {
  const {startListening, input, setInput} = useSpeech();
  const {inputIdentifier} = useInputParser()

  useEffect(() => {
      setInput('')
      console.log('console. 1', input);
      if(input && input.length > 0) {
          console.log("condole.2")
          inputIdentifier(input);
      }
  }, [input]);

  return (
    <View>
      <Text><Icon onPress={() =>startListening()} type='ionicons' name='mic' size={26} /></Text>
    </View>
  )
}

export default VoiceCommands

const styles = StyleSheet.create({})