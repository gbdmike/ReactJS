import React from 'react';
import ReactDOM from 'react-dom'; //ReactDOM берет наше приложение и вставляет его в страницу
import './index.css';


//функциональный компонент, содержит логику и возвращает элемент
const MessageComponent = (props) => {
  
  return (
    <div>
      <h1>Message Component:</h1>
      {props.children}
    </div>
  ) 
}

const App = ({ props }) => {
  return (
    //единый react-элемент
  <div>
    <h1>App</h1>
    
    <MessageComponent>
      {props}
    </MessageComponent>

  </div>
  );
};

ReactDOM.render(<App props='Message from props' />, document.getElementById('root'));