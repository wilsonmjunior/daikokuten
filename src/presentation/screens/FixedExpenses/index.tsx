import {
  FlatList,
  Heading,
  Spacer,
} from 'native-base'

import { Rent } from '../../components/Rent'
import { ScreenHeight } from '../../components/ScreenHeight'
import { useLocales } from '../../../utils/locales.hook'

const data = [{ name: 'teste1' }, { name: 'teste2' } ]

export function FixedExpenses() {
  const { translate } = useLocales()

  return (
    <ScreenHeight>
      <Heading fontSize="xl" px="4">
        {translate('save')}
      </Heading>

      <FlatList
        data={data}
        renderItem={({ item }) => <Rent />}
        width="100%"
        padding={4}
        ItemSeparatorComponent={() => <Spacer height={4} />}
      />
    </ScreenHeight>
  )
}
