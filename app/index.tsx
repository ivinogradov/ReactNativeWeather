import CurrentWeather from "@/components/CurrentWeather";
import { StyleSheet, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App