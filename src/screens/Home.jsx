import Header from "../components/molecules/Header";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import vegBasket from '../assets/vegetables.png';
import stopwatch from '../assets/stopwatch.png';
import { useNavigation } from "@react-navigation/native";
import Avatar from "../components/molecules/Avatar";
import CarouselScreen from "../components/molecules/Carousel";
import BasicLayout from "../layouts/BasicLayout";
import { HomeitemData } from "../constants/General";

export default function HomeScreen() {
    const navigation = useNavigation();

    const ItemCard = ({ id, itemName, itemImage, navTo }) => {
        return (
            <TouchableOpacity key={id} style={styles.cardContainer} onPress={() => navigation.navigate(navTo)}>
                <Image source={itemImage} style={styles.itemImage} />
                <Text style={styles.itemName}>{itemName}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <BasicLayout>
            <Header />

            <View style={styles.scheduleContainer}>
                <View style={[styles.box, styles.scheduleDataBox]}>
                    <View>
                        <Text style={styles.boxText}>Next Order Schedule</Text>
                        <Text style={styles.boxDate}>20 June 2023</Text>
                        <View style={styles.deliveryTimeWrapper}>
                            <Avatar imageSource={stopwatch} size={20} />
                            <Text style={styles.deliveryTimeText}>10:30 Am | Tuesday</Text>
                        </View>
                    </View>
                </View>
                
                <View style={[styles.box, styles.imgWrapper]}>
                    <Image source={vegBasket} style={styles.vegImg} />
                </View>
            </View>

            <CarouselScreen/>

            <View style={styles.itemContainer}>
                {HomeitemData.map((item) => (
                    <ItemCard key={item.id} {...item} />
                ))}
            </View>

        </BasicLayout>
    );
}

const styles = StyleSheet.create({
    scheduleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    box: {
        height: 150,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxText: {
        color: 'red',
    },
    boxDate: {
        backgroundColor: 'green',
        color: '#fff',
        padding: 5,
        width: '70%',
        borderRadius: 5,
        marginVertical: 3
    },
    imgWrapper: {
        overflow: 'hidden',
    },
    vegImg: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain'
    },
    scheduleDataBox: {
        borderRightWidth: 1,
    },
    cardContainer: {
        width: 180,
        height: 130,
        marginBottom: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center',
    },
    itemImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginTop: 16,
        resizeMode: 'cover'
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    itemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 16,
        width: '100%',
        marginTop: 20
    },
    deliveryTimeWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    deliveryTimeText: {
        fontSize: 12
    }
});