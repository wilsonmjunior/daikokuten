import { Feather } from "@expo/vector-icons";
import { HStack, IconButton } from "native-base";

export function HeaderMain() {
  return (
    <HStack justifyContent="space-between">
      <IconButton
        name="profile"
        icon={<Feather name="user" size={24} />}
        borderRadius="full"
        bg="gray.200"
        onPress={() => console.warn("Navigate to profile")}
      />
      <IconButton
        name="notifications"
        icon={<Feather name="bell" size={24} />}
        borderRadius="full"
        onPress={() => console.warn("Navigate to notifications")}
      />
    </HStack>
  )
}
