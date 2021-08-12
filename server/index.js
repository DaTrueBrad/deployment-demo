const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')))
app.get('/styles', (req, res) => res.sendFile(path.join(__dirname, '../styles.css')))
app.get('/images', (req, res) => res.sendFile(path.join(__dirname, '../images')))

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Roger Roger! App listening on port ${port}!!`))