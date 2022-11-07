import './App.css';
import Navbar from './Components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './Components/Footer'
import Create from './Components/Create';
import Search from './Components/Search';
import Signup from './Components/Signup'
import Login from './Components/Login'
import Singandlog2 from './Components/Singandlog2';
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Welcom from './Components/Welcom';
function App() {
  return (
    <div className="App">

{/* 
<Navbar/>
<Singandlog2/>
<Search />
<Signup/>
<Login/>
<Footer/>
      */}
      <Welcom/>

    </div>

  );
}

export default App;
