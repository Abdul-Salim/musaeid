import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';


const Categories = ({iconName, onPress, type}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>onPress()} >
      <Icon name={iconName} type={type || "antdesign"} size={36} />
    </TouchableOpacity>
  );
};

export default Categories;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 100,
        width: '29%',
        justifyContent: 'center',
        borderColor: '#111',
        borderWidth: 1,
        margin: '2%',
        marginBottom: 30
    }
});
