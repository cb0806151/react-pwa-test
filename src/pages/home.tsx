import { Flex, Center, Heading, VStack, Button } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { Link } from 'wouter'
import InstallPWA from '../components/install-btn'

const home = (): ReactElement => {
  return (
    <Flex minH="100vh" color="black" direction={'column'}>
      <Center h="full" w="100%">
        <Heading>SaintMaker</Heading>
      </Center>
      <Center w="100%" flexGrow="1">
        <VStack>
          <Link href="/prayers">
            <Button colorScheme="blue">Continue</Button>
          </Link>
          <InstallPWA />
        </VStack>
      </Center>
    </Flex>
  )
}

export default home
