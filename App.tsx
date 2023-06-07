import {
  NativeModules,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import React, { useState } from 'react';

const FibonacciApp: React.FC = () => {
  const [number, setNumber] = useState('');
  const {FibonacciModule} = NativeModules;

  const handleCalc = () => {
    console.log(FibonacciModule.calculateFibonacci(number));
  };

  return (
    <View style={styles.container}>
      <Text>Put some number to generate Fibonacci Sequence</Text>
      <TextInput
        value={number}
        onChangeText={setNumber}
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
