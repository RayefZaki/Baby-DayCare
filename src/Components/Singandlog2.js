import { Button } from "@chakra-ui/react"
import React from 'react'

function Singandlog2() {
  return ( <div className="parent-btn2">
  <div className="btn2">
        <Button
      marginRight={'2'}
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
                    bg: 'blue.500',}}
          >
          Sign In
        </Button>
        <Button
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
bg: 'blue.500',}}
          >
          login In
        </Button>
        </div>
  </div>
  )
}

export default Singandlog2