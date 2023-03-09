import { mongoose } from 'mongoose'

const { Schema, model } = mongoose

const recoverySchema = new Schema({
  question: {
    type: String,
    default: '',
    lowercase: true,
    required: true
  },
  answer: {
    type: String,
    default: '',
    required: true
  },
  recoveryPassword: {
    type: String,
    default: ''
  },
  hasData: {
    type: Boolean,
    default: false
  }
})

const userSchema = new Schema({
  firstName: {
    type: 'string',
    required: true,
    lowercase: true,
    trim: true
  },
  lastName: {
    type: 'string',
    required: true,
    lowercase: true,
    trim: true
  },
  username: {
    type: 'string',
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  accountCreation: {
    type: String,
    default: new Date().toLocaleString(),
    inmutable: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  recoveryLogin: recoverySchema
})

export const User = model('User', userSchema)
