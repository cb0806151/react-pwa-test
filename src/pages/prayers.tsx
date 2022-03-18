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
  VStack,
  ModalOverlay,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  Text,
  ModalHeader,
  Input,
  Textarea
} from '@chakra-ui/react'
import { ReactElement, useState } from 'react'
import { useLocation } from 'wouter'

type Prayer = {
  title: string
  text: string
}

enum ModalFunctions {
  View,
  Create
}

const prayers = (): ReactElement => {
  const { View, Create } = ModalFunctions
  const [isOpen, toggleModal] = useState(false)
  const [, setLocation] = useLocation()
  const [modalFunction, setModalFunction] = useState(View)
  const [newPrayerTitle, setnewPrayerTitle] = useState('')
  const [newPrayerText, setnewPrayerText] = useState('')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [prayers, setPrayers] = useState([
    {
      title: 'Our Father',
      text: 'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'
    },
    {
      title: 'Act of Contrition',
      text: 'O my God, I am heartily sorry for having offended Thee, and I detest all my sins because of Thy just punishments, but most of all, because they offend Thee, my God, Who art all-good and deserving of all my love. I firmly resolve, with the help of Thy grace, to sin no more and to avoid in the near occasion of sin. Amen.'
    }
  ])

  const [selectedPrayer, setSelectedPrayer] = useState(prayers[0])

  const selectPrayer = (prayer: Prayer): void => {
    setModalFunction(View)
    setSelectedPrayer(prayer)
    toggleModal(true)
  }

  const createPrayer = (): void => {
    setModalFunction(Create)
    toggleModal(true)
  }

  const savePrayer = (): void => {
    setPrayers([
      ...prayers,
      {
        title: newPrayerTitle,
        text: newPrayerText
      }
    ])
    setnewPrayerTitle('')
    setnewPrayerText('')
    toggleModal(false)
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={(): void => toggleModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {modalFunction === View ? (
              selectedPrayer.title
            ) : (
              <Input
                placeholder="Prayer Title"
                size="lg"
                width={'75%'}
                onChange={(e): void => setnewPrayerTitle(e.target.value)}
              />
            )}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {modalFunction === View ? (
              <Text>{selectedPrayer.text}</Text>
            ) : (
              <Textarea
                placeholder="Prayer Text"
                size="lg"
                onChange={(e): void => setnewPrayerText(e.target.value)}
              />
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={(): void => toggleModal(false)}>
              Close
            </Button>
            {modalFunction === Create && (
              <Button colorScheme="green" mr={3} onClick={(): void => savePrayer()}>
                Save
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex minH="90vh" color="black" direction={'column'}>
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
            <Button
              colorScheme="blue"
              w="100%"
              size="lg"
              fontWeight="bold"
              fontSize="lg"
              onClick={(): void => createPrayer()}
            >
              +
            </Button>
          </Center>
        </Flex>
        <Center w="100%" flexGrow="1" alignItems={'start'}>
          <VStack w="100%">
            {prayers.map((prayer: Prayer, index: number) => (
              <Button
                colorScheme="blue"
                w="100%"
                size="lg"
                key={index}
                onClick={(): void => selectPrayer(prayer)}
              >
                {prayer.title}
              </Button>
            ))}
          </VStack>
        </Center>
      </Flex>
    </>
  )
}

export default prayers
