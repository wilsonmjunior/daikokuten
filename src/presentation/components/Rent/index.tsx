import { Avatar, Box, Center, Flex, Heading, HStack, Text, VStack } from 'native-base'

export function Rent() {
  return (
    <Box
      bg="blueGray.50"
      shadow={2}
      w="100%"
      minH={10}
      p={2}
    >
      <VStack space={2} px={2}>
        <Flex
          direction='row'
          justify="space-between"
          alignItems="center"
        >
          <Box>
            <Avatar
              size="xs"
              shadow={2}
              source={{
                uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }}
            />
          </Box>

          <Box>
            <Text>Cartão Brasil</Text>
          </Box>
        </Flex>

        <Flex>
          <Heading>Medical</Heading>
        </Flex>

        <Flex>
          <HStack space={2}>
            <Center w="8" h="2" bg="green.600" rounded="md" shadow={3} />
            <Center w="8" h="2" bg="green.600" rounded="md" shadow={3} />
            <Center w="8" h="2" bg="green.600" rounded="md" shadow={3} />
            <Center w="8" h="2" bg="green.600" rounded="md" shadow={3} />
            <Center w="8" h="2" bg="gray.100" rounded="md" shadow={3} />
            <Center w="8" h="2" bg="gray.100" rounded="md" shadow={3} />
            <Center w="8" h="2" bg="gray.100" rounded="md" shadow={3} />
            <Center w="8" h="2" bg="gray.100" rounded="md" shadow={3} />
          </HStack>
        </Flex>

        <Flex direction='row' justify="space-between">
          <Text fontSize={12}>Progresso</Text>
          <Text fontSize={12}>4/8</Text>
        </Flex>
      </VStack>
    </Box>
  )
}
