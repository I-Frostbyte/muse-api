import mongoose from 'mongoose';

const ArtisteSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'name field is required'],
	},
	phone: {
		type: String,
		required: [true, 'phone number field is required'],
	},
	genres: [{
		type: String,
	}],
	location: {
		type: String,
		required: [true, 'state field is required'],
	},
	imageUrl: {
		type: String,
		required: [true, 'imageUrl field is required'],
	},
	website: {
		type: String,
		required: false,
	},
	socialMediaLinks: [{
        type: String,
        required: false,
    }],
	events: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Events"
	}],
	availability: {
		type: Boolean,
		default: true,
	},
}, {
	timestamps: true
});

// ArtisteSchema.pre("findOne", function (next) {
// 	this.populate("events");
// 	next();
// })

export const Artiste = mongoose.model('Artiste', ArtisteSchema);