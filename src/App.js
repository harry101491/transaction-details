import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Transactions from './components/Transactions/Transactions';
import TransactionDetail from './components/Transactions/TransactionDetail/TransactionDetail';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              path='/'
              exact
              component={Transactions}
            />
            <Route
              path='/transaction_detail'
              component={TransactionDetail}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }


}

export default App;
