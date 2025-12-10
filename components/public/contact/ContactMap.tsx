"use client";

import { MapPin } from "lucide-react";

export default function ContactMap() {
    return (
        <div className="w-full h-[400px] bg-slate-100 rounded-3xl overflow-hidden relative border border-gray-200">
            {/* 
        Ideally use Google Maps Embed API or Leaflet. 
        For now, a styled placeholder that looks like a map.
      */}
            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Algiers,Algeria&zoom=13&size=800x400&sensor=false')] bg-cover bg-center grayscale opacity-40"></div>

            {/* Fallback pattern if image fails or for deeper texture */}
            <div className="absolute inset-0 bg-slate-200 opacity-50 mix-blend-overlay"></div>

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                        <MapPin className="w-6 h-6 fill-red-600" />
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 text-sm">Siège Social Sala</p>
                        <p className="text-xs text-gray-500">Alger, Algérie</p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-medium text-gray-500 shadow-sm">
                🗺️ Map Data ©2024
            </div>
        </div>
    );
}
