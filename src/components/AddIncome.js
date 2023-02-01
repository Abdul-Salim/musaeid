import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-elements';
import * as Yup from 'yup';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

import CustomInput from './form-fields/CustomInput';
import CustomDateTimePicker from './form-fields/CustomDateTimePicker';

const schema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required'),
  amount: Yup.string('Enter a valid amount')
    .required('Amount is required'),
  date: Yup.string()
  .required('Date is required')
});


const AddIncome = () => {

  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: {
      title: '',
      amount: '',
      date: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("title:", data);
    const payload = {
      ...data,
    };
    console.log("dtata", payload)
    // firestore().collection('income').add(payload).then((doc) => {
    //   firestore().collection('income').get().then((res) => {
    //     let total = 0;
    //     res.forEach((item) => {
    //       console.log('res', item?.data());
    //       total = total + Number(item?.data().amount)
    //     })
    //     console.log("HIIII", total)
    //     firestore().collection('summary').doc('totalIncome').set({ totalIncome: total })
    //   }).catch((err) => {
    //     console.log('err', err);
    //   })
    // }).catch((err => {
    //   console.log('err', err);
    // }));
  };

  return (
    <View style={styles.centeredView}>
      <Text>Income</Text>
      <FormProvider {...methods}>
        <View style={styles.formContainer}>
          <CustomInput name="title" type="text" placeholder="Title" />
          <CustomInput name="amount" type="number" placeholder="Amount" keyboardType="numeric" />
          {/* <CustomDateTimePicker name="date" mode="date" /> */}
          <Button title='Submit' onPress={methods.handleSubmit(onSubmit)} />
        </View>
      </FormProvider>
    </View>
  )
}

export default AddIncome;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
  },
  formContainer: {
    width: '90%',
    padding: 20,
    height: 'auto'
  }
})