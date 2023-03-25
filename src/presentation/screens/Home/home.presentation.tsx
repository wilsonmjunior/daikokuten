import { VStack } from "native-base"
import { getStatusBarHeight } from "react-native-iphone-x-helper"

import { HeaderMain } from '../../components/HeaderMain';

interface HomePresentationProps {
  onCreate(): void;
}

export function HomePresentation({ onCreate }: HomePresentationProps) {
  return (
    <VStack p="4" marginTop={`${getStatusBarHeight()}px`}>
      <HeaderMain />
    </VStack>
  )
}
