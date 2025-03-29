import ListItem from '@/components/ListItem';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface WeatherData {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {all: number};
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  rain?: {'1h': number};
  sys: {pod: string};
  dt_txt: string;
}

const Empty = () => {
  return (
    <View>
      <Text>There are no items in the list :(</Text>
    </View>
  );
};

const UpcomingWeather = ({ weatherData }: { weatherData: WeatherData[] }) => {
  const renderItem = ({item}: {item: WeatherData}) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const {image} = styles;
  return (
    <ImageBackground
      source={require('../assets/images/upcoming-background.jpg')}
      style={image}>
      <FlatList
        data={weatherData}
        renderItem={renderItem}
        keyExtractor={item => item.dt_txt}
        ListEmptyComponent={Empty}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
