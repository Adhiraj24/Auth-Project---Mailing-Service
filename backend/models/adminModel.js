const express = require('express')
const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    
},{timestamps: true})

const adminModel = mongoose.model('Admin', adminSchema)

export default adminModel