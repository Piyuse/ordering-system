import { useLocalSearchParams, Stack } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import products from "../../../assets/data/products";
const sizes = ["S", "M", "L", "XL"];

const ProductDetailesScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() == id);
  return (
    <View style={{ flex: 1, backgroundColor: "black", padding: 10 }}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image source={{ uri: product?.image }} style={styles.image} />
      <Text style={{ color: "white" }}>Select Size</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        {sizes.map((size) => (
          <View
            style={{
              backgroundColor: "grey",
              width: 50,
              aspectRatio: 1,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }} key={size}>
              {size}
            </Text>
          </View>
        ))}
      </View>
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
        ${product?.price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {},
});
export default ProductDetailesScreen;
