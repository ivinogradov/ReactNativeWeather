import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import City from "../app/City";
import CurrentWeather from "../app/CurrentWeather";
import UpcomingWeather from "../app//UpcomingWeather";

const Tab = createBottomTabNavigator();

interface WeatherProps {
  weather: any; // Replace 'any' with the appropriate type for 'weather' if known
}

const Tabs = ({ weather }: WeatherProps) => {
    return (
        <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {
            backgroundColor: 'lightblue',
          },
          headerStyle: {
            backgroundColor: 'lightblue'
          },
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
            color: 'tomato'

          }
        }}
      >
        <Tab.Screen name="Current" options={{
          tabBarIcon: ({ focused }) => (<Feather name={'droplet'} size={25} color={focused ? 'tomato' : 'black'}/>)
        }}>
          {() => <CurrentWeather weatherData={weather.list[0]}/>}
        </Tab.Screen>
        <Tab.Screen name="Upcoming" options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name={'clock'}
              size={25}
              color={ focused ? 'tomato' : 'black' }
            />
          )
        }}>
          { () => <UpcomingWeather weatherData={weather.list}/>}
        </Tab.Screen>
        <Tab.Screen name="City" component={City} options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name={'home'}
              size={25}
              color={ focused ? 'tomato' : 'black' }
            />
          )
        }}/>
      </Tab.Navigator>
    )
}

export default Tabs