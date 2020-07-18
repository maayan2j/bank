import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import Breakdown from './components/Breakdown';
const axios = require('axios')


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  addTransaction = async (transaction) => {
    const res = await axios.post('http://localhost:3001/transaction', transaction)
    const data = [...this.state.data]
    transaction._id = res.data
    data.push(transaction)
    this.setState({data})
  }


  async getTransaction() {
    return axios.get("http://localhost:3001/transactions")
  }

  async componentDidMount() {
    const response = await this.getTransaction()
    this.setState({ data: response.data })
  }


  deleteTransaction = async (id) => {
    await axios.delete('http://localhost:3001/transaction/' + id)
    console.log(this.state.data)

    let data = [...this.state.data]
    for (let i = 0; i < data.length; i++) {
      if (data[i]._id === id) {
        data.splice(i, 1)
      }
    }
    this.setState({data})
  }


  render() {
    let balance = 0
    if(this.state.data.length){
      balance = this.state.data.map(b => b.amount).reduce((x, y) => x + y);
    }

    return (
     
      <Router>
      <div className="App"><div id="home-background"></div><div id="main-data">
        <Link to="/">Home  </Link>
        <Link to="/operations">|   Operations  </Link>
        <Link to="/transactions">|   Transactions  </Link>
        <Link to="/breakdown">|   Breakdown</Link>
        </div><div id="main-links">
        <Route exact path="/"/>
        <Route exact path="/transactions" render={()=><Transactions data={this.state.data} deleteTransaction={this.deleteTransaction}/> }/>
        <Route exact path="/operations" render={()=> <Operations addTransaction={this.addTransaction}/>} />
        <Route exact path="/breakdown" render={()=><Breakdown data={this.state.data}/> }/>
      </div></div>
      
      <div id="balance" className={balance > 500 ? 'positive' : 'negative'}>Your balance is: {balance}</div>
      
      </Router>
     
    )
  }
}

export default App;
