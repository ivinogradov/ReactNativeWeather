import { SafeAreaView, StyleSheet, Text, View } from "react-native"

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Current weather</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowContainer}>
          <Text style={styles.highLow}>High: 6</Text>
          <Text style={styles.highLow}>Low: 2</Text>
        </View>
       
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
  },
  wrapper: {
    flex: 1
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLowContainer: {
    flexDirection: 'row'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  }
})

export default App