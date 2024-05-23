import mongoose from 'mongoose'

export const connect = async (url: string = process.env.DB_URL!): Promise<void> => {
  mongoose.connection.on('connected', () => {
    console.info('DB connected')
  })

  mongoose.connection.on('error', (err: Error) => {
    console.error('DB connection error', err)
  })

  const { DB_NAME } = process.env

  await mongoose.connect(url, {
    dbName: DB_NAME,

    ignoreUndefined: true
  })

  mongoose.set('strictQuery', false)
}

export const disconnect = async (): Promise<void> => {
  await mongoose.disconnect()

  await mongoose.connection.close()
}