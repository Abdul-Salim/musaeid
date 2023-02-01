import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import {get} from 'lodash';

const CustomInput = ({placeholder,keyboardType, type, value, name, ...props}) => {
    const propsName = name

    const {
        control, 
        formState: {errors, isValid}
      } = useFormContext();

      const { message: errorMessage = false } = get(errors, propsName, {});

  return (
    <KeyboardAvoidingView style={{marginBottom: 20}}>
        <View style={[styles.inputContainer, errorMessage && styles.redBorder]}>
            <Controller 
                control={control}
                name={name}
                render={({field: {onChange, value, onBlur}}) => (            
                    <TextInput
                        style={styles.input}
                        value={value}
                        type={type}
                        onBlur={onBlur}
                        onChangeText={(text) => onChange(text)}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                    />
                )}
            />
        </View>
        {errorMessage && <View style={styles.error}>
                <Text style={styles.message}>{errorMessage}</Text>
            </View>}

    </KeyboardAvoidingView>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        borderColor: '#eaeaea',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 1,
        // paddingVertical: 10
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 0,
        margin: 0,
        fontSize: 16,
        height: 40,
    },
    error: {
        marginLeft: 10,
        marginTop: 2
    },
    message: {
        color: 'red',
    },
    redBorder: {
        borderColor: 'red'
    }
})