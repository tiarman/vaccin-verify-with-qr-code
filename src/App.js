import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css'
import axios from 'axios';
import Dashboard from './Pages/Dashboard/Dashboard';
import PdfForm from './Components/HomePageComponents/PdfForm/PdfForm';


axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
})

class App extends React.Component {
  componentDidMount() {
    document.title = "qr code"
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/pdfform">
          <PdfForm />
          </Route>
          <Route path="/dashboard/:panel">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    );
  };
}

export default App;