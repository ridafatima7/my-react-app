import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup'
import Blogs from './Components/Blogs';
import Navbar from './Components/Navbar'
import Tutorial from './Components/Tutorial'
import Todo from './Components/Todo'
import  Project from './Components/Project'
import ProHero from './Components/ProHero';
import Form from './Components/PractiseForm'
import Cnav from './Components/Cnav';
import Cheader from './Components/Cheader';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      {/* <Navbar /> */}
      <Cnav />
      <Cheader />
      {/* <Form /> */}
      {/* <Project />
      <ProHero /> */}
      {/* <Tutorial /> */}
      {/* <Todo /> */}
      {/* <Blogs/> */}
    </div>
  );
}

export default App;
