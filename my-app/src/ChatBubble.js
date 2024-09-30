import React from "react";
import{View,Text,StyleSheet,TouchableOpacity} from "react-native";
import{Ionicons} from "react-native-vector-icons";

const ChatBubble=({role,text,onSpeech})=>{
    return(
        <View
          style={[
            styles.chatItem,
            role==="user" ? styles.userChatItem: styles.modeChatItem,
          ]}
        >
            <Text style={styles.chatText}>{text}</Text>
            {role==="model" &&(
                <TouchableOpacity onPress={onSpeech} style={styles.speakerIcon}>
                    <Ionicons name="volume-high-outline" size={24} color="#fff"/>
                </TouchableOpacity>
            )}
            </View>
    );
};
const styles=StyleSheet.create({
    chatItem:{
        marginBottom:10,
        padding:10,
        borderRadius:10,
        maxWidth:"70%", //adjust based on your preference
        position:"relative", //added for positioning the speak
    },
    userChatItem:{
        alignSelf:"flex-end",
        backgroundColor:"#007AFF",
    },
    modeChatItem:{
        alignSelf:"flex-start",
        backgroundColor:"#000",
    },
    chatText:{
        fontSize:16,
        color:"#fff",
    },
    speakerIcon:{
        position:"absolute",
        bottom:5,
        right:5,
    },
});
export default ChatBubble;