import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const EditingComponent = (props) => {
    const {
        headings,
        rows,
        navigation,
        type
    } = props;
  return (
<View style={{ height: '100%', backgroundColor: '#001219' }}>
            <View style={{ height: '100%', backgroundColor: '#fff' }}>
                <View style={styles.row}>
                    {headings?.map((heading) => (
                        <View style={styles.heading} key={heading.text}>
                            <Text style={{color: '#fff'}}>{heading.text}</Text>
                        </View>
                    ))}
                </View>
                <ScrollView style={styles.table}>
                {
                        // rows?.map((row) => (
                            rows?.map((row) => (
                            <View style={styles.row} key={row.id}>
                                    <View style={styles.column}>
                                        <TextInput style={{ color: '#111' }} value={row.date} />
                                    </View>
                                    <View style={styles.column}>
                                        <TextInput style={{ color: '#111' }} value={row.title} />
                                    </View>
                                    <View style={styles.column}>
                                        <TextInput style={{ color: '#111' }} value={row.amount} />
                                    </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
            {/* <View style={styles.footer}>
                <Text style={{ fontWeight: '800', fontSize: 16, color: '#fff' }}>Total</Text>
                <Text style={{ fontWeight: '800', fontSize: 16, color: '#fff' }}>Total</Text>
                <Pressable style={styles.addButton} onPress={() => navigation.navigate(type)}>
                    <Icon
                        name='add'
                        color='#111'
                        size={36}
                    />
                </Pressable>
            </View> */}
        </View>
  )
}

export default EditingComponent

const styles = StyleSheet.create({
    table: {
        backgroundColor: '#fff',
        // width: '100%'
    },
    heading: {
        backgroundColor: '#111',
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
        backgroundColor: '#eaeaea',
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
        // width: '50%',
    },
    addButton: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        borderRadius: 50,
        backgroundColor: '#fff'
    },
})