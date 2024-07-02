import { View } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { defaultStyles } from "@/styles"
import { StackScreenWithSearchBar } from "@/constants/layout"

import FavouritesScreen from "."

const Stack = createNativeStackNavigator()

function FavouritesScreenLayout() {
    return (
        <View style={defaultStyles.container}>
            <Stack.Navigator>
                <Stack.Screen 
                    name="index" 
                    component={FavouritesScreen}
                    options={{
                        ...StackScreenWithSearchBar,
                        headerTitle: 'Favourites'
                    }}
                />
            </Stack.Navigator>
        </View>
    )
}

export default FavouritesScreenLayout