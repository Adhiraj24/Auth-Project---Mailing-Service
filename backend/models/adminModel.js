const express = require('express')
const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    username:{
        type:String,
        required:true
    }
},{timestamps: true})