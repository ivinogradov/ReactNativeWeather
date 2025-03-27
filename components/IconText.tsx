import { Feather } from "@expo/vector-icons"
import { StyleSheet, View, Text } from "react-native"

type IconTextProps = {
    iconName: React.ComponentProps<typeof Feather>["name"];
    iconColor: string;
    bodyText: string;
    bodyTextStyles: object;
}

const IconText = (props: IconTextProps) => {
    const {iconName, iconColor, bodyText, bodyTextStyles } = props
    const { container, textTheme } = styles
    return (
        <View style={container}>
            <Feather name={iconName} size={50} color={iconColor}/>
            <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    textTheme: {
        fontWeight: 'bold'
    }
})

export default IconText 