import React, { Component } from 'react';
import originalData from '../../data/data.json';
import './Transactions.css';

import Table from './Table/Table';
import Filters from '../Filters/Filters';

class Transactions extends Component {

    state = {
        data: originalData.transactions
    };
    
    render() {
        return (
            <div className="Transactions">
                <div className="TransactionHeader">
                    <h3>My Transactions</h3>
                </div>
                <div className="TransactionGridWrapper">
                <div className="SideNav">
                    <Filters onFilterChange={(event, type) => this.handleFilterChangeEvent(event, type)} />
                </div>
                <div className="Grid">
                    <Table 
                      filteredData={this.state.data}
                    />
                </div>
                </div>
            </div>
        );
    }


    handleFilterChangeEvent(event, type) {
        const data = this.state.data;
        switch(type) {
          case 'accountName':
            if (event.target.checked) {
                const filteredAccountNameData = data.filter((ele) => ele.accountName === event.target.value);
                this.setState({
                    data: filteredAccountNameData
                });
            }
            else {
                this.setState({
                    data: originalData.transactions
                });
            }
            return;
          case 'transactionType':
            if(event.target.checked) {
                const filteredTransactionTypeData = data.filter((ele) => ele.transactionType === event.target.value);
                this.setState({
                    data: filteredTransactionTypeData
                });
            }
            else {
                this.setState({
                    data: originalData.transactions
                });
            }
            return;
           default:
               return; 
        }
      }
}

export default Transactions;