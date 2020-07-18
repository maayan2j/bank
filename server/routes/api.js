const express = require('express')
const router = express.Router()
const Transaction = require('../model/Transaction')
const mongoose = require('mongoose') 
mongoose.connect('mongodb://localhost/bank-db', { useNewUrlParser: true })


//transactions - a GET route that returns all of the transaction documents
router.get('/transactions', async function (request, response) {
    const transactionsFromDB = await Transaction.find({})
    response.send(transactionsFromDB)
})


// /transaction - a POST route that saves a single transaction into your DB
router.post('/transaction', async function (request, response){
    const transactionToSave = request.body
    console.log(transactionToSave)
        let transaction1 = new Transaction({
            amount: transactionToSave.amount,
            vendor: transactionToSave.vendor,
            category: transactionToSave.category,
        })
    console.log(transaction1)
    await transaction1.save(function(err, obj){    
    response.send(obj.id);
    })
})


// /transaction - a DELETE route that deletes a single transaction in your DB
router.delete('/transaction/:id', async function (request, response) {
    const transactionId = request.params.id;
    await Transaction.deleteOne({
        _id: transactionId
    })
    response.send()
})



module.exports = router