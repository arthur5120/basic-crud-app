
// Database schema, validation and business rules redundancy

import mongoose from 'mongoose'

const charSchema = new mongoose.Schema({

	name : {
		type : String, 
		required : [true, 'Name required'], 
		minLength : 3,
		maxLength : 20,
		validate: { 
			validator : (v : string) => { return /^[a-zA-Z ]+$/.test(v)}, 
			message: 'Name must contain only alphabetic characters'
		}
	},

	age : {
		type : Number, 
		required : [true, 'Age Required'], 
		min : 0, 
		max : 200
	},

	desc : {
		type : String, 
		required : false, 
		default : `No Description Available.`,
		minLength : 0, 
		maxLength : 250,
		validate: { 
			validator : (v : string) => {return /^[a-zA-Z0-9 ]*$/.test(v)},
			message: 'Description must contain only alphanumeric characters'
		}
	}

})

export default mongoose.model('Char', charSchema)