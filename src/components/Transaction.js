import React, { Component } from 'react';

class Transaction extends Component {
    
    deleteTransaction = () => {
        this.props.deleteTransaction(this.props.data._id)
    }
    
    render() { 
        const amount = this.props.data.amount
        const vendor = this.props.data.vendor
        const category = this.props.data.category
        return (
        <div>
        <div className={amount > 0 ? 'positive' : 'negative'}>{amount}  {vendor} | {category} <button className="negative" onClick={this.deleteTransaction}>⊝</button></div>
        </div>
        );
    }
}
 
export default Transaction;


  // { amount: x, vendor: "y", category: "z" }