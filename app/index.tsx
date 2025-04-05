import { StyleSheet, Text, View } from "react-native";
import ChatsScreens from "../screens/ChatsScreens";
import ChatScreen from "../screens/ChatScreen";


export default function Index() {
  return (
    <View
      style={styles.container}
    >

      {/* < ChatsScreens /> */}
      < ChatScreen />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',

    paddingVertical: 50,
  },
});