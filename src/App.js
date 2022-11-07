import './App.css';
import Navbar from './Components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './Components/Footer'
import Create from './Components/Create';
import Signup from './Components/Signup'
import Login from './Components/Login'

function App() {
  return (
    <div className="App">
<Navbar/>
      {/* <Create></Create> */}
{/* <Signup/> */}
<Login/>

     

    </div>

  );
}

export default App;
