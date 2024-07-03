import { TouchableHighlight, View, StyleSheet, Text } from "react-native"
import FastImage from "react-native-fast-image"

import { unknownTrackImageUri } from "@/constants/images"
import { colors, fontSize } from "@/constants/tokens"
import { defaultStyles } from "@/styles"

export type TracksListItemProps = {
    track: { 
        title: string,
        image?: string,
        artist?: string,
    }
}

export function TracksListItem({ track }: TracksListItemProps) {
    const isActiveTrack = false

    return (
        <TouchableHighlight>
            <View style={styles.trackItemContainer}>
                <View>
                    <FastImage 
                        source={{
                            uri: track.image ?? unknownTrackImageUri,
                            priority: FastImage.priority.normal,
                        }}
                        style={{
                            ...styles.trackArtworkImage,
                            opacity: isActiveTrack ? 0.6 : 1,
                        }}
                    />
                </View>

                <View>
                    <Text 
                        numberOfLines={1}
                        style={{
                            ...styles.trackTitleText,
                            color: isActiveTrack ? colors.primary : colors.text
                        }}
                    >
                        {track.title}
                    </Text>

                    {track.artist && (
                        <Text
                            numberOfLines={1}
                            style={{
                                ...styles.trackArtistText,
                                color: isActiveTrack ? colors.primary : colors.text
                            }}
                        >{track.artist}</Text>
                    )}
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    trackItemContainer: {
        flexDirection: 'row',
        columnGap: 15,
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
    },
    trackArtworkImage: {
        borderRadius: 8,
        width: 50,
        height: 50,
    },
    trackTitleText: {
        ...defaultStyles.text,
        fontSize: fontSize.sm,
        fontWeight: 600,
        width: '100%',
    },
    trackArtistText: {
        ...defaultStyles.text,
        color: colors.textMuted,
        fontSize: 14,
        marginTop: 4,
    }
})