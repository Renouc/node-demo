const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
const app = express()

app.use(
  cors({
    origin: 'http://localhost:3000', // React app URL
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'], // Allowed methods
  })
)

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(4000, () => {
  console.log('Now browse to localhost:4000/graphql')
})
