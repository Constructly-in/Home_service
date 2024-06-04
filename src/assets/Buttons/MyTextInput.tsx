import React from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import color from '../../utility/color';

const { width, height } = Dimensions.get('window');

const MyTextInput = ({ ...props }) => {
  return (
    <View style={styles.Container}>
      <TextInput
        style={styles.InputText}
        {...props}
      />
      <Text style={styles.Hide}>Show/Hide</Text>
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  Container: {
    height: height * 0.06, // 6% of screen height
    width: '90%', // 90% of screen width
    paddingHorizontal: width * 0.05, // 5% of screen width
    justifyContent: 'center',
    marginBottom: height * 0.02, // 2% of screen height
  
    backgroundColor: color.circle,
    elevation: 5,
    flexDirection: 'row',
    alignSelf: 'center', // Center the container horizontally
    
  },

  InputText: {
    flex: 1, // Takes up available space in the row
    height: '100%',
    fontSize: width * 0.04, // Font size relative to screen width
    fontWeight: '500',
    color: color.white,
  },
  
  Hide: {
    alignSelf: 'center', // Center the text vertically
    fontSize: width * 0.035, // Font size relative to screen width
    color: color.white,
  },
});
