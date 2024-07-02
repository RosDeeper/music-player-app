import { View } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { defaultStyles } from "@/styles"
import { StackScreenWithSearchBar } from "@/constants/layout"

import ArtistsScreen from "."

const Stack = createNativeStackNavigator()

function ArtistsScreenLayout() {
    return (
        <View style={defaultStyles.container}>
            <Stack.Navigator>
                <Stack.Screen 
                    name="index" 
                    component={ArtistsScreen}
                    options={{
                        ...StackScreenWithSearchBar,
                        headerTitle: 'Artists'
                    }}
                />
            </Stack.Navigator>
        </View>
    )
}

export default ArtistsScreenLayout