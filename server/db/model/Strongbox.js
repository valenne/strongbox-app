import { mongoose } from 'mongoose'
// importing model User
import User from './User.js'

const { Schema, model } = mongoose

const strongBoxSchema = new Schema({
  services: [
    {
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
  ],
  user: {
    type: SchemaTypes.ObjectId,
    ref: 'User',
    required: true
  }
})

export const strongBox = model('StrongBox', strongBoxSchema)
