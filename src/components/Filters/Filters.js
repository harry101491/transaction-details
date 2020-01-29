import React, { Component } from 'react';
import './Filters.css';

const accountTypeFilters = [
    "Savings Account",
    "Checking Account",
    "Auto Loan Account",
    "Credit Card Account",
    "Investment Account",
    "Personal Loan Account",
    "Money Market Account",
    "Home Loan Account"
];

const transactionTypeFilters = [
    "deposit",
    "withdrawal",
    "invoice",
    "payment"
];


class Filters extends Component {
    
    render() {
        return (
            <div className="Filters">
                <h3>Filters</h3>
                <div className="FilterWrapper">
                    <h4>Account Name</h4>
                    { accountTypeFilters.map((filter, index) => {
                        return (
                            <div className="Filter" key={index}>
                                <label htmlFor={filter}>
                                    <input 
                                        type="checkbox"
                                        name={filter} 
                                        value={filter} 
                                        onChange={(event) => this.props.onFilterChange(event, "accountName")}
                                    />
                                    {filter}
                                </label>
                            </div>
                        );
                    })}
                </div>
                <div className="FilterWrapper">
                    <h4>Transaction Type</h4>
                    { transactionTypeFilters.map((filter, index) => {
                        return (
                            <div className="Filter" key={index}>
                                <label htmlFor={filter}>
                                    <input 
                                        type="checkbox"
                                        name={filter}
                                        value={filter}
                                        onChange={(event) => this.props.onFilterChange(event, "transactionType")}
                                    />
                                    {filter}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    onFilterCheckedEventHandler(event, type) {
        
    }
}

export default Filters;