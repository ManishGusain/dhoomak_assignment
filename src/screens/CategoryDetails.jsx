import { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import CategoryHeader from '../components/molecules/CategoryHeader';
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../context/GlobalContext';
import { selectedCategoryData, imgUri, categories } from '../constants/General';

export default function Category({ route }) {
  const { itemName, quantity, itmImg, ind } = route.params;
  const [selectedCategory, setSelectedCategory] = useState(1);
  const navigation = useNavigation();
  const { itemTotal } = useContext(GlobalContext);
  const [itemCount, setItemCount] = itemTotal

  useEffect(() => {
    setSelectedCategory(ind);
  }, [route]);

  const increaseQuantity = () => {
    setItemCount(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (itemCount > 0) {
      setItemCount(prev => prev - 1);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        selectedCategory === item.id && styles.selectedCategoryItem,
      ]}
      onPress={() => handleCategoryPress(item.id)}
    >
      <Image source={item.imageUri} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderSelectedCategoryItem = ({ item }) => (
    <View style={styles.itemCardContainer}>
      <View style={styles.itemCardImgWrapper}>
        <Image source={{ uri: item.itemImage }} style={styles.itemCardImg} />
      </View>

      <View style={styles.itemCardData}>
        <Text style={styles.itemCardTitle}>{item.itemName}</Text>
        <Text style={styles.itemCardSubTitle}>{item.subTitle}</Text>


        <View style={styles.itemCardActionWrapper}>
          <Text style={styles.itemCardPrice}>₹ {item.price}/kg</Text>

          <TouchableOpacity style={styles.itemCardBtn}>
            <Text style={styles.itemCardBtnText}>ADD</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );

  const handleCategoryPress = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <>
      <CategoryHeader
        onBackPress={() => navigation.goBack()}
        imageSource={itmImg}
        headerTitle={itemName}
        number={quantity}
      />
      <View style={styles.container}>
        <View style={styles.categoryList}>
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            extraData={selectedCategory}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.categoryData}>
          {selectedCategoryData && (
            <FlatList
              data={selectedCategoryData[selectedCategory]}
              renderItem={renderSelectedCategoryItem}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1
  },
  categoryList: {
    width: '25%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  categoryItem: {
    alignItems: 'center',
    padding: 10,
    borderColor: '#ccc',
  },
  selectedCategoryItem: {
    backgroundColor: '#ffc108'
  },
  categoryImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 10,
  },
  categoryName: {
    fontSize: 12,
  },
  categoryData: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    marginLeft: 10,
    borderRadius: 10,
  },
  itemCardContainer: {
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    justifyContent: 'space-between',
    width: '50%',
    padding: 5,
  },
  itemCardImgWrapper: {
    alignItems: 'center',
  },
  itemCardActionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  itemCardData: {
    flex: 1,
  },
  itemCardImg: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  itemCardTitle: {
    fontSize: 11,
  },
  itemCardSubTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemCardQuantity: {
    fontSize: 11,
  },
  itemCardPrice: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemCardBtn: {
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderColor: 'green',
    borderWidth: 1,
  },
  itemCardBtnText: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    padding: 5
  }
});