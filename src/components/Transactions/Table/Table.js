import React from 'react';
import { Link } from 'react-router-dom';

const table = (props) => {
    console.log("The value of props is: ", props);
    return (
        <table>
            <thead>
                <tr>
                    <th>ACCOUNT NO.</th>
                    <th>ACCOUNT NAME</th>
                    <th>CURRENCY</th>
                    <th>AMOUNT</th>
                    <th>TRANSACTION TYPE</th>
                </tr>
            </thead>
            <tbody>
                {props.filteredData.map((transaction, index) => {
                    return (
                            <tr key={index}>
                                <td>
                                    <Link 
                                        to={{ pathname: '/transaction_detail', state: transaction}}
                                    >{transaction.account}</Link>
                                </td>
                                <td>
                                    {transaction.accountName} 
                                </td>
                                <td>
                                    {transaction.currencyCode} 
                                </td>
                                <td>
                                    {transaction.amount} 
                                </td>
                                <td>
                                    {transaction.transactionType}
                                </td>
                            </tr>
                        );
                })}
            </tbody>
        </table>
    );
};

export default table;