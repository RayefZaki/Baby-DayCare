import React from 'react'
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
  } from '@chakra-ui/react';
  import {Link} from "react-router-dom";
  import { useNavigate } from 'react-router-dom';
  import {useState,useEffect} from 'react'
  import axios from "axios";
  import "./child.css"

export default function RegisterKids() {

    let url = "https://636242497521369cd068dfd3.mockapi.io/ToDo"
    // const [names,setNames]=useState({email:"",password:""})
  
  
    const [FullName, setFullName] = useState("")
    const [Age, setAge] = useState("")
  
    const postData = () => {
      axios.post(url,{
          FullName,
          Age,
      }).then(res =>{
          console.log(res)
      })
     }
  
    const navigate = useNavigate()
  
    const LogIn =()=>{
      if(FullName.length<1 || Age.length<1){
          alert("Name and Age Child are required");
      }else{
       postData();
        // navigate('Get');
      }}

  return (
    <div className='Child'>
        <div className='parent'>
        <div className='anm'>
        <img src='https://cdn.discordapp.com/attachments/1032613167446102037/1038861978116038667/unknown.png'></img>
        </div>
        <div>
      <Flex   
  
  
  minH={'100vh'}
  align={'center'}
  justify={'center'}
  bg={useColorModeValue('gray.50', 'gray.800')}>
  <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
    <Stack align={'center'}>
      <Heading fontSize={'4xl'}>Sign in to your child</Heading>
      
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
         <Input onChange ={e =>{ setFullName(e.target.value)}} type="email" />

        </FormControl>
        <FormControl id="password">
          <FormLabel>Age Child</FormLabel>
          <Input onChange ={e =>{ setAge(e.target.value)}} type="password" />
        </FormControl>
        <Stack spacing={10}>
          {/* <Stack
            direction={{ base: 'column', sm: 'row' }}
            align={'start'}
            justify={'space-between'}>
            <Checkbox>Remember me</Checkbox>
            <Link color={'blue.400'}>Forgot password?</Link>
          </Stack> */}
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

</Flex>
    </div>
    </div>
    </div>
  )
}
