import { FlatList, StyleSheet, View } from "react-native"

import library from "@/assets/data/library.json"
import { utilsStyles } from "@/styles"

import { TracksListItem } from "./TracksListItem"

// export type TracksListProps = Partial<FlatListProps<unknown>>

const ItemDivider = () => (
    <View
        style={{
            ...utilsStyles.itemSeparator, 
            marginLeft: 60,
        }}
    />
)

export function TracksList({ ...flatlistProps }) {
    return (
        <FlatList 
            data={library} 
            ItemSeparatorComponent={ItemDivider}
            renderItem={({item: track}) => {
                return <TracksListItem track={{
                    ...track,
                    image: track.artwork,
                }}/>
            }}
            {...flatlistProps}
            style={styles.flatList}
        />
    )
}

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
    }
})