import { View, Text, StyleSheet } from "react-native";
import {Feather} from '@expo/vector-icons';

type ItemProps = { condition: string, dt_txt: string, min: number, max: number};

const ListItem = (props: ItemProps) => {
    const {dt_txt, min, max, condition} = props;
    const { item, date, temp } = styles
    return (
      <View style={item}>
        <Feather name={'sun'} size={50} color={'white'} />
        <Text style={date}>{dt_txt}</Text>
        <Text style={temp}>{min}</Text>
        <Text style={temp}>{max}</Text>
        <Text>{condition}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'pink',
    borderWidth: 5
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  }
});

export default ListItem