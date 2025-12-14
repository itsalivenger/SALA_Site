import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface ISettings extends Document {
    companyAddress: string;
    companyPhone: string;
    facebookUrl: string;
    instagramUrl: string;
    twitterUrl: string;
    tiktokUrl: string;
    iosAppUrl: string;
    androidAppUrl: string;
    deliveryFee: number;
    minOrderAmount: number;
    currency: string;
    maintenanceMode: boolean;
    updatedAt: Date;
}

const SettingsSchema = new Schema(
    {
        companyAddress: {
            type: String,
            default: '',
        },
        companyPhone: {
            type: String,
            default: '',
        },
        facebookUrl: {
            type: String,
            default: '',
        },
        instagramUrl: {
            type: String,
            default: '',
        },
        twitterUrl: {
            type: String,
            default: '',
        },
        tiktokUrl: {
            type: String,
            default: '',
        },
        iosAppUrl: {
            type: String,
            default: '',
        },
        androidAppUrl: {
            type: String,
            default: '',
        },
        deliveryFee: {
            type: Number,
            default: 0,
        },
        minOrderAmount: {
            type: Number,
            default: 0,
        },
        currency: {
            type: String,
            default: 'MAD',
        },
        maintenanceMode: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const Settings = models.Settings || model<ISettings>('Settings', SettingsSchema);

export default Settings;
