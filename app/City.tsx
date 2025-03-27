import {ImageBackground, View, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconText from '@/components/IconText';

const City = () => {
    const { container, image, cityName, countryName, cityText, populationWrapper, populationText, riseSetWrapper, riseSetText, rowLayout } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground
            source={require('../assets/images/city-background.png')}
            style={image}>
                <Text style={[cityText, cityName]}>London</Text>
                <Text style={[cityText, countryName]}>UK</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        iconName='user'
                        iconColor='red'
                        bodyText='80000'
                        bodyTextStyles={populationText}
                    />
                </View>
                
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText 
                        iconName='sunrise'
                        iconColor='white'
                        bodyText='6:46:58 am'
                        bodyTextStyles={riseSetText}
                    />
                    <IconText
                        iconName='sunset'
                        iconColor='white'
                        bodyText='7:37:15 pm'
                        bodyTextStyles={riseSetText}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0
  },
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
    alignItems: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default City;
