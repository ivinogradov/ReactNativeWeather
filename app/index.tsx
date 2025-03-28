import React from 'react';
import Tabs from '@/components/Tabs';
import {useState, useEffect} from 'react';
import * as Location from 'expo-location';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import { WEATHER_API_KEY } from '../env'

/// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key} 

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [error, setError] = useState<string | null>(null);
  console.log(WEATHER_API_KEY);
  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      console.log(status, 's');
      if (status !== 'granted') {
        setError('permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }) ()
  }, []);

  if (location) {
    console.log(location)
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
