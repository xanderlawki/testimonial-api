import mongoose from 'mongoose';
import Stories from '../Model/Stories.js'

export const getPost = async(req, res)=> {
    try{
        const stories = await Stories.find()
        res.status(200).json({
            status: 'success',
            stories,
        })
    }
    catch(error) {
        res.status(500).json({
            status: 'fail',
            message: error.message
        })
    }
   
}

export const createPost = async(req, res)=> {
    try {
        const stories = req.body
        const newStories = await Stories.create(stories)
       res.status(200).json({
           status: 'success',
           message: 'new stories was created'
       })
    }
    catch(error) {
        console.log(error)
        res.status(500).json({
            status: 'fail',
            message: error.message
        })
    }
   
}