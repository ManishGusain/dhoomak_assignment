import { useState } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';

const CarouselScreen = () => {
    const img1 = "https://plus.unsplash.com/premium_photo-1669150852127-2435412047f2?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const img2 = "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const img3 = "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const carouselData = [
        { id: 1, imageUri: img1 },
        { id: 2, imageUri: img2 },
        { id: 3, imageUri: img3 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const screenWidth = Dimensions.get('window').width;

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / screenWidth);
        setCurrentIndex(index);
    };

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={200}
            >
                {carouselData.map((slide) => (
                    <View key={slide.id} style={styles.slide}>
                        <Image source={{ uri: slide.imageUri }} style={styles.image} />
                    </View>
                ))}
            </ScrollView>
            <View style={styles.pagination}>
                {carouselData.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            { backgroundColor: index === currentIndex ? '#ffc108' : 'lightgray' },
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    slide: {
        width: Dimensions.get('window').width,
        height: 200,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
});

export default CarouselScreen;
