import { mongoose } from 'mongoose'

// envConfiguration
import { envConfig } from '../config/env.config.js'

export const mongooseConnected = () =>
  mongoose
    .connect(
      `mongodb://${envConfig.hostString}:${envConfig.dbPort}/${envConfig.dbName}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then(db => console.log(`MongoDB Connected to ${db.connection.name}`))
    .catch(error => {
      throw new Error(`Connection to MongoDB failure: ${error.message}`)
    })
