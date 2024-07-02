import { View } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { defaultStyles } from "@/styles"
import { StackScreenWithSearchBar } from "@/constants/layout"

import SongScreen from "."

const Stack = createNativeStackNavigator()

function SongScreenLayout() {
    return (
        <View style={defaultStyles.container}>
            <Stack.Navigator>
                <Stack.Screen 
                    name="index"
                    component={SongScreen}
                    options={{
                        ...StackScreenWithSearchBar,
                        headerTitle: 'Songs',
                    }}
                />
            </Stack.Navigator>
        </View>
    )
}

export default SongScreenLayout