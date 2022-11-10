import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Simple() {
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
'https://cdn.discordapp.com/attachments/1032613167446102037/1039935828308262942/pexels-alena-darmel-8164742.jpg'              }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                 Islamic Values
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
               Because we pledged to be a safe soil and a good seed, we were keen to implement the Islamic values program
         And instilling values and love in the hearts of our children
              </Text>
              <Text fontSize={'lg'}>
              <h3>The importance of Islamic values</h3>
      <br></br>
      <p>Because children are our foundation
         <br/>It is our duty to prepare them for the future and teach them the importance of values</p>
         <br/>
         <h3>to inculcate values</h3>
         <br/>
         <ol>
          <li>Don't ignore disrespectful situations</li>
          <li>Teach your child social skills</li>
          <li>Reward for good behavior</li>
          <li>Understand your child's feelings well</li>
         </ol>
         <br/>
         <h3>When your child follows this program, he will result in:</h3>
         <p>A child who is respectful in dealing, has self-esteem and behaves in a polite manner</p>
         <br/>
         <h3>Concepts</h3>
         <ol>
          <li>respect my school</li>
          <li>Do not meddle in the privacy of others</li>
          <li>Talk kindly to others</li>
          <li>respect my family</li>
          <li>respect my friends</li>
          <li>respect my place</li>
          <li>Respect the elderly</li>
          <li>Help others as much as you can</li>
          <li>I apologize for my mistakes</li>
          <li>How do I value myself</li>
         </ol>


              </Text>
            </VStack>
            
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('blue.400', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
                <Link to='/Register'>ADD Course</Link>                
                
                 </Button>
                 <Link to="/Home">
          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('blue.400', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
                 Back     
                    </Button>
                    </Link> 
          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <Text>M.A.R.N Team Students In Tuwaiq Acadimy</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}