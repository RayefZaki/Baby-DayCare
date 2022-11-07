import './App.css';
import Navbar from './Components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './Components/Footer'
import Create from './Components/Create';

import Search from './Components/Search';
import Siginandlogin from './Components/Siginandlogin';
import Signup from './Components/Signup'
import Login from './Components/Login'

function App() {
  return (
    <div className="App">
<Navbar/>

<Siginandlogin/>

<Search />
<Signup/>
<Login/>

     

    </div>

  );
}

export default App;
