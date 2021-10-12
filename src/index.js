import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloComponent3 from './components/Hello';

// rendering -> call take to all component

// create component 
function HelloComponent(){
  return <h1>สวัสดี component</h1>
}

// class component 
class HelloComponent2 extends React.Component{
  render(){
    return <h1>สวัสดี component </h1>
  }
}

// create vatuial dom
ReactDOM.render(<App/> ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
