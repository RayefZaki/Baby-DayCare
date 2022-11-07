import './App.css';
import Navbar from './Components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './Components/Footer'
import Create from './Components/Create';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">

      {/* <h2>hjhjhjh</h2>
      <Create></Create> */}
      <Search />

    </div>

  );
}

export default App;
