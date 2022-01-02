import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import Checkbox from "./Checkbox";
import ApiFunctions from "./api-functions";

function AppTwo() {
  return (
    <>
      <h1 align="center">This is the second App</h1>
      <h2 className='subTitle'>Using fragments</h2>
    </>
  )
}

ReactDOM.render(
  <React.Fragment>
    <App />
    <AppTwo />
    <Checkbox />
    <ApiFunctions login="fabiannb8"/>
  </React.Fragment>,
  document.getElementById('root')
);
