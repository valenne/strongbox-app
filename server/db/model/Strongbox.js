import { mongoose } from 'mongoose'
// importing model User
import User from './User.js'

const { Schema, model } = mongoose

const strongBoxSchema = new Schema({
  user: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
    required: true
  },
  services: [
    {
      category: {
        type: String,
        lowercase: true,
        trim: true,
        default: 'General'
      },
      name: {
        type: String,
        loweCase: true,
        required: true,
        trim: true
      },
      savePassword: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        default: ''
      },
      createAt: {
        default: new Date().toLocaleString(),
        inmutable: true
      },

      updateAt: {
        type: String,
        default: new Date().toLocaleString()
      },
      pin: {
        type: Number,
        default: 0000,
        min: [4, 'Must be at least 4 digits, got {VALUE}'],
        max: [4, 'Must be at maximum of 4 digits, got {VALUE}'],
        hasPin: {
          type: Boolean,
          default: false
        }
      }
    }
  ]
})

export const strongBox = model('StrongBox', strongBoxSchema)
