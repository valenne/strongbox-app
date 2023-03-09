import { config } from 'dotenv'

// dotenv connected
config()

// crear objeto de exportacion con variables de entorno
export const envConfig = {
  hostString: process.env.HOST_ADDRESS,
  dbPort: process.env.PORT_DB,
  dbName: process.env.DB_NAME,
  serverPort: process.env.PORT_SERVER || 8080,
  saltRounds: +process.env.SALT_ROUNDS
}
