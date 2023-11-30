import { StyleSheet, View, Text } from "react-native";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

export default function Cart() {
    const { itemTotal } = useContext(GlobalContext);
    const [itemCount, setItemCount] = itemTotal

    return (
        <View style={styles.container}>
            <Text>Total Item: {itemCount}</Text>
            <Text>View Inventory</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 50,
        backgroundColor: '#ffc108',
        position: 'absolute',
        bottom: '2%',
        alignSelf: 'center',
        zIndex: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})