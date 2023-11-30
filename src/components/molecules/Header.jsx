import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native';
import Avatar from './Avatar';
import burgerMenu from '../../assets/burgerMenu.png'
import avatr from '../../assets/avatr.png'

export default function Header() {
    return (
        <View style={styles.container}>
            <Avatar size={40} imageSource={burgerMenu} />
            <Avatar size={40} imageSource={avatr} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffc108',
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 6,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingHorizontal: 10
    }
});