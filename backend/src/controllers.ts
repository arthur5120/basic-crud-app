
// Request Processing and Management Module

import { modListAll, modUpdateOne, modSaveOne, modDeleteOne } from './models'
import { Result, ValidationChain, ValidationError, body, validationResult } from 'express-validator'
import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose'

// Body Parsing

export const conBodyParsers = [
    express.json({strict : false}), 
    express.text(),
    express.urlencoded({extended : false})
]

// Business Rules, Validation and Sanitization

export const conValidationChain : ValidationChain[] = [
    body('name', 'Name must contain from 3 to 20 alphabetic characters.')
        .not().isEmpty().bail()
        .trim()
        .matches(/^[a-zA-Z ]+$/, 'g')
        .matches(/[a-zA-Z].*[a-zA-Z].*[a-zA-Z]/)
        .isLength({min : 3, max : 20}),                
	body('age', 'Age must be an integer between 0 and 200.')
	    .not().isEmpty().bail()
        .toInt().isInt({min : 0, max : 200}),
    body('desc', 'Description cannot exceed 250 alphanumeric characters.')
        .matches(/^[a-zA-Z0-9 ]*$/, 'g')
        .trim()
        .isLength({ max: 250 })
]

// CORS Headers Settings

export const conSetCors = async (req : Request, res : Response, next : NextFunction) => {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE')
    res.setHeader("Access-Control-Allow-Headers","Content-Type, Accept, X-Requested-With, Authorization");
    next()	

}

// Controller Functions, Error Handling and Logging

export const conListAll = async (req : Request, res : Response) => {    

    try {
        const charList = await modListAll(req, res)
        await res.send(charList)
    } catch (e) {
        console.log({'500 Unable to Process Request':JSON.stringify(e)})
        return res.status(500).send(`Unable to Process Request.`)
    }

}

export const conSaveOne = [...conBodyParsers, conValidationChain, async (req : Request, res : Response) => {
    
    const error : Result<ValidationError> = validationResult(req)

    if (!error.isEmpty()) {
        console.log({'400 Validation Error':`${JSON.stringify(error)}`})
        return res.status(400).send(`${error.array()[0].msg}`)
    }

    try {
        await modSaveOne(req, res)
        res.status(200).send(`User Saved Successfully`)
    } catch(e) {
        console.log({'500 Internal Error':JSON.stringify(e)})
        return res.status(500).send(`Unable to Process Request.`)
    }

}]

export const conUpdateOne = [...conBodyParsers, conValidationChain, async (req : Request, res : Response) => {

    const error : Result<ValidationError> = validationResult(req)

    if (!error.isEmpty()) {        
        console.log({'400 Validation Error':`${JSON.stringify(error)}`})
        return res.status(400).send(`${error.array()[0].msg}`)
    }

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        console.log({'404 User Not Found':`Invalid ID`})
        return res.status(404).send(`User Not Found.`)
    }

    try {
        await modUpdateOne(req, res)
        res.status(200).send(`User Updated Sucessfully`)
    } catch(e) {
        console.log({'500 Internal Error':JSON.stringify(e)})
        return res.status(500).send(`Unable to Process Request.`)
    }

}]

export const conDeleteOne = async (req : Request, res : Response) => {      
    
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        console.log({'404 User Not Found':`Invalid ID`})
        return res.status(404).send(`User Not Found.`)
    }

    try {
        await modDeleteOne(req, res)        
        res.status(200).send(`User Deleted Sucessfully`)
    } catch(e) {
        console.log({'500 Internal Error':JSON.stringify(e)})
        return res.status(500).send(`Unable to Process Request.`)
    }
}