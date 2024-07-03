import { View, StyleSheet, ScrollView } from "react-native"

import { defaultStyles } from "@/styles"
import { TracksList } from "@/components/TracksList"
import { screenPadding } from "@/constants/tokens"

function SongScreen() {
    return (
        <View style={styles.songScreenContainer}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={{paddingHorizontal: screenPadding.horizontal}}
            >
                <TracksList scrollEnabled={false}/>
            </ScrollView>
        </View> 
    )
}

const styles = StyleSheet.create({
    songScreenContainer: {
        ...defaultStyles.container,
        marginTop: 80,
        marginBottom: 60,
    }
})

export default SongScreen