
// Performs Database Associated Operations

import { Request, Response } from 'express'
import Char from './schema'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const STR : string = process.env.STR!

export const modConnect = async () => {
    try {
        await mongoose.connect(STR)
        console.log('Connected to Database.')
    } catch (e) {    
        throw e        
    }
}

export const modListAll = async (req: Request, res : Response) => {        
    try {
        const charList = await Char.find()
        return await charList
    } catch (e) {
        throw e
    }
}

export const modSaveOne = async (req : Request, res : Response) => {

    const newChar = new Char({
        ...req.body
    })    
 
    try {
        await newChar.save()
    } catch (e) {       
        throw e        
    }

}

export const modUpdateOne = async (req : Request, res : Response) => {       
    
    const id : string = req.params.id

    try {
        await Char.updateOne({'_id' : id}, req.body)
    } catch (e) {
        throw e
    }
}

export const modDeleteOne = async (req : Request, res : Response) => {

    const id : string = req.params.id

    try {
        await Char.deleteOne({'_id' : id})
    } catch (e) {
        throw e        
    }
    
}