import express from 'express'
import dotenv from 'dotenv'
import { connect } from './infra/db/mongodb/connection'

dotenv.config()

const init = async () => {
  const app = express()
  
  const port = process.env.PORT

  await connect()
  
  app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
}

init()
