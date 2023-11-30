import { useContext, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TextInput, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BasicLayout from "../layouts/BasicLayout";
import { GlobalContext } from "../context/GlobalContext";
import { itemData, imgUri } from "../constants/General";

export default function Category() {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const { itemTotal } = useContext(GlobalContext);
  const [itemCount, setItemCount] = itemTotal

  const handleAddItem = () => {
    if (itemName && quantity) {
      setItemCount(prev => prev + 1);
      setItemName('');
      setQuantity('');
    }
    else {
      alert('Invalid values.')
    }
  };

  const navigation = useNavigation();

  const ItemCard = ({ id, itemName, itemImage, navTo, quantity, extraData }) => {
    return (
      <TouchableOpacity key={id} style={styles.cardContainer} onPress={() => navigation.navigate(navTo, { itemName, quantity, itmImg: itemImage, ind: id })}>
        <Image source={itemImage} style={styles.itemImage} />
        <Text style={styles.itemName}>{itemName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <BasicLayout>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Create Your Inventory</Text>
      </View>

      <ImageBackground
        source={{ uri: imgUri }}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Item Name"
            value={itemName}
            onChangeText={(text) => setItemName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Quantity"
            value={quantity}
            onChangeText={(text) => setQuantity(text)}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
            <Text style={styles.buttonText}>Add Item</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Choose By Categories</Text>

        <View style={styles.itemContainer}>
          {itemData.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </View>
      </View>
    </BasicLayout>
  );
}

const styles = StyleSheet.create({
  titleWrapper: {
    backgroundColor: '#fff',
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  backgroundImage: {
    resizeMode: 'cover',
    paddingVertical: 50
  },
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  addButton: {
    backgroundColor: '#ffc108',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  cardContainer: {
    width: 100,
    height: 100,
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
    fontSize: 12,
    marginTop: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  categoryContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  }
});