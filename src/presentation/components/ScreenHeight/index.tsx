import { ReactNode } from 'react';
import { VStack } from 'native-base';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

interface ScreenHeightProps {
  children: ReactNode
}

export function ScreenHeight({ children }: ScreenHeightProps) {
  return (
    <VStack
      p={4}
      marginTop={getStatusBarHeight() + 8}
      flex={1}
    >
      {children}
    </VStack>
  )
}
