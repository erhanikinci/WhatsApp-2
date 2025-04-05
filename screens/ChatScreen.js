import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, ImageBackground, FlatList } from "react-native";
import React from "react";
import bg from "../assets/images/BG.png";
import Message from "../components/Message";
import messages from "../assets/data/messages.json"

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "android" ? 60 : 90}
      style={styles.bg}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        {/* <InputBox chatroom={chatRoom} /> */}
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
