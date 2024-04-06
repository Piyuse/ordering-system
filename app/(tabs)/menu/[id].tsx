import { useLocalSearchParams, Stack } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import products from "../../../assets/data/products";
import { useState } from "react";
import Button from "../../../components/Button";
const sizes = ["S", "M", "L", "XL"];

const ProductDetailesScreen = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState("XL");
  const product = products.find((p) => p.id.toString() == id);
  const addToCart = () => {
    console.warn("Added to cart successfully");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "black", padding: 10 }}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image source={{ uri: product?.image }} style={styles.image} />
      <Text style={{ color: "white" }}>Select Size</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelectedSize(size);
            }}
            style={{
              width: 50,
              aspectRatio: 1,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: selectedSize == size ? "white" : "grey",
            }}
          >
            <Text
              style={{
                marginVertical: 10,
                color: selectedSize == size ? "black" : "white",
              }}
              key={size}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 18,
          marginTop: "auto",
        }}
      >
        ${product?.price}
      </Text>
      <Button onPress={addToCart} text="Add to cart" />
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
