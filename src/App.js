import React from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages/Index"

function App() {
  return (
    <div className="transition-colors duration-200">
       <Router>
        <Header/> 
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
