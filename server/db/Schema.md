# MongoDB - strongbox DB

## DB name

use strongbox

#DB schemas

## User
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
  avatarImage: {
    type: 'string'
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

## Keys
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