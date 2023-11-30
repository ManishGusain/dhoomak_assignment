import { Image, StyleSheet, View } from 'react-native';
import cir from '../../assets/circle.png';

export default function Avatar({ imageSource = cir, size = 50, bRadius = 25 }) {
    const avatarSize = {
        width: size,
        height: size,
        borderRadius: size / 2,
    };
    return (
        <View style={[styles.avatarContainer, avatarSize]}>
            <Image source={imageSource} style={[styles.avatarImage, { borderRadius: bRadius }]} />
        </View>
    );
}

const styles = StyleSheet.create({
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarImage: {
        width: '100%',
        height: '100%',
    },
});