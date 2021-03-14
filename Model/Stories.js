import mongoose from 'mongoose';


const StorySchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    creator: {
        type: String,
        
    },
    message: {
        type: String,
        
    },
    photo: String,
    location: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Stories = mongoose.model('Stories', StorySchema)

export default Stories