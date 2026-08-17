import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { products } from "@/store/products-store";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();

  const navigation = useNavigation();
  const product = products.find((p) => p.id == id);

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? 'Producto',
    });
  }, [product])


  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="px-2 mt-2">
      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text className="">{product.description}</Text>
      <Text className="font-work-black">{product.price}</Text>
      {product.image && (
        <Image
          source={product.image}
          style={{ width: "100%", height: 200, marginTop: 8 }}
        />
      )}
    </View>
  );
};

export default ProductScreen;
