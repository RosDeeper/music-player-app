import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const RootNavigation = () => {
    return (
        <Stack>
            <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
        </Stack>
    )
}

function App() {
    return (
        <SafeAreaProvider>
            <RootNavigation/> 

            <StatusBar style='auto'/>
        </SafeAreaProvider>
    )
}

export default App