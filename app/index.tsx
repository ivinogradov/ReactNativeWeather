import Tabs from '@/components/Tabs';
import {useGetWeather} from '@/hooks/useGetWeather';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const App = () => {
  const [loading, error, weather] = useGetWeather();

  if (typeof weather === 'object' && weather !== null && 'list' in weather) {
    return <Tabs weather={weather} />;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
