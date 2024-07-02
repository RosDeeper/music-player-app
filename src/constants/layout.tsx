import { NativeStackNavigationOptions } from "@react-navigation/native-stack"

import { colors, fontSize } from "./tokens"

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
    // ios
    // headerLargeTitle: true,
    // headerLargeStyle: {
    //     backgroundColor: colors.background,
    // },
    // headerLargeTitleStyle: {
    //     color: colors.text,
    // },
    // headerBlurEffect: 'prominent',

    headerStyle: {
        backgroundColor: colors.background,
    },
    headerTitleStyle: {
        color: colors.text,
        fontSize: fontSize.title,
    },
    headerTintColor: colors.text,
    headerTransparent: true,
    headerShadowVisible: false,
}