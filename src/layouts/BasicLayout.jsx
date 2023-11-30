import { ScrollView } from "react-native";
import Cart from "../components/molecules/Cart";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export default function BasicLayout({ children }) {
    const { itemTotal } = useContext(GlobalContext);
    const [itemCount, setItemCount] = itemTotal

    return (
        <>
            {
                itemCount !== 0 ?
                    <Cart />
                    : null
            }
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                {children}
            </ScrollView>
        </>
    )
}