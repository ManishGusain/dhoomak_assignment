import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import backIcon from '../../assets/backArrow.png';

const CategoryHeader = ({ onBackPress, imageSource, headerTitle, number }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.backBtnContainer}>
                <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                    <Image source={backIcon} style={styles.backIcon} />
                </TouchableOpacity>

                <View style={styles.titleWrapper}>
                    <Image source={imageSource} style={styles.headerImage} />
                    <View style={styles.titleBox}>
                        <Text style={styles.headerTitle}>{headerTitle}</Text>
                        <Text style={styles.headerNumber}>{number + ' items'}</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.searchIcon}>
                <Text>🔍</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 6,
        backgroundColor: '#f0f0f0',
    },
    headerImage: {
        width: 40,
        height: 40,
        borderRadius:10,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerNumber: {
        fontSize: 14,
    },
    searchIcon: {
        padding: 8,
    },
    backBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:10,
    },
    backIcon: {
        width: 20,
        height: 20,
    },
    titleBox:{
        paddingLeft:10
    }
});

export default CategoryHeader;
