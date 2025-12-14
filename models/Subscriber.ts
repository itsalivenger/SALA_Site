import mongoose, { Schema, model, models } from 'mongoose';

const SubscriberSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    subscribedAt: {
        type: Date,
        default: Date.now,
    },
}, { collection: 'Subscribers' });

// Prevent model recompilation error in development (Hot Reload)
// The key in `models` must match the string passed to `model()`
const Subscriber = models.Subscribers || model('Subscribers', SubscriberSchema);

export default Subscriber;
