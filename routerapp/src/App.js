import React from 'react';
import {Switch,Route} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import Portfolio from './Portfolio';
import Service from './Service';
import User from "./User";

function App() {
  const Name=()=>{
    return <h1> This is a Name page</h1>;
  }
  return (
    <>
    <Menu />
    <Switch>
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/contact/name" component={Name}  />
          <Route path="/service" component={Service}  />
          <Route path="/portfolio" component={Portfolio}  />
          <Route path="/user/:name" component={User}  />
          

    </Switch>
      
    </>
  )
}

export default App;
