
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState,useEffect} from 'react'
const ChatScreen = ({ route }) => {
    const { id, name, image, description } = route.params; // Destructure params passed from Home screen

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    // Check if the image is a URL (for remote images) or a require statement (for local images)
    const isImageUrl = typeof image === 'string' && image.startsWith('http');

    // Simulate initial message when screen loads
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: `Hello ${name}, how are you?`, // Personalized greeting
                createdAt: new Date(),
                user: {
                    _id: 100,
                    name: 'AI Bot',
                    avatar: 'https://placeimg.com/140/140/any', // Placeholder avatar for AI bot
                },
            },
        ]);
    }, [name]);

    // Handle sending new messages
    const onSendMessage = () => {
        if (newMessage.trim()) {
            const newMessageData = {
                _id: messages.length + 1,
                text: newMessage,
                createdAt: new Date(),
                user: {
                    _id: id, // Use passed user ID
                    name: name, // Use passed user name
                    avatar: image, // Use passed user image
                },
            };

            setMessages((prevMessages) => [...prevMessages, newMessageData]);
            setNewMessage(''); // Clear input after sending
        }
    };

    return (
        <LinearGradient colors={['#17435D', '#151515']} style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={isImageUrl ? { uri: image } : image} 
                    style={styles.avatar}
                />
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerName}>{name}</Text>
                    <Text style={styles.headerDescription}>{description}</Text>
                </View>
                
            </View>

            
            <ScrollView contentContainerStyle={styles.messageList}>
                {messages.map((message) => (
                    <View
                        key={message._id}
                        style={[styles.message, message.user._id === id ? styles.userMessage : styles.botMessage]}
                    >
                        <View style={styles.messageTextContainer}>
                            <Text style={styles.messageText}>{message.text}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.inputContainer}
            >
                <TextInput
                    style={styles.input}
                    value={newMessage}
                    onChangeText={setNewMessage}
                    placeholder="Type a message..."
                    placeholderTextColor="#888"
                />
               
                <TouchableOpacity
                    onPress={newMessage.trim() ? onSendMessage : () => console.log('Audio Button Pressed')}
                    style={styles.button}
                >
                    {newMessage.trim() ? (
                        <Text style={styles.sendButtonText}>Send</Text>
                    ) : (
                        <Icon name="volume-up" size={30} color="#fff" /> 
                    )}
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    headerTextContainer: {
        flexDirection: 'column',
    },
    headerName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerDescription: {
        color: 'gray',
        fontSize: 14,
        maxWidth: '90%'
    },
    messageList: {
        flexGrow: 1,
        marginBottom: 10,
    },
    message: {
        marginBottom: 10,
        padding: 10,
        borderRadius: 12,
        maxWidth: '75%',
    },
    userMessage: {
        backgroundColor: '#ACADB9',
        alignSelf: 'flex-end',
        color: 'white',
    },
    botMessage: {
        backgroundColor: '#ACADB9',
        alignSelf: 'flex-start',
        color: 'white',
    },
    messageTextContainer: {
        maxWidth: '90%',
        padding: 10,
    },
    messageText: {
        fontSize: 16,
        color: '#fff',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'transparent',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    input: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: 'lightgray',
        borderRadius: 12,
        color: 'black'
    },
    button: {
        marginLeft: 10,
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ChatScreen;
