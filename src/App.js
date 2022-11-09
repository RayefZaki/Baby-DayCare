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
import RegisterKids from './Components/RegisterKids';
import IslamicValues from './Components/Descriptions/IslamicValues';
import Router1 from './Components/Router1';
import Contrast from './Components/Descriptions/Contrast';
import DiaperTraining from './Components/Descriptions/diaperTraining';
import FinancialCulture from './Components/Descriptions/FinancialCulture'
import ReadDelete from './Components/ReadDelete';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      {/* <ReadDelete></ReadDelete> */}

      {/* <DiaperTraining /> */}
      {/* <FinancialCulture /> */}

<Navbar/>
{/* <Singandlog2/> */}
{/* <Search /> */}
{/* <Signup/> */}
{/* <Login/> */}
{/* <Footer/> */}
      {/* <Home></Home> */}

      {/* <Welcom/> */}
{/* <Link to="Login" spy={true} smooth={true} offset={50} duration={500} >
  Chakra Design system <ExternalLinkIcon mx='2px' />
</Link> */}
{/* <Contrast /> */}

{/* <Navbar/> */}
{/* <Welcom /> */}
{/* <Singandlog2/> */}
{/* <Search /> */}
{/* <Signup/> */}
{/* <Login/> */}
{/* <Footer/> */}
     {/* <RegisterKids /> */}
{/* <IslamicValues></IslamicValues> */}
<Router1/>
    </div>


      
      // <Welcom/>

   
      // <Welcom/>

 

  );
}

export default App;
