import React from 'react';
import Tabs from '@/components/Tabs';
import {useState, useEffect} from 'react';
import * as Location from 'expo-location';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import { WEATHER_API_KEY } from '../env'


const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState<number | undefined>(undefined);
  const [lon, setLon] = useState<number | undefined>(undefined);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
      const data = await response.json()
      console.log(data)
      setWeather(data)
      setLoading(false)
    } catch (error) {
      setError(`Could not fetch weather. Error: ${error}`)
    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      console.log(status, 's');
      if (status !== 'granted') {
        setError('permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLat(location?.coords.latitude)
      setLon(location?.coords.longitude)
      await fetchWeatherData()
    }) ()
  }, [lat, lon]);

  if (weather) {
    console.log(weather)
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );
  }

  return <Tabs />;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
