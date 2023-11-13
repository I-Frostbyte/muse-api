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
	genres: {
		type: [String],
		required: [true, 'genres field is required'],
	},
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
	shows: {
		type: [String],
		required: false,
	},
	seekingVenues: {
		type: Boolean,
		required: false,
	},
});

export const Artiste = mongoose.model('Artiste', ArtisteSchema);