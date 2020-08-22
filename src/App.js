import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Movies from './components/movies';
import Rentals from './components/rentals';
import notFound from './components/not-Found';
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginForm from './components/loginform';
import MovieForm from './components/movieForm';
import SignUp from './components/SignUp';

 

class App extends Component {
   
  render() {
    return (
       <div className="app">
         <NavBar />
          <Switch> 
            <Route path="/movies/:id" component={MovieForm}/>   
            <Route path="/movies" component={Movies} />        
            <Route path="/rentals" component={Rentals} />
            <Route path="/login" component={LoginForm} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/not-found" component={notFound} />
            <Redirect from="/" exact to="/movies"/>
            <Redirect to="/not-found" />
          </Switch>
       </div>
    )
  }
}
 
export default App;
