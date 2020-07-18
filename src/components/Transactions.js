import React, { Component } from 'react';
import Transaction from './Transaction';
import '../styles/transactions.css'

class Transactions extends Component {
    constructor() {
        super();
        this.state = {  }
    }
    render() { 
        const data = this.props.data
        console.log(data)
        return ( 
            <div>
            {data.map(m=>{return( 
             <Transaction data={m} deleteTransaction={this.props.deleteTransaction}/>)
            })}
        
        </div>);
    }
}
 
export default Transactions;



// { amount: 3200, vendor: "Elevation", category: "Salary" }, 1
// { amount: -7, vendor: "Runescape", category: "Entertainment" },2
// { amount: -20, vendor: "Subway", category: "Food" },3
// { amount: -98, vendor: "La Baguetterie", category: "Food" }4