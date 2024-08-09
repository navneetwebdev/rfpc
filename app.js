const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

const mongoose = require('mongoose')
const {MONGOURI} = require('./config/keys')
mongoose.connect(MONGOURI)
mongoose.connection.on('connected', ()=>{
	console.log('connected to mongo')
})
mongoose.connection.on('error', ()=>{
	console.log('err connecting', err)
})

require('./models/numlist')

app.use(express.json())
app.use(require('./routes/number'))

if(process.env.NODE_ENV == "production"){
	app.use((express.static('client/build')))
	const path = require('path')
	app.get('*', (req, res)=>{
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

app.get('/', (req, res)=>{
	res.send('hello world')
})

app.listen(PORT, ()=>{
	console.log('server is ruunning on port', PORT)
})