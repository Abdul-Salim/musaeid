import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import { Icon } from 'react-native-elements'

import ListingComponent from './ListingComponent'
import EditingComponent from './EditingComponent'
import useGetFinanceData from '../hooks/useGetFinanceData';


const Expense = ({navigation}) => {
    
const [edit, setEdit] = useState(false);

const headings = [
    { text: 'Date' },
    { text: 'Title' },
    { text: 'Amount' },
];

const {data, total} = useGetFinanceData('expense');


    return (
        <View style={styles.tableContainer}>
            {
                !edit ?
                    <ListingComponent headings={headings} rows={data} navigation={navigation} type="expense" />
                    :
                    <EditingComponent headings={headings} rows={data} navigation={navigation} type="expense" />
            }
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', width: '40%', justifyContent: 'space-evenly', marginTop: 20 }}>
                <Pressable style={styles.addButton} onPress={() => navigation.navigate('AddExpense')}>
                    <Icon
                        name='add'
                        color='#111'
                        size={36}
                    />
                </Pressable>
                <Pressable style={styles.addButton} onPress={() => setEdit(true)}>
                    <Icon
                        name='edit'
                        color='#111'
                        size={24}
                    />
                </Pressable>
            </View>
        </View>
    )
}

export default Expense

const styles = StyleSheet.create({
    tableContainer: {
        height: '75%',
        marginTop: 15
    },
    addButton: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        borderRadius: 50,
        backgroundColor: '#fff'
    },
})