import { Text, View } from "react-native"

import { defaultStyles } from "@/styles"

function SongScreen() {
    return (
        <View style={defaultStyles.container}>
            <Text style={defaultStyles.text}>Songs Screen</Text>
        </View>
    )
}

export default SongScreen