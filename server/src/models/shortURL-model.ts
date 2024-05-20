
import mongoose, { Schema } from 'mongoose';
import { nanoid } from "nanoid";

// Creating schema
const shortURLSchema = new Schema({
    // sample: { type: String, required: true, unique: true },

    fullURL: { type: String, required: true },
    shortURL: { type: String, required: true, default: () => nanoid().substring(0, 10) },
    clicks: { type: Number, default: 0 }
}, {
    timestamps: true
});

// model
export const urlModel = mongoose.model('ShortURL', shortURLSchema);


