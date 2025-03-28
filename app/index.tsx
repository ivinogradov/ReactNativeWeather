import City from "./City";
import CurrentWeather from "./CurrentWeather";
import UpcomingWeather from "./UpcomingWeather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const App = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Current" component={CurrentWeather} />
        <Tab.Screen name="Upcoming" component={UpcomingWeather} />
        <Tab.Screen name="City" component={City} />
      </Tab.Navigator>
  )
}

export default App