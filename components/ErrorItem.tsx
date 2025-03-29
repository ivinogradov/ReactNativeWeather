import { Feather } from "@expo/vector-icons"
import { View,Text, StyleSheet } from "react-native"

const ErrorItem = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.errorMessage}>Sorry, something went wrong.</Text>
            <Feather name={'frown'} color={'white'} size={100} />
        </View>
    )
}

const styles = StyleSheet.create({
 container:{
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
 },
 errorMessage: {
    fontSize: 30,
    color: 'white',
    marginHorizontal: 10,
    textAlign: 'center'
 }
})
export default ErrorItem