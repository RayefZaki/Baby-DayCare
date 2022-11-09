import React,{useState , useEffect} from "react";
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

import "./Search.css";


import "./Search.css"
import { Link, useNavigate } from "react-router-dom";

import axios, { Axios } from "axios";
export default function Search(){
           
            
            const [arr, setArr] = useState([]);
            const [search, setSearch] = useState('');
            const navigate = useNavigate()
            
            useEffect(() => {
               axios.get(`https://6362424c7521369cd068e027.mockapi.io/ToDO`).then((res)=>{
                console.log(res.data)
                setArr(res.data)

               })
            },[]);
           
           
      return(

        <div id="search1">

        <div className="search">
            {}
            <Center>
             
            <input className="input" color={"white"}
             placeholder ="search" 
             onChange={(e) => setSearch(e.target.value)} type={"text"}>
                
             </input>
             <div className="one"></div>
             <div className="two"></div>
             {/* </Input><br></br> */}





             </Center>
        
        
        
             <div className="card-saerch">
              <div className="parent">
        {arr.filter((ele) => ele.course.toLowerCase().includes(search) ||
           ele.course.toUpperCase().includes(search)).map((ele) => (
           
            
            <div className="h"> 
            <Center py={6} >
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
                    "https://cdn.discordapp.com/attachments/1032613167446102037/1038783659949432892/Babay_daycare.jpg"
                  }
                />
              </Flex >
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
                  textAlign={'center'} noOfLines={"5"}
                  color={('gray.700', 'gray.400')}
                  px={3}>
                  {ele.shortDesc}
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
                    onClick={()=>navigate("/Signup")}
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
          </div>
          
              )
              
              )}
          </div>
        </div>
        </div>
       



         </div>
      )
}
