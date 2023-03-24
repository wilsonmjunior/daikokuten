import {
  Box,
  FlatList,
  Heading,
  Spacer,
} from 'native-base'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { Rent } from '../../components/Rent'
import { useLocales } from '../../../hooks/locales'

const data = [{ name: 'teste1' }, { name: 'teste2' } ]

function Separator() {
  return <Spacer height={4} />
}

export function FixedExpenses() {
  const { translate } = useLocales()

  return (
    <Box marginTop={getStatusBarHeight() + 8} flex={1}>
      <Heading fontSize="xl" px="4">
        {translate('save')}
      </Heading>

      <FlatList
        data={data}
        renderItem={({ item }) => <Rent />}
        width="100%"
        padding={4}
        ItemSeparatorComponent={Separator}
      />
    </Box>
  )
}
