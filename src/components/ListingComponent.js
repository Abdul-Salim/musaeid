import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Icon } from 'react-native-elements';

const ListingComponent = (props) => {
    const {
        headings,
        rows,
        navigation,
        total,
        type,
        isLoading
    } = props;

    return (
        <View style={{ height: '100%' }}>
            <View style={{ height: '100%', backgroundColor: '#fff' }}>
                <View style={styles.row}>
                    {headings?.map((heading) => (
                        <View style={styles.heading}>
                            <Text>{heading.text}</Text>
                        </View>
                    ))}
                </View>
                <ScrollView style={styles.table} contentContainerStyle={{flex: 1}}>
                    {
                        isLoading ? (
                            <View style={{height: '75%',justifyContent: 'center', alignItems: 'center'}}>
                                <ActivityIndicator size="large" />
                            </View>
                        ) :
                            rows?.map((row) => (
                            <View style={styles.row} key={row.id}>
                                    <View style={styles.column}>
                                        <Text style={{ color: '#fff' }}>{row.date}</Text>
                                    </View>
                                    <View style={styles.column}>
                                        <Text style={{ color: '#fff' }}>{row.title}</Text>
                                    </View>
                                    <View style={styles.column}>
                                        <Text style={{ color: '#fff' }}>{row.amount}</Text>
                                    </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <Text style={{ fontWeight: '800', fontSize: 16, color: '#fff' }}>Total {type}</Text>
                <Text style={{ fontWeight: '800', fontSize: 16, color: '#fff' }}>=</Text>
                <Text style={{ fontWeight: '800', fontSize: 16, color: '#fff' }}>{total}</Text>
            </View>
        </View>
    )
}

export default ListingComponent

const styles = StyleSheet.create({
    table: {
        backgroundColor: '#fff',
        // width: '100%'
    },
    heading: {
        backgroundColor: '#fff',
        width: '33%',
        minHeight: 40,
        // flex:1,
        borderWidth: 1,
        borderColor: '#111',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        width: '100%',
        // height: 50,
        justifyContent: 'space-evenly'
    },
    column: {
        backgroundColor: '#111',
        // flex:1,
        width: '33%',
        borderWidth: 1,
        borderColor: '#fff',
        minHeight: 40,
        justifyContent: 'flex-end',
        paddingLeft: 5
    },
    footer: {
        paddingLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        width: '60%',
        backgroundColor: "#9b2226",
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 10 
    },

})