import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="home"
        options={{
          title: "Inicio",
        }}
      />
      <Stack.Screen
        name="products"
        options={{
          title: "Productos",
          animation: "fade_from_bottom",
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          title: "Perfil",
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          title: "Ajustes Pantalla",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
