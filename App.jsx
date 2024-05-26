import { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const { container, counter } = styles;
  const [count, setCount] = useState(0);

  return (
    <View style={container}>
      <Text>React native</Text>
      <Text>React native</Text>

      <View style={counter}>
        <Button title="Restar" onPress={() => setCount(count - 1)} />
        <Text>Count: {count}</Text>
        <Button title="Sumar" onPress={() => setCount(count + 1)} />
      </View>

      <StatusBar barStyle="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingTop: 5,
  },
  counter: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
