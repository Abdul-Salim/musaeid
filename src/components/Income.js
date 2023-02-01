import { Pressable, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import { Icon } from 'react-native-elements'

import ListingComponent from './ListingComponent'
import EditingComponent from './EditingComponent'
import useGetFinanceData from '../hooks/useGetFinanceData';

const Income = ({navigation}) => {

    const [edit, setEdit] = useState(false);
    // const [data, setData] = useState([]);

    const headings = [
        { text: 'Date' },
        { text: 'Title' },
        { text: 'Amount' },
    ];

    const {data, total, loading} = useGetFinanceData('income');

    useEffect(() => {
        console.log(data)
    }, [data])

    // useEffect(() => {
    //     setData([]);
    //     firestore()
    //         .collection('income')
    //         .orderBy('date', 'desc')
    //         .get()
    //         .then(querySnapshot => {
    //             console.log('Total income: ', querySnapshot);
    //             querySnapshot.forEach(documentSnapshot => {
    //                 //   console.log('Income: ', moment(documentSnapshot.data().date).format('DD MMM YY'));
    //                 setData((prev) =>
    //                     [...prev, {
    //                         date: moment(documentSnapshot.data().date).format('DD MMM YY'),
    //                         title: documentSnapshot?.data().title,
    //                         amount: documentSnapshot?.data().amount,
    //                         id: documentSnapshot?.id
    //                     }]
    //                 )
    //             });
    //         });
    // }, []);

    return (
        <View style={styles.tableContainer}>
            {
                !edit ?
                    <ListingComponent isLoading={loading} total={total} headings={headings} rows={data} navigation={navigation} type="income" />
                    :
                    <EditingComponent headings={headings} rows={data} navigation={navigation} type="income" />
            }
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', width: '40%', justifyContent: 'space-evenly', marginTop: 20}}>
                <Pressable style={styles.addButton} onPress={() => navigation.navigate('AddIncome')}>
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

export default Income

const styles = StyleSheet.create({
    tableContainer: {
        height: '75%',
        marginTop: 15,
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
