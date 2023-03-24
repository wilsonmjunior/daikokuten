import { Center, VStack } from "native-base"
import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { Button } from "../../components/Forms/Button"

interface HomePresentationProps {
  onCreate(): void;
}

export function HomePresentation({ onCreate }: HomePresentationProps) {
  return (
    <VStack space={4} alignItems="center" marginTop={getStatusBarHeight()}>
      <Center w="64" h="20" rounded="md">
        <Button
          title="Adicionar"
          onPress={onCreate}
        />
      </Center>
    </VStack>
  )
}
