import { Box, VStack } from "native-base";

import { Button } from "../../components/Forms/Button";
import { ScreenHeight } from "../../components/ScreenHeight";

export function Settings() {

  return (
    <ScreenHeight>
      <Box>
        <VStack space={4}>
          <Button
            title="Cadastrar cartão"
            variant="outline"
          />
          <Button
            title="Alterar senha"
            variant="outline"
          />
        </VStack>
      </Box>

      <Box flex={1} justifyContent="flex-end">
        <Button title="Sair" variant="outline" />
      </Box>
    </ScreenHeight>
  )
}
