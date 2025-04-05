import { Text, View } from "react-native";
import ChatListItem from "../components/ChatListItem"


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <ChatListItem />
      <ChatListItem />

    </View>
  );
}
