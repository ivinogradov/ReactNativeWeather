import { Feather } from "@expo/vector-icons";


export const weatherType: Record<string, { icon:  keyof typeof Feather.glyphMap; message: string; backgroundColor: string }> = {
    Thunderstorm: {
        icon: 'zap',
        message: 'It could get noisy',
        backgroundColor: '#000000'
    },
    Drizzle: {
        icon: 'cloud-rain',
        message: 'It may rain a little',
        backgroundColor: '#36454f'
    },
    Rain: {
        icon: 'umbrella',
        message: 'You will need an umbrella',
        backgroundColor: '#0000ff'
    },
    Snow: {
        icon: 'cloud-snow',
        message: 'Let\'s build a snowman',
        backgroundColor: '#7f6065'
    },
    Clear: {
        icon: 'sun',
        message: 'It is perfect t-shirt weather',
        backgroundColor: '#363636'
    },
    Clouds: {
        icon: 'cloud',
        message: 'You could live in the clouds',
        backgroundColor: '#585858'
    },
    Haze: {
        icon: 'wind',
        message: 'It might be a bit damp',
        backgroundColor: '#58586e'
    },
    Mist: {
        icon: 'align-justify',
        message: 'It might be hard to see',
        backgroundColor: '#3e3e37'
    }
}