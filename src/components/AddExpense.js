import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';
import * as Yup from 'yup';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


import CustomInput from './form-fields/CustomInput';

const schema = Yup.object().shape({
  email: Yup.string()
    .required('Title is required'),
  amount: Yup.string('Enter a valid amount')
    .required('Amount is required')

});

const AddExpense = () => {

  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      amount: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("title:", data)
  }

  return (
    <View style={styles.centeredView}>
      <Text>Expense</Text>
      {/* <ScrollView>
        <Text>this is expense component</Text>
        <Button
          buttonStyle={{ backgroundColor: '#d9534f', width: 130 }}
          onPress={() => navigation.navigate('AddExpense')}
          title="Add Expense"
        />
      </ScrollView> */}
      <FormProvider {...methods}>
        <View style={styles.formContainer}>
          <CustomInput name="email" type="email" placeholder="Title" />
          <CustomInput name="amount" type="number" placeholder="Amount" keyboardType="numeric" />
          <Button title='Submit' onPress={methods.handleSubmit(onSubmit)} />
        </View>
      </FormProvider>
    </View>
  )
}

export default AddExpense;

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