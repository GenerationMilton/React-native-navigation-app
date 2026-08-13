import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/tabs/(stack)/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          onPress={() => router.push("/tabs/profile")}
          className="mb-2"
          color="secondary"
        >
          Profile
        </CustomButton>

        <CustomButton
          onPress={() => router.push("/tabs/settings")}
          className="mb-2"
          color="tertiary"
        >
          Ajustes
        </CustomButton>

        <Link href="/tabs/products" asChild>
          <CustomButton variant="text-only" className="mb-10" color="primary">
            Productos
          </CustomButton>
        </Link>

        {/* <Link className="mb-5" href="/products">
          Products{" "}
        </Link>
        <Link className="mb-5" href="/profile">
          Perfil{" "}
        </Link>
        <Link className="mb-5" href="/settings">
          Ajustes{" "}
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
