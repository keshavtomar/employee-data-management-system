require('dotenv').config();

const express = require('express');
const Router = express.Router();
const Employee = require('../models/Employee');

Router.post('/addEmployee', async (req, res) => {
    try {
        await Employee.create({
            _id: req.body.id,
            name: req.body.name,
            age: req.body.age,
            address: req.body.address,
            department: req.body.department,
            status: req.body.status
        })
        return res.json({ success: true })
    } catch (error) {
        console.log(error);
        return res.json({ success: false })
    }
})

module.exports = Router;