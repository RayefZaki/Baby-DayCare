import React,{useState} from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Input,
  Button,
  Badge,
  Flex,
} from '@chakra-ui/react';
import "./Search.css"
import { Link } from "react-router-dom";
export default function Search(){

            let arr = [
              {
                id:"001",
                course: "JavaScript",
                disc:"skalsaa skldmckas sal;mc;  ls;mcl;asm sl;ml; slml;sm l;msl;ml;sdml;",
                img:"https://cdn.discordapp.com/attachments/1032613167446102037/1038783659752292422/baby.jpg",
              },
              {
                id:"002",
                disc:"skalsaa skldmckas sal;mc;   ls;mcl;asm sl;ml; slml;sm l;msl;ml;sdml;",
                course: "Java",
                img:"https://cdn.discordapp.com/attachments/1032613167446102037/1038783659752292422/baby.jpg",
              },
              {
                id:"003",
                course: "PHP",
                disc:"skalsaa skldmckas sal;mc;   ls;mcl;asm sl;ml; slml;sm l;msl;ml;sdml;",
                img:"https://cdn.discordapp.com/attachments/1032613167446102037/1038783659752292422/baby.jpg",
              },
             
            ]

            const [search, setSearch] = useState("");

           

      return(
        <div className="search">
            <Center>
            <Input 
             placeholder="Search" width={"100"} 
             marginTop={"5"}
             onChange={(e) => setSearch(e.target.value)} type={"text"}>
             </Input>
             </Center>
        
        <div className="card">
          
        {arr.filter((ele) => ele.course.toLowerCase().includes(search) ||
           ele.course.toUpperCase().includes(search)).map((ele) => (

            <Center py={6}>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              w={{ sm: '100%', md: '540px' }}
              height={{ sm: '476px', md: '20rem' }}
              direction={{ base: 'column', md: 'row' }}
              bg={('white', 'gray.900')}
              boxShadow={'2xl'}
              padding={4}>
              <Flex flex={1} bg="blue.200">
                <Image
                  objectFit="cover"
                  boxSize="100%"
                  src={
                    ele.img
                  }
                />
              </Flex>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}>
                <Heading color={"white"} fontSize={'2xl'} fontFamily={'body'}>
                 {ele.course}
                </Heading>
                
                <Text
                  textAlign={'center'}
                  color={('gray.700', 'gray.400')}
                  px={3}>
                  {ele.disc}
                </Text>
               
      
                <Stack
                  width={'100%'}
                  mt={'2rem'}
                  direction={'row'}
                  padding={2}
                  justifyContent={'space-between'}
                  alignItems={'center'}>
                  <Button
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    _focus={{
                      bg: 'gray.200',
                    }}>
                    Discrption
                  </Button>
                  <Button
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                      bg: 'blue.500',
                    }}
                    _focus={{
                      bg: 'blue.500',
                    }}>
                    Join
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Center>
        
          
              )
              
              )}
          
        </div>
        </div>
       




      )
}
