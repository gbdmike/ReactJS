import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useMemo,
} from "react";
import ReactDOM from 'react-dom'; //ReactDOM берет наше приложение и вставляет его в страницу
import './index.css';

//Методы жизненного цикла - какие-либо любые настраиваемые функции, которые можем переопределить и написать свою,
//которая выполняется на различных этапах жизни компонента
//служит для того, чтобы мы могли из нашего кода реагировать на действия пользователя в браузере

class App extends React.Component{
  
  //создаем состояние
  constructor() {
    //вызываем метод constructor родителя c запоминанием состояния
    super();
    //объявляем состояние
    this.state = {
      messages: []
    }
    this.sendMessage = this.sendMessage.bind(this)    
  }

  sendMessage = () => {
    this.state.messages([...messages, {author: "User", text: this.state.messages.text}]);
    this.state = {
      message: ''
    }
  }

  render() {
    return (
        <div>
          <MessageList message = { this.state.messages } />
          <SendMessage sendMessage = {this.sendMessage}/> 
        </div>
      );
    }
}

class MessageList extends React.Component{
  render() {
    return (
      <div>
        {this.props.message.map((message) => (
          
            <div>
              <p>{ message.author }</p>
              <p>{ message.text }</p>
            </div>
        
        ))}
      </div>
    )
  }
}

class SendMessage extends React.Component{
  constructor() {
    super();
    this.state = {
      message: ''
    }
    //создаем новую привязанную функцию с помощью bind
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  //обновление состояния с тем, что ввел пользователь
  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.SendMessage(this.state.message)
    this.setState({
      message: ''
    })
  }
  render() {
    return (
      <form>
        <input
          //следим за полем вода пользователя
          onChange = {this.handleChange}
          onSubmit = {this.handleSubmit}
          // значение, то что ввел пользователь
          value = {this.state.message}
          placeholder="Enter message">
        </input>
        {/* <button onClick={this.handleSubmit}>Send</button> */}
      </form>
    )
  } 
}

ReactDOM.render(<App />, document.getElementById('root'));