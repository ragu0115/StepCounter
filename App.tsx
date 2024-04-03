import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.label}>Steps</Text>
          <Text style={styles.value}>1000</Text>
        </View>
        <View>
          <Text style={styles.label}>Distance</Text>
          <Text style={styles.value}>1.0 KM</Text>
        </View>
      </View>

      <View>
      <Text style={styles.label}>Flights Climbed</Text>
      <Text style={styles.value}>0.8 KM</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
  label: {},
  value: {
    fontSize: 35
  },
});
