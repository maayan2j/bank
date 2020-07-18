import React, { Component } from 'react';
import '../styles/operations.css'

class Operations extends Component {
    constructor() {
        super();
        this.state = { amount: 0 ,
                       vendor: "",
                       category: ""
        }
        
    }

    addTransaction = event => {
        let data = this.state
        let amount = parseInt(data.amount)
        const name = event.target.name
        if (name === "withdraw"){
            amount = parseInt(-1*amount)
            data.amount = amount
        }
        data.amount = amount
        this.props.addTransaction(data)
        this.setState({
            amount: 0 ,
            vendor: "",
            category: ""
        });
 }

    handleInput = event => {
        const {value, name} = event.target    
        console.log(name, value)
        this.setState({
          [name]: value
        });
    }


    render() { 
        return ( 
            <div>What would you like to do?

            <p>Amount: <input type="number"  name="amount" onChange={this.handleInput} value={this.state.amount}></input></p>
            <p>Vendor: <input type="text" name="vendor" onChange={this.handleInput} value={this.state.vendor}></input></p>
            <p>Category: <input type="text" name="category" onChange={this.handleInput} value={this.state.category}></input></p>

                
            <button className="deposit positive" name="deposit" onClick={this.addTransaction}>Deposit</button>
            <button className="withdraw negative" name="withdraw" onClick={this.addTransaction}>Withdraw</button>

            </div>);
    }
}
 
export default Operations;