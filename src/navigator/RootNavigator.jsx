import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import Category from '../screens/Category';
import CategoryDetails from '../screens/CategoryDetails';


const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Inventory" component={Category} />
                <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}