import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main';

class App extends Component {
  constructor(props) {
    super(props);
        this.state = {
           data: ''
        };
        //this.handleClick = this.handleClick.bind(this);
    }
  render() {
    return (
      <Provider store={store}>
        <div>
          <Main />
        </div>
      </Provider>

    );
  }
}

// const mapStateToProps = state => ({
//   character: state.sheet.character
// });

export default App;
