import React from 'react'
import './App.css';
import Login from './components/Login';
import "normalize.css/normalize.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Login />
      </React.Fragment>
    )
  }
}

export default App
