const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../styles.css')))

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Roger Roger! App listening on port ${port}!!`))