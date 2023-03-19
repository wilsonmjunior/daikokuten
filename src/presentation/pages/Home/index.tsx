import { Center, VStack } from "native-base";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export function Home() {
  return (
    <VStack space={4} alignItems="center" marginTop={getStatusBarHeight()}>
      <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3} />
      <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
      <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
    </VStack>
  )
}
