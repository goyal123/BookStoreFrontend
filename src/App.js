import logo from './logo.svg';
import './App.css';
import Loginpage from './Pages/Login/Loginpage';
import Signup from './Pages/Signup/Signup';
import Dashboard from './Pages/Dashboard/Dashboard';
import Header from './Components/Header';
import Bookmenu from './Components/Bookmenu';
import Routerone from './Pages/Router/Router';


function App() {
  return (
    <>
    <div className="App">
         {/* <Loginpage/> */}
       {/* { <Signup/> } */}
       {/* <Dashboard/> */}
       {/* <Header/>
       <Bookmenu/> */}
       <Routerone/>
    </div>
    
    </>
  );
}

export default App;
