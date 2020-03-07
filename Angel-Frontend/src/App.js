import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


import AddProject from "./components/AddProject"
import Default from "./pages/Default"
import Dashboard from "./components/Dashboard"

import Signup from './pages/Signup';
import Login from './pages/Login';
import Private from './pages/Private';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />


        {/* La pagina de incio tiene que ser login */}
        {/* Private route debe tener la pagina de dashbord. */}


        <Switch>
          
          <AnonRoute exact path="/" component={Login} />
          
          <AnonRoute exact path="/signup" component={Signup} />

          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/addproject" component={AddProject} />
          


          {/* <PrivateRoute path="/editprofile"  component={EditProfile} /> */}

        {/* Should be accesible for both site... now it's to try to add favorites */}
          {/* <Route  exact path="/coins" component={ CoinsList }/>
          <PrivateRoute path="/coins/detail/:id"  component={DetailCoin} />

          <PrivateRoute  exact path="/owncoins/add" component={ AddOwnCoins }/>
          <PrivateRoute  exact path="/owncoins/" component={ OwnCoins }/>
           */}

          {/* <DetailCoin path="/coins/detail/:id" /> */}
          {/* <Route path="/coins/detail/:id"  component={DetailCoin} /> */}
          {/* <PrivateRoute path="/favorites" component={ Favorites }/> */}
          <Route component={ Default }/>

        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
