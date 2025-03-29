import { View, Text, StyleSheet } from "react-native";
import {Feather} from '@expo/vector-icons';
import { weatherType } from "@/utilities/weatherType";
import moment from "moment";

type ItemProps = { condition: keyof typeof weatherType, dt_txt: string, min: number, max: number };

const ListItem = (props: ItemProps) => {
    const {dt_txt, min, max, condition} = props;
    const { item, date, temp, dateWrapper } = styles
    return (
      <View style={item}>
        <Feather name={weatherType[condition].icon} size={50} color={'white'} />
        <View style={dateWrapper}>
          <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
          <Text style={date}>{moment(dt_txt).format('h:mm a')}</Text>
        </View>
        <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
        {/* <Text>{condition}</Text> */}
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
  },
  dateWrapper: {
    flexDirection: 'column'
  }
});

export default ListItem