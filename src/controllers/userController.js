const Customer = require('../models/customer');
const mongoose = require('mongoose');

const getAllusers = (req, res) => {
    res.send('MY ALL USERS ')
}

const getUserById = (req, res) => {
    res.send('Following are the users by their ID')
}

const postUserName = (req, res) => {
    res.send('HELLO USER!')

}

const createCustomer = async (req, res) => {
    const customerdata = req.body
    try {
        const customer = new Customer(customerdata)
        await customer.save();
        console.log('customer created', customer)
        res.status(200).json({ message: 'Customer created', customer });
    }
    catch (error) {
        console.error('Error adding customer:', error);
        res.status(500).json({ message: 'Some error occurred', error: error.message });
    }

};

const getallcustomers = async (req, res) => {
    try {
        const customer = await Customer.find()
        res.status(200).json({ customer })
    } catch (error) {
        console.log('error getting users', error)
        res.status(500).json({ message: 'Error getting users', error: error })
    }
}

const getcustomerbyid = async (req, res) => {
    const customerid = req.query.customerid
    try {
        const customer = await Customer.findOne({ customerid })
        if (customer) {
            res.status(200).json({ customer })
        } else {
            res.status(400).json({ message: 'customer not found' })
        }
    }catch (error) {
        console.error('Error getting users:', error);
        res.status(500).json({message: 'Error getting users', error: error})
    }
}

const updatecustomerbyid= async(req,res)=>{
    const customerid = req.query.customerid
    const updatescript={
        $set:{
            name: req.body.name,
            contact: req.body.contact,
            address: req.body.address,
            email: req.body.email
        }
    }
    try {
        const customer = await Customer.updateOne({ customerid }, updatescript)
        if (customer) {
            res.status(200).json({ customer })
        } else {
            res.status(400).json({ message: 'customer not updated' })
        }
    }catch (error) {
        console.error('Error updating users:', error);
        res.status(500).json({message: 'Error updating users', error: error})
    }

}

const deletecustomerbyid= async(req,res)=>{
    const customerid = req.query.customerid
    try {
        const customer = await Customer.deleteOne({ customerid })
        if (customer) {
            res.status(200).json({ customer })
        } else {
            res.status(400).json({ message: 'customer not deleted' })
        }
    }catch (error) {
        console.error('Error deleting users:', error);
        res.status(500).json({message: 'Error deleting users', error: error})
    }

}


module.exports = { 
     getAllusers,
     getUserById,
     postUserName,
     createCustomer,
     getallcustomers,
     getcustomerbyid,
     updatecustomerbyid,
     deletecustomerbyid
}