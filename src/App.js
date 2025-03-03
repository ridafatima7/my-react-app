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
import Rnav from './Components/Rnav';
import Bnavbar from './Components/Bnavbar';
import Bproject from './Components/Bproject';
import Products from './Components/Products';
import Webnav from './Components/Webnav';
import Website from './Components/Website';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes,Router,Switch, Redirect } from "react-router-dom";

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
   <Routes>
      <Route path="/about" render={(props) => <Bproject {...props} />} />
      <Route path="/FAQs" render={(props) => <Cheader {...props} />} />
      </Routes>
);
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      {/* <Navbar /> */}
      {/* <Bnavbar /> */}
      {/* <Bproject /> */}
      {/* <Products /> */}
      
      <Webnav />
      <Website />
      {/* <Cnav />
      <Cheader /> */}
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
