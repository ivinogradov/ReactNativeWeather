import {StyleSheet, Text, View} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import RowText from '@/components/RowText';
import {weatherType} from '@/utilities/weatherType';

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    temp_max: number;
    temp_min: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
}

const CurrentWeather = ({weatherData}: {weatherData: WeatherData}) => {
  const {
    wrapper,
    container,
    tempStyle,
    feels,
    highLowContainer,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;

  const {
    main: {temp, feels_like, temp_max, temp_min},
    weather,
  } = weatherData;

  const weatherCondition = weather[0].main as keyof typeof weatherType;

  console.log(weatherData);

  return (
    <View
      style={[
        wrapper,
        {backgroundColor: weatherType[weatherCondition].backgroundColor},
      ]}>
      <View style={container}>
        <Feather
          name={
            weatherType[weatherCondition].icon
          }
          size={100}
          color="white"
        />
        <Text style={tempStyle}>{temp}°</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={highLowContainer}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempStyle: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  highLowContainer: {
    flexDirection: 'row',
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
