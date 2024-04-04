import products from "../../assets/data/products";
import { View, FlatList } from "react-native";
import ProductListItem from "../../components/ProductListItem";

export default function MenuScreen() {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 20, padding: 10 }}
      />
    </View>
  );
}
