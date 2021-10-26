import React, { Component} from "react";
import "./App.css";
import Home from "./components/home.js"
import Navbar from "./components/navbar/navbar.js"
import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer/footer.js'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";


class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Navbar/>
        <Switch>
          <Route
            path="/"
            render={(props) => <Home {...props}/>}
            exact
          />
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default withCookies(App);
