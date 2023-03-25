import { Feather } from "@expo/vector-icons";
import { HStack, IconButton, useTheme } from "native-base";

export function HeaderMain() {
  const theme = useTheme();

  return (
    <HStack justifyContent="space-between">
      <IconButton
        name="profile"
        icon={<Feather name="user" size={24} color={theme.colors.gray[600]} />}
        borderRadius="full"
        bg="gray.200"
        onPress={() => console.warn("Navigate to profile")}
      />
      <IconButton
        fontSize={40}
        name="notifications"
        icon={<Feather name="bell" size={24} color={theme.colors.gray[600]} />}
        borderRadius="full"
        onPress={() => console.warn("Navigate to notifications")}
      />
    </HStack>
  )
}
