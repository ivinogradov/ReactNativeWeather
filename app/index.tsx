import City from "./City";
import CurrentWeather from "./CurrentWeather";
import UpcomingWeather from "./UpcomingWeather";
import { StyleSheet, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
      {/* <UpcomingWeather /> */}
      {/* <City /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App