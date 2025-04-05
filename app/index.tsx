import { Text, View } from "react-native";
import ChatListItem from "../components/ChatListItem"



const chat = {
  id: "1",
  user: {
    image: 'https://erhanikinci.com/images/profile.jpg',
    name: "Erhan",
  },
  lastMessage: {
    text: "Oke",
    createdAt: "09:30",
  }
}

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <ChatListItem chat={chat} bool={true} string='Hello' />

    </View>
  );
}
