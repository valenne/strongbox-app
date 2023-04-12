import { mongoose } from 'mongoose'

const { Schema, model } = mongoose

const KeySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    lowercase: true,
    trim: true,
    default: 'general'
  },
  categoryImg: {
    type: String,
    required: true
  },
  serviceName: {
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
    lowerCase: true,
    default: ''
  },
  createAt: {
    type: String,
    default: new Date().toLocaleString(),
    inmutable: true
  },
  updateAt: {
    type: String,
    default: () => new Date().toLocaleString()
  },
  hasPin: {
    type: Boolean,
    default: false
  },
  pin: {
    type: String,
    default: () => '',
    min: [4, 'Must be at least 4 digits, got {VALUE}'],
    max: [4, 'Must be at maximum of 4 digits, got {VALUE}']
  }
})

export const Key = model('Key', KeySchema)
