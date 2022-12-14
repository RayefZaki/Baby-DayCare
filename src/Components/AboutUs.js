import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import '../App.css'
  export default function SplitScreen() {
    return (
      <div id='About'>
      
          <Stack spacing={6} width={'250'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                What the 
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
              Tuwaiq Daycare ?
              </Text>{' '}
            </Heading>
            <Text width={"300px"} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Tuwaiq Academy was established for Tuwaiq employees and trainees, to provide their children with a safe and educational environment
            </Text>
           
       
       
      </Stack>
      <Image className='nnn'
            alt={'Login Image'}
            src={

"https://cdn.discordapp.com/attachments/1032613167446102037/1039615540492243044/pexels-yan-krukov-8612967.jpg"                //   'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }></Image>
      </div>
    );
  }