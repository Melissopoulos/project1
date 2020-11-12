import React from 'react';
import Form from './components/Form'
import SignIn from './login/SignIn'
import Nav from './nav/Nav'
import './App.css'
import SignUp from './login/SignUp';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import FinalPage from './final-page/FinalPage';



function App() {
  return (
   
    <div className="app">
      <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/form' component={Form}/>
        <Route path='/finalpage' component={FinalPage}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
