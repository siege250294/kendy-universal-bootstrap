import express from 'express'
import { resolve } from 'path'

const app = express()

app.use('/', express.static(resolve(__dirname)))

export default app