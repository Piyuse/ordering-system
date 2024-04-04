import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const ProductDetailesScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, backgroundColor: "#ccc" }}>
      <Text style={{ color: "#000" }}>Product deatil screen for id:{id}</Text>
    </View>
  );
};

export default ProductDetailesScreen;
