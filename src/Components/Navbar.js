// import { ReactNode } from 'react';

// import {
//   Box,
//   Flex,
//   Avatar,
//   HStack,
//   Link,
//   IconButton,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// const Links = ['Home', 'Classes', 'Our team'];

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('yellow.200', 'yellow.700'),
//     }}
//     href={'www.google.com'}>
//     {children}
//   </Link>
// );

// export default function Simple() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
//         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//           <IconButton
//             size={'md'}
//             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//             aria-label={'Open Menu'}
//             display={{ md: 'none' }}
//             onClick={isOpen ? onClose : onOpen}
//           />
//           <HStack spacing={8} alignItems={'center'}>
//             <Box> <img width={80} src='https://cdn.discordapp.com/attachments/1032613167446102037/1038861978116038667/unknown.png'></img></Box>
//             <HStack
//               as={'nav'}
//               spacing={4}
//               display={{ base: 'none', md: 'flex' }}>
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </HStack>
//           </HStack>
//           <Flex alignItems={'center'}>
//             <Menu>
//               <MenuButton
//                 as={Button}
//                 rounded={'full'}
//                 variant={'link'}
//                 cursor={'pointer'}
//                 minW={0}>
//                 <Avatar
//                   size={'sm'}
//                   src={
//                     'https://cdn.discordapp.com/attachments/1032613167446102037/1038861978116038667/unknown.png'
//                   }
//                 />
//               </MenuButton>
//               <MenuList>
//                 <MenuItem > login 1</MenuItem>
//                 <MenuItem>sing in 2</MenuItem>
//                 <MenuDivider />
//                 <MenuItem>Link 3</MenuItem>
//               </MenuList>
//             </Menu>
//           </Flex>
//         </Flex>

//       </Box>

  
//     </>
//   );
// }