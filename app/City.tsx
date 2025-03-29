import {ImageBackground, View, StyleSheet, Text} from 'react-native';
import IconText from '@/components/IconText';
import moment from 'moment';

interface WeatherData {
  name: string;
  country: string;
  population: number;
  sunrise: number;
  sunset: number;
}

const City = ({ weatherData }: { weatherData: WeatherData }) => {
  const {
    image,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
  } = styles;

  const { name, country, population, sunrise, sunset } = weatherData
  return (
    <ImageBackground
      source={require('../assets/images/city-background.png')}
      style={image}>
      <Text style={[cityText, cityName]}>{name}</Text>
      <Text style={[cityText, countryName]}>{country}</Text>
      <View style={[populationWrapper, rowLayout]}>
        <IconText
          iconName="user"
          iconColor="red"
          bodyText={`Population: ${population}`}
          bodyTextStyles={populationText}
        />
      </View>

      <View style={[riseSetWrapper, rowLayout]}>
        <IconText
          iconName="sunrise"
          iconColor="white"
          bodyText={moment.unix(sunrise).format('h:mm:ss a')}
          bodyTextStyles={riseSetText}
        />
        <IconText
          iconName="sunset"
          iconColor="white"
          bodyText={moment.unix(sunset).format('h:mm:ss a')}
          bodyTextStyles={riseSetText}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default City;
