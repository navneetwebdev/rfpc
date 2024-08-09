const mongoose = require('mongoose')

const numlistSchema = new mongoose.Schema({
	list:{
		type:Array
	}
})

mongoose.model('Numlist', numlistSchema)