"use client";

import { MapPin } from "lucide-react";

export default function ContactMap() {
    return (
        <div className="w-full">
            <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Notre Localisation</h3>
                <p className="text-gray-600">Visitez-nous à Casablanca, Maroc</p>
            </div>

            <div className="w-full h-[450px] rounded-3xl overflow-hidden relative border border-gray-200 shadow-xl">
                {/* Google Maps Embed */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106357.32215076804!2d-7.6816449!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2s!4v1733838000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Casablanca, Morocco Map"
                ></iframe>

                {/* Location Badge Overlay */}
                <div className="absolute top-6 right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <MapPin className="w-6 h-6 fill-primary" />
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 text-sm">Sala - Casablanca</p>
                        <p className="text-xs text-gray-500">Casablanca, Maroc 🇲🇦</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
