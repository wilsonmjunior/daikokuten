import {
  Box,
  Center,
  FlatList,
  Heading,
  Spacer,
} from 'native-base'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { Rent } from '../../components/Rent'
import { useLocales } from '../../../utils/locales.hook'

const data = [{ name: 'teste1' }, { name: 'teste2' } ]

function Separator() {
  return <Spacer height={4} />
}

export function VariableExpenses() {
  const { translate } = useLocales()

  return (
    <Box marginTop={getStatusBarHeight() + 10}>
      <Heading fontSize="xl" p="4" pb="3">
        {translate('save')}
      </Heading>

      <Center width="100%">
        <FlatList
          data={data}
          renderItem={({ item }) => <Rent />}
          width="100%"
          padding={4}
          ItemSeparatorComponent={Separator}
        />
      </Center>
    </Box>
  )
}
