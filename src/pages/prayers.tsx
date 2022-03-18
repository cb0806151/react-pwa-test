import { ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Flex,
  Center,
  Heading,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  VStack
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { useLocation } from 'wouter'

const prayers = (): ReactElement => {
  const [, setLocation] = useLocation()
  return (
    <Flex minH="100vh" color="black" direction={'column'}>
      <Flex h="full" w="100%" mb={'2rem'}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            variant="outline"
            icon={<HamburgerIcon />}
            color="black"
          />
          <MenuList defaultValue="prayerBook">
            <MenuItem
              value="home"
              icon={<ExternalLinkIcon />}
              onClick={(): void => setLocation('')}
            >
              Home
            </MenuItem>
            <MenuItem value="prayerBook" icon={<ExternalLinkIcon />}>
              Prayer Book
            </MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Heading>Prayer Book</Heading>
        <Spacer />
        <Center w="40px" h="40px">
          <Button colorScheme="blue" w="100%" size="lg" fontWeight="bold" fontSize="lg">
            +
          </Button>
        </Center>
      </Flex>
      <Center w="100%" flexGrow="1" alignItems={'start'}>
        <VStack w="100%">
          <Button colorScheme="blue" w="100%" size="lg">
            Our Father
          </Button>
          <Button colorScheme="blue" w="100%" size="lg">
            Act of Contrition
          </Button>
        </VStack>
      </Center>
    </Flex>
  )
}

export default prayers
