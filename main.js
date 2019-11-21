'use strict'

const { db } = require('./server/db')
const app = require('./server')
const PORT = process.env.PORT || 3000

db.sync().then(() => {
  console.log('db synced')
  app.listen(PORT, e => {
    if (e) throw e
    console.log(`connected to ${PORT}`)
  })
})
