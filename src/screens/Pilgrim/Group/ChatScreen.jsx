import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { Colors, Spacing, Typography } from '../../../theme';
import { Images } from '../../../assets/images/Images';
import { sWidth, sHeight, moderateScale } from '../../../utils/responsive';
import Header from '../../../components/common/Header';
import { useRoute, useNavigation } from '@react-navigation/native';
import { t } from '../../../i18n/translations';

const ChatScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { name, avatar, isGroup, avatars } = route.params || {};
    const [message, setMessage] = useState('');

    const initialMessages = [
        { id: '1', text: 'Is there any WiFi network issue at your end?', sender: 'other', time: '06:55PM' },
        { id: '2', text: 'We should meet earlier so that we can catch the bus.', sender: 'other', time: '06:56PM' },
        { id: '3', text: 'How much earlier? I have to get some medicine.', sender: 'me', time: '06:57PM' },
        { id: '4', text: 'Also, I think we should ask the other roommates as well. Maybe they want to go too.', sender: 'me', time: '06:58PM' },
        { id: '5', text: 'Should I ask the other group members as well? It could be much better to go as a group? I will text group leader shahab and take his opinion on this.', sender: 'other', time: '06:59PM' },
        { id: '6', text: 'Go ahead. Let’s invite everyone. May their prayers be accepted.', sender: 'me', time: '07:00PM' },
    ];

    const renderMessage = ({ item }) => {
        const isMe = item.sender === 'me';
        return (
            <View style={[styles.messageWrapper, isMe ? styles.myMessageWrapper : styles.otherMessageWrapper]}>
                <View style={[styles.bubble, isMe ? styles.myBubble : styles.otherBubble]}>
                    <Text style={[styles.messageText, isMe ? styles.myMessageText : styles.otherMessageText]}>
                        {item.text}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Header
                title={name || 'Chat'}
                profileImage={isGroup ? avatars[0] : (avatar || Images.profile)}
                onBackPress={() => navigation.goBack()}
                showMihrab={true}
            />

            <FlatList
                data={initialMessages}
                renderItem={renderMessage}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.messageList}
                showsVerticalScrollIndicator={false}
            />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
            >
                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            placeholder={t('group.startTyping')}
                            placeholderTextColor="#CBD5E0"
                            value={message}
                            onChangeText={setMessage}
                            multiline
                        />
                        <TouchableOpacity style={styles.sendButton} activeOpacity={0.8}>
                            <Image source={Images.sendmessage} style={styles.sendIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundLight,
    },
    messageList: {
        padding: Spacing.layout.gap,
        paddingBottom: sHeight(20),
    },
    messageWrapper: {
        marginBottom: sHeight(16),
        maxWidth: '85%',
    },
    otherMessageWrapper: {
        alignSelf: 'flex-start',
    },
    myMessageWrapper: {
        alignSelf: 'flex-end',
    },
    bubble: {
        paddingHorizontal: sWidth(16),
        paddingVertical: sHeight(12),
        borderRadius: moderateScale(16),
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
    },
    otherBubble: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 2,
    },
    myBubble: {
        backgroundColor: '#4A98B0',
        borderTopRightRadius: 2,
    },
    messageText: {
        fontSize: sWidth(14),
        lineHeight: sWidth(20),
    },
    otherMessageText: {
        color: Colors.background,
    },
    myMessageText: {
        color: Colors.white,
    },
    inputContainer: {
        paddingHorizontal: Spacing.layout.gap,
        paddingBottom: sHeight(30),
        paddingTop: sHeight(10),
        backgroundColor: Colors.backgroundLight,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: moderateScale(25),
        paddingHorizontal: sWidth(16),
        paddingVertical: sHeight(10),
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    input: {
        flex: 1,
        fontSize: sWidth(15),
        color: Colors.background,
        maxHeight: sHeight(100),
        paddingVertical: 0,
    },
    sendButton: {
        marginLeft: sWidth(10),
    },
    sendIcon: {
        width: sWidth(24),
        height: sWidth(24),
        resizeMode: 'contain',
    },
});

export default ChatScreen;
