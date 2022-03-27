const express =require('express')
const router=express.Router()
const {getTransactions, addTransaction, deleteTransaction}= require ('../controllers/transactions')

router.route('/')
.post(addTransaction)

router.route('/:id')
.get(getTransactions)
.delete(deleteTransaction)

module.exports=router