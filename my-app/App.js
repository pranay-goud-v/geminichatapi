import { StyleSheet, View } from 'react-native';
import Chatbot from '/workspaces/geminichatapi/my-app/src/ChatBot.js';
export default function App() {
  return (
    <View style={styles.container}>
       <Chatbot/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});