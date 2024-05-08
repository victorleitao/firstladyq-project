const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
	name        : {
		type     : String,
		required : true
	},
	alliance    : {
		type     : String,
		required : true
	},
	dateCreated : {
		type    : Date,
		default : Date.now
	}
});

const playerCollection = mongoose.model('players', playerSchema);

module.exports = playerCollection;
