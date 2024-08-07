import { Tabs } from "expo-router"
import { BlurView } from "expo-blur"
import { StyleSheet } from "react-native"
import { FontAwesome, MaterialCommunityIcons, Ionicons, FontAwesome6 } from "@expo/vector-icons"

import { colors, fontSize } from "@/constants/tokens"

function TabsNavigation() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarLabelStyle: {
                fontSize: fontSize.xs,
                fontWeight: '500',
            },
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: '#000',
                borderTopWidth: 0,
                paddingBottom: 5,
                paddingTop: 5,
                minHeight: 60,
            },
            tabBarBackground: () => (
                <BlurView
                    intensity={30}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        overflow: 'hidden',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }}
                />
            )
        }}>
            <Tabs.Screen 
                name="favourites"
                options={{
                    title: 'Favourites',
                    tabBarIcon: ({color}) => <FontAwesome name="heart" size={20} color={color}/> 
                }}
            />
            <Tabs.Screen 
                name="playlists"
                options={{
                    title: 'Playlists',
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="playlist-music" size={28} color={color}/> 
                }}
            />
            <Tabs.Screen 
                name="(songs)"
                options={{
                    title: 'Songs',
                    tabBarIcon: ({color}) => <Ionicons name="musical-notes" size={22} color={color}/> 
                }}
            />
            <Tabs.Screen 
                name="artists"
                options={{
                    title: 'Artists',
                    tabBarIcon: ({color}) => <FontAwesome6 name="users-line" size={22} color={color}/> 
                }}
            />
        </Tabs>
    )
}

export default TabsNavigation