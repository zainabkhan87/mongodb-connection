const mongoose=require('mongoose');

const customerSchema= new mongoose.Schema({
    customerid:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    contact:{
        type: Number,
        required: true
    }

})

const customer= mongoose.model('customer',customerSchema)
module.exports= customer;