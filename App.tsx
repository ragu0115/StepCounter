import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

type ValueProps = {
  label: string;
  value: string;
}
const Value = ({label,value}:ValueProps) => (
  <View>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
)

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <View style={styles.values}>
        <Value label = 'Steps' value= '1219'></Value>
        <Value label = 'Distance' value='1.0 KM'></Value>
      </View>

      <Value label = 'Flights Climbed' value='0.8 KM'></Value>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 12,
  },
  values:{
    flexDirection: 'row', 
    gap: 25,
    flexWrap: 'wrap',
  },
  label: {
    color: 'white',
    fontSize: 20,
  },
  value: {
    fontSize: 45,
    color: '#AFB3BE',
    fontWeight: '500'
  },
});
