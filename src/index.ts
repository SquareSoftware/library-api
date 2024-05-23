import express, { json, urlencoded } from 'express'
import dotenv from 'dotenv'
import { connect } from './infra/db/mongodb/connection'
import { RegisterRoutes } from '../build/routes'

dotenv.config()

const init = async () => {
  const app = express()

  app.use(
    urlencoded({
      extended: true,
    })
  );
  app.use(json())
  
  RegisterRoutes(app)
  
  const port = process.env.PORT

  // await connect()
  
  app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
}

init()
