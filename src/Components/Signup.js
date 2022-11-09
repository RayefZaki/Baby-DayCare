import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Router1 from './Router1'
import Login from './Login'
import Navbarlogin from './Navbarlogin'


export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  let url = "https://636242497521369cd068dfd3.mockapi.io/ToDo"
  // const [names,setNames]=useState({email:"",password:""})


  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Fname, setFname] = useState("")
  const [Lname, setLname] = useState("")




  const postData = () => {
    axios.post(url,{
        Email,
        Password,
        Fname,
        Lname,
    }).then(res =>{
        console.log(res)
    })
   }

  const navigate = useNavigate()

  const LogIn =()=>{
    if(Email.length<1 || Password.length<1 || Fname.length<1) {
        alert("Please fill All");

    }else{
      postData();
      // navigate("/Home")

      
      // navigate('Get');
    }}

  return (<div>
    <Navbarlogin/>

    <Flex
  

      
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bgImage="url('https://cdn.discordapp.com/attachments/1032613167446102037/1039822659845898240/pexels-photo-8923982.jpeg')"
      // backgroundRepeat="no-repeat"
      // w ="100%"
      bgSize="cover"
      backgroundPosition="center"

      
      // 🆂🅸🅶🅽 🆄🅿
      >

      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'6xl'} textAlign={'center'}>
          <Box color={'#f06525'} fontSize={'6xl'} display={"flex"}> 
            <Text color={'#51b59f'}>🆂</Text>
            <Text color={'#ffde59'}>🅸</Text>
            <Text color={'#5271ff'}>🅶</Text>
            <Text>  🅽</Text>
            <Text color={'#ffde59'}>🆄</Text>
            <Text color={'#51b59f'}>🅿</Text>

             </Box>
      
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input onChange ={e =>{ setFname(e.target.value)}} type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input onChange ={e =>{ setLname(e.target.value)}} type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input onChange ={e =>{ setEmail(e.target.value)}} type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input  onChange ={e =>{ setPassword(e.target.value)}} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button 
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button onClick={() => LogIn()}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
              <Link  color={'blue.400'}><button onClick={()=>navigate("/Login")} type="">Log in</button> </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </div>

   ) ;
}