import React from 'react';
import './TranscationDetail.css';

const transaction = (props) => {
    console.log('The value of props is:', props);
    if (props.location.state) {
        return (
            <div className="TransactionDetail">
                <div className="AccountNumberWrapper">
                    <h3>Transaction {props.location.state.account}</h3>
                </div>
                <div className="DetailWrapper">
                    <p className="DetailElement">
                        <label>
                            Account No.:
                        </label>
                        <span>{props.location.state.account}</span>
                    </p>
                    <p className="DetailElement">
                        <label>
                            Account Name:
                        </label>
                        <span>{props.location.state.accountName}</span>
                    </p>
                    <p className="DetailElement">
                        <label>
                            Currency Code:
                        </label>
                        <span>{props.location.state.currencyCode}</span>
                    </p>
                    <p className="DetailElement">
                        <label>
                            Amount:
                        </label>
                        <span>{props.location.state.amount}</span>
                    </p>
                    <p className="DetailElement">
                        <label>
                            Transaction Type:
                        </label>
                        <span>{props.location.state.transactionType}</span>
                    </p>
                </div>
            </div>
        );
    }
    return null;
};

export default transaction;