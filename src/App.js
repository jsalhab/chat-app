import React, { Component } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Register from "./components/Auth/Register";
import firebase from "./firebase";
import { connect } from "react-redux";
import Spinner from "./UIElements/Spinner/Spinner";
import { setUser, clearUser } from "./redux/actions"
import HomePage from "./components/HomePage/HomePage";

class App extends Component {

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.setUser(user);
        this.props.history.push("/");
      }
      else {
        this.props.history.push("/login");
        this.props.clearUser();
      }
    });
  }

  render() {
    return this.props.isLoading ? (<Spinner />) :
    (<div className="App">
      <BrowserRouter>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
         
      </BrowserRouter>
    </div>);
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.user.isLoading
  }
}

export default withRouter(connect(mapStateToProps, { setUser, clearUser })(App));
