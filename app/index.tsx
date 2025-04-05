import { StyleSheet, Text, View } from "react-native";
import ChatsScreens from "../screens/ChatsScreens";


export default function Index() {
  return (
    <View
      style={styles.container}
    >

      < ChatsScreens />

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