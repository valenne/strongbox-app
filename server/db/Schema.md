DB schemas

1. User
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
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  accountCreation: {
    default: new Date().toLocaleString(),
    inmutable: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 10
  },
  recoveryLogin: {
    question: {
      type: String,
      default: '',
      lowercase: true
    },
    answer: {
      type: String,
      default: '',
      lowercase: true
    },
    hasData: {
      type: Boolean,
      default: false
    }
  }
})

2. strongbox
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