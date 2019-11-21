'use strict'

const { db } = require('./server/db')
const app = require('./server')
const PORT = process.env.PORT || 5885

db.sync().then(() => {
  console.log('db synced')
  app.listen(PORT, e => {
    if (e) throw e
    console.log(`connected to ${PORT}`)
  })
})
