import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://erhanikinci.com/images/profile.jpg' }} style={ styles.image } />
      <View style={styles.content}>
        <View style={styles.row} >
            <Text numberOfLines={1} style={ styles.name }>Erhan</Text>
            <Text style={ styles.subTitle }>8:30</Text>
        </View>

        <Text numberOfLines={2} style={ styles.subTitle }> Hello there </Text>
      </View>
    </View>
  )
}

export default ChatListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    content: {
        flex: 1,

        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBlockColor: 'lightgray',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
        justifyContent:'space-between',
    },
    name: {
        flex: 1,
        fontWeight: 'bold',
    },
    subTitle: {
        color: 'gray',
    },
})