import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BarChart, LineChart } from "react-native-chart-kit";
import { Button, Icon } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

import { color } from 'react-native-elements/dist/helpers';
import AddIncome from '../components/AddIncome';
import AddExpense from '../components/AddExpense';
import ListingComponent from '../components/ListingComponent';
import EditingComponent from '../components/EditingComponent';
import Income from '../components/Income';
import Expense from '../components/Expense';

const Finance = ({ navigation }) => {

    const [active, setActive] = useState('summary');
    const [edit, setEdit] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData([]);
        firestore()
            .collection(active)
            .orderBy('date', 'desc')
            .get()
            .then(querySnapshot => {
                console.log('Total income: ', querySnapshot);
                querySnapshot.forEach(documentSnapshot => {
                    //   console.log('Income: ', moment(documentSnapshot.data().date).format('DD MMM YY'));
                    setData((prev) =>
                        [...prev, {
                            date: moment(documentSnapshot.data().date).format('DD MMM YY'),
                            title: documentSnapshot?.data().title,
                            amount: documentSnapshot?.data().amount,
                            id: documentSnapshot?.id
                        }]
                    )
                });
            });
    }, [active]);

    useEffect(() => {
        console.log('data', data)
    }, [data])


    const screenWidth = Dimensions.get("window").width - 50;
    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 2,
        useShadowColorFromDataset: false // optional
    };

    const chartData = {
        labels: ["Income", "Expense"],
        datasets: [
            {
                data: [30000, 10000]
            }
        ]
    };

    const headings = [
        { text: 'Date' },
        { text: 'Title' },
        { text: 'Amount' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.butttonContainer}>
                <View style={styles.buttonWrapper}>
                    <Pressable onPress={() => setActive('income')} style={[styles.income, active === 'income' && styles.active]}>
                        <Text style={[styles.buttonText, active === 'income' && styles.activeText]}>Income</Text>
                    </Pressable>
                    <Pressable onPress={() => setActive('summary')} style={[styles.income, active === 'summary' && styles.active]}>
                        <Text style={[styles.buttonText, active === 'summary' && styles.activeText]}>summary</Text>
                    </Pressable>
                    <Pressable onPress={() => setActive('expense')} style={[styles.income, active === 'expense' && styles.active]}>
                        <Text style={[styles.buttonText, active === 'expense' && styles.activeText]}>Expense</Text>
                    </Pressable>
                </View>
            </View>
            {active === 'income' && (
                <Income navigation={navigation} />
            )}
            {
                active === 'summary' && (
                    <View style={styles.summaryContainer}>
                        <Text>Finance Summary for January</Text>
                        <View style={styles.summary}>
                        <View style={styles.summaryLeft}>
                            <Text style={styles.summaryItem}>Income this month</Text>
                            <Text style={styles.summaryItem}>Previous month balance</Text>
                            <Text style={styles.summaryItem}>Total Income</Text>
                            <Text style={styles.summaryItem}>Expense this month</Text>
                            <Text style={[styles.summaryItem, styles.summaryTotal]}>Total Balance</Text>
                        </View>
                        <View style={styles.summaryRight}>
                            <Text style={styles.summaryItem}>565</Text>
                            <Text style={styles.summaryItem}>5654645</Text>
                            <Text style={styles.summaryItem}>654654</Text>
                            <Text style={styles.summaryItem}>656546</Text>
                            <Text style={[styles.summaryItem, styles.summaryTotal]}>656565</Text>
                        </View>

                        {/* <BarChart
                            // style={graphStyle}
                            width={screenWidth}
                            height={220}
                            yAxisLabel="$"
                            verticalLabelRotation={30}
                            chartConfig={chartConfig}
                            data={chartData}
                        /> */}
                        </View>
                    </View>
                )
            }
            {active === 'expense' && (
                <Expense navigation={navigation} />
            )}
        </View>
    )
}

export default Finance

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        padding: 10,
        backgroundColor: '#005f73'
    },
    butttonContainer: {
        height: '10%',
        // backgroundColor: '#fff',
        justifyContent: 'center'
    },
    tableContainer: {
        height: '75%',
        marginTop: 15
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // marginTop: 30,
        backgroundColor: '#fff',
        // margin: 10,
        borderRadius: 5
    },
    addIncome: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 150,
        backgroundColor: '#ee0000',
    },
    addExpense: {
        flexDirection: 'row',
        height: 50,
        width: 150,
        backgroundColor: '#00ee00',
        justifyContent: 'center',
        alignItems: 'center',
    },
    income: {
        height: 50,
        width: '33.3%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    expense: {
        backgroundColor: '#ee0000',
    },
    active: {
        backgroundColor: '#9b2226',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '900',
    },
    activeText: {
        color: '#fff'
    },
    addButton: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        borderRadius: 50,
        backgroundColor: '#fff'
    },
    summary: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    summaryLeft: {
        width: '70%',
    },
    summaryItem: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 5,
        fontSize: 16,
        fontWeight: '900',
        backgroundColor: '#eaeaea'
    },
    summaryTotal: {
        backgroundColor: '#111',
        color: '#fff'
    },
    summaryContainer: {
        backgroundColor: '#fff',
        flex: 0.99,
        borderRadius: 20,
        padding: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }

})