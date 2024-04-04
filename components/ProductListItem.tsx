import { StyleSheet, Image } from "react-native";
import { Product } from "../app/(tabs)/types";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Pressable } from "react-native";
import Colors from "../constants/Colors";
import { Link } from "expo-router";
export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png";
type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link
      style={{ color: "white" }}
      href={`/(tabs)/menu/${product.id}`}
      asChild
    >
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name} </Text>
        <Text style={styles.subHead}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  subHead: {
    fontSize: 15,
    color: Colors.light.tint,
  },
  image: {
    alignItems: "center",
    width: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
    marginBottom: 10,
    flex: 1,
  },
});
