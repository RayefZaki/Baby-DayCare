import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image
  } from '@chakra-ui/react';
  import {Link} from "react-router-dom";
  import { useNavigate } from 'react-router-dom';
  import React,{useState,useEffect} from 'react'
  import axios from "axios";
  import Navbarlogin from './Navbarlogin'

  
  
  export default function Register () {
    

    
  
  
    const [FullName, setFullName] = useState("")
    const [Age, setAge] = useState("")
  
    
  
    const navigate = useNavigate()
  
    const LogIn =()=>{
      if(FullName.length<1 || Age.length<1){
          alert("Name and Age Child are required");
      }else{
       
        navigate('/Home');
      }}
    
    return (

   
      
      
        
      

        <div id='login'> 
           <Navbarlogin/>




      <Flex   
     

  
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        backgroundRepeat="no-repeat"
        justifyContent="space-around"
        flexWrap= "wrap" 
        bg ="#fffff2"

        // bg={useColorModeValue('gray.50', 'gray.800')}
        
        >

{/*           
          <Box
          bg='tomato'
                  bgImage="url('https://cdn.discordapp.com/attachments/1032613167446102037/1039860005542821928/Cute_Colorful_Baby_Daycare_Center_Logo_1.png')"
                 
     > 
      <Stack 
      bg='tomato'
      >
                  </Stack>
     </Box>
           */}

         <Box
         >
        <Image 
        h = "400"
        width = "400px"

        src = {'https://cdn.discordapp.com/attachments/1032613167446102037/1039860005542821928/Cute_Colorful_Baby_Daycare_Center_Logo_1.png'}/>
          </Box>

         {/* <Box display="flex" alignItems="left" justifyContent="space-between"> */}
<Box>
  

        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
          
          <Box color={'#f06525'} fontSize={'6xl'} display={"flex"}> 
            <Text color={'#51b59f'}>🆂</Text>
            <Text color={'#ffde59'}>🅸</Text>
            <Text color={'#5271ff'}>🅶</Text>
            <Text>  🅽</Text>
            <Text color={'#ffde59'}>🆄</Text>
            <Text color={'#51b59f'}>🅿</Text>

             </Box>

            <Text fontSize={'lg'} color={'gray.600'}>
            
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Full Name Child</FormLabel>
                {/* <Input value={names.email} onChange={e=>{setNames({ ...names,email:e.target.value})}} type="email" /> */}
               <Input onChange ={e =>{ setFullName(e.target.value)}} type="text" />
  
              </FormControl>
              <FormControl id="password">
                <FormLabel>Age Child</FormLabel>
                <Input onChange ={e =>{ setAge(e.target.value)}} type="text" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Others note</FormLabel>
                <Input onChange ={e =>{ setAge(e.target.value)}} type="text" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  
                  <Link color={'blue.400'}></Link>
                </Stack>
                <Button onClick={() => LogIn()}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        {/* </Box> */}
        </Box>
  
      </Flex>
       </div>
    );
  }