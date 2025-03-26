import CurrentWeather from "@/components/CurrentWeather";
import UpcomingWeather from "@/components/UpcomingWeather";
import { StyleSheet, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <CurrentWeather /> */}
      <UpcomingWeather />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App