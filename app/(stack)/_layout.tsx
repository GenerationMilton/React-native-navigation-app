import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
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
