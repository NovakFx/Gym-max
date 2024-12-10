import Class from './Component/src/Class/Class';
import Home from './Component/src/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Trainers from './Component/src/Trainers/Trainers';
import Contact from './Component/src/Contact/Contact';
import Nav from './Component/src/NavBar/Nav';
import Login from './Component/src/NavBar/AccountData/Logs/Login';
import SignUp from './Component/src/NavBar/AccountData/SignUp';
import LogsData from './Component/src/NavBar/AccountData/Logs/LogsData';
import Navbar2 from './Component/src/NavBar/Navbar2';

function App() {
  return (
   <>

      <Routes>
        <Route path='/' element={
          <>
          <Nav />
          <Home />
          </>
          } />
        <Route path='/Class' element={
          <>
          <Navbar2 />
          <Class />
          </>
      } />
        <Route path='/Trainers' element={<>
          <Navbar2 />
          <Trainers />
          </>} />
        <Route path='/Contact' element={<>
          <Navbar2 />
          <Contact />
          </>} />
        <Route path='/Login' element={<>
          <Nav />
          <Login />
          </>} />
        <Route path='/SignUp' element={<>
          <Nav />
          <SignUp />
          </>} />
        <Route path='LogsData' element={<>
          <Nav />
          <LogsData />
          </>}/>  
      </Routes>
    
      </>

  );
}

export default App;
