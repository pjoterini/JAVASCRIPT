const express = require('express');
const Datastore = require('nedb')

const PORT = 3000;

const app = express();
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }))
app.listen(PORT, () =>
  console.log(`server is at: http://localhost:${PORT}.`)
)

const database = new Datastore('database.db')
database.loadDatabase()
// database.insert({
//   name: 'pjtoerini',
//   status: '🐧'
// })


app.get('/', (request, response) => {
    response.send('Welcome')
})

app.post('/api', (request, response) => {
    const data = request.body
    const timestamp = Date.now()
    data.timestamp = timestamp
    database.insert(data)
    response.json({
      status: 'success'
    })
})