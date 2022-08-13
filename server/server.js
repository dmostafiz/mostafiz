const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.use(bodyParser.json())
    // add custom path here
    // server.post('/request/custom', custom);

    server.use('/api', require('./routes/api.route'));

    server.get('*', (req, res) => {
        return handle(req, res)
    })



    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`)
    })
})