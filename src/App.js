import React, { Component } from 'react';
import './App.css';
import NavBar from './components/common/navbar';
import Movies from './components/movies';
import Customers from './components/common/customers';
import Rentals from './components/common/rentals';
import notFound from './components/common/not-Found';
import { Switch, Route, Redirect } from 'react-router-dom'

 

class App extends Component {
   
  render() {
    return (
       <div className="app">
         <NavBar />
          <Switch>
            <Route path="/movies" component={Movies} />           
            <Route path="/rentals" component={Rentals} />
            <Route path="/customers" component={Customers} />
            <Route path="/not-found" component={notFound} />
            <Redirect from="/" exact to="/movies"/>
            <Redirect to="/not-found" />
          </Switch>
       </div>
    )
  }
}
 
export default App;
