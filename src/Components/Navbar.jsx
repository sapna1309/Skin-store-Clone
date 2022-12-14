
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Image,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = () => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>

  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'white'} px={4} borderBottom={"2px solid black"}>
        <Flex height={"110px"} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack  spacing={8} alignItems={'center'}>
            <Box>
                <Image src={`https://i.ibb.co/tb29NvM/project-logo-1.png`} ml="50px" width="55%"/>
            </Box>
            {/* <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack> */}
            
          </HStack>
          <InputGroup w="35%" mr="200px">
          <Input   type="text" placeholder="search for a product or brand" />
          <InputRightElement width='4.5rem'>
         <Button h='2rem' size='sm'>
            <Image src={"https://img.icons8.com/material-sharp/24/null/search.png"} />
         </Button>
         </InputRightElement>
          </InputGroup>
          <Flex alignItems={'center'} justifyContent={'space-around'} mr="40px" width="20%" >
          <Menu>
           <HStack>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                'https://img.icons8.com/pastel-glyph/64/null/user-male-circle.png'
        
                  }

                />
              </MenuButton>
              <Text>Account</Text>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
              </HStack>
            </Menu>
            <Menu >
                <HStack>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                'https://img.icons8.com/external-creatype-outline-colourcreatype/64/null/external-basket-e-commerce-creatype-outline-colourcreatype.png'
        
                  }

                />
              </MenuButton>
              <Text>Cart</Text>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
              </HStack>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}