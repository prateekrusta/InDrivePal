const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
  },
    phoneNumber:{
        type:Number,
        required: false
    },
    speciallyAbled: {
      type:Boolean,
      required:true
    },
    type:{
      type:String,
      required:true,
      enum:['user','driver']
    },
    specialNeeds:[{
      type:String,
      enum : ['visual','hearing','speech','locomotor',''],
      default:[''],
      required:false
    }]

})

const User = mongoose.model('User', userSchema)

module.exports = User