import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Icon } from 'react-native-elements'
import useSpeech from '../hooks/useSpeechListener'
import parseInput from '../hooks/useInputParser'

const Schedule = () => {
    const {startListening, input} = useSpeech();

    useEffect(() => {
        console.log(input);
        if(input && input.length > 0) {
            parseInput(input);
        }
    }, [input]);

  return (
    <View>
      <Text>Schedule</Text>
      <Pressable onPress={startListening}>
        <Icon name='mic' type='ionicons' size={36} />
      </Pressable>
    </View>
  )
}

export default Schedule

const styles = StyleSheet.create({})