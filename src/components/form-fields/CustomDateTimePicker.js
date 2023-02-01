import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import {get} from 'lodash';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const CustomDateTimePicker = ({placeholder,keyboardType, type, value, name, mode, ...props}) => {
    const today = Date.now().toLocaleString();
    const [defaultDate, setDefaultDate] = useState(new Date())
    const [show, setShow] = useState(false);

    const propsName = name

    // useEffect(() => {
    //     setValue(name ,new Date());
    // }, [])

    // const {
    //     control, 
    //     formState: {errors, isValid}, setValue
    //   } = useFormContext();

    //   const { message: errorMessage = false } = get(errors, propsName, {});
  return (
    <View style={[styles.inputContainer]}>
        {/* <Controller 
            control={control}
            name={name}
            render={({field: {value}}) => (   
                <Pressable style={[styles.input, errorMessage && styles.redBorder]} onPress={() => setShow(!show)}>
                    <Text>{defaultDate.toDateString()}</Text>
                    <Icon name='calendar' type='ant-design' style={styles.icon} />
                    {show === true ? ( <DateTimePicker
                        value={value}
                        mode={mode}
                        display="default"
                        onChange={(event, selected) => {
                            const currentOrSelected = selected || defaultDate;
                            setDefaultDate(currentOrSelected);
                            setValue(name, currentOrSelected)
                        }}
                    />): <></>}
                </Pressable>
            )}
        /> */}
        <Pressable style={[styles.input]} onPress={() => setShow(!show)}>
                    <Text>{defaultDate.toDateString()}</Text>
                    <Icon name='calendar' type='ant-design' style={styles.icon} />
                    {show === true ? ( <DateTimePicker
                        value={defaultDate}
                        mode={mode}
                        display="default"
                        onChange={(event, selected) => {
                            const currentOrSelected = selected || defaultDate;
                            setDefaultDate(currentOrSelected);
                            // setValue(name, currentOrSelected)
                        }}
                    />): <></>}
        </Pressable>
        {/* {errorMessage &&
            <View style={styles.error}>
                <Text style={styles.message}>{errorMessage}</Text>
            </View>
        } */}
    </View>
  )
}

export default CustomDateTimePicker

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: '#eaeaea',
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    icon: {

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