import express from 'express'
import { resolve } from 'path'

const app = express()

app.use('/', express.static(resolve(process.cwd(), 'build/public')))

export default app