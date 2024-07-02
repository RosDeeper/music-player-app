import { View } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { defaultStyles } from "@/styles"
import { StackScreenWithSearchBar } from "@/constants/layout"

import PlaylistsScreen from "."

const Stack = createNativeStackNavigator()

function PlaylistsScreenLayout() {
    return (
        <View style={defaultStyles.container}>
            <Stack.Navigator>
                <Stack.Screen 
                    name="index" 
                    component={PlaylistsScreen}
                    options={{
                        ...StackScreenWithSearchBar,
                        headerTitle: 'Playlists'
                    }}
                />
            </Stack.Navigator>
        </View>
    )
}

export default PlaylistsScreenLayout