import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import React, { useState } from 'react';

import FibonacciModule from './src/FibonacciModule';

const FibonacciApp: React.FC = () => {
  const [numbers, setNumbers] = useState('');
  const [sequence, setSequence] = useState('');

  const handleCalc = () => {
    let test;
    if (Platform.OS === 'ios') {
      FibonacciModule.calculateFibonacci(Number(numbers), (error, result) => {
        if (error) {
          console.error(error);
          setSequence(error);
          // Handle the error case
        } else {
          console.log(result);
          setSequence(result);
          // Handle the success case
        }
      });
    } else {
      test = FibonacciModule.calculateFibonacci(Number(numbers));
      setSequence(test);
    }
    console.log(test);
  };

  if (sequence) {
    Alert.alert('Your fibonacci sequence is ', sequence);
  }

  return (
    <View style={styles.container}>
      <Text>Put some number to generate Fibonacci Sequence</Text>
      <TextInput
        value={numbers}
        onChangeText={setNumbers}
        style={styles.input}
        keyboardType="decimal-pad"
      />
      <TouchableHighlight style={styles.button} onPress={handleCalc}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableHighlight>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    borderColor: '#cccccc',
    borderWidth: 1,
    borderStyle: 'solid',
    width: '100%',
    marginVertical: 10,
  },
  button: {
    height: 40,
    width: '100%',
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
  },
});

export default FibonacciApp;
