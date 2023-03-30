require('dotenv').config();

const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');

Router.post('/employeeData', async (req, res) => {
    const employees = await mongoose.connection.db.collection("employees");
    employees.find({}).toArray(async (err, empData) => {
        try {
            res.send([empData]);
        } catch (error) {
            console.log(error);
        }
    })
})

module.exports = Router;