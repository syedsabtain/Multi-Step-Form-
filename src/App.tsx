import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
  Routes
} from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";

import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";
import Result from "./Components/Result";
import './styles/styles.css'
import './styles/bootstrap.min.css'
import Footer from './Components/Footer'


createStore({
  yourDetails: {
    firstName: "",
    lastName: "",
    age: "",
    yearsOfExp: ""
  }
});

const Pages = () => {
  const location = useLocation();
  return (
    <>
      <nav className="nav d-flex justify-content-center mb-5">
          
            <Link className={location.pathname === "/" ? " nav-link activenav navd" : "nav-link navd"} to="/">Step 1</Link>
          
            <Link className={location.pathname === "/step2" ? " nav-link activenav navd" : "nav-link navd"} to="/step2">Step 2</Link>
            <Link className={location.pathname === "/result" ? " nav-link activenav navd" : " nav-link navd"} to="/result">Result</Link>
      </nav>
      <Routes>
      <Route  path="/" element={<Step1></Step1>} />
      <Route path="/step2" element={<Step2></Step2>} />
      <Route path="/result" element={<Result></Result>}/>
      </Routes>
    </>
  );
};

function App() {
  return (
    <StateMachineProvider>
      
      <div className="container text-center mt-5 bgcontain">
        <h1>Multi Page Form in React-Hook-Form</h1>

       <div className='row d-flex justify-content-center text-center'>
       <Router>
          <div className='col-md-6 mt-5'>
          <Pages />
          </div>
        </Router>
         
       </div>
       <Footer></Footer>
      </div>
    </StateMachineProvider>
  );
}


export default App
