"use client";

import { QrCode } from "lucide-react";

export default function QRCodeSection() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">

                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Scannez pour télécharger
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Pointez simplement l'appareil photo de votre téléphone vers le code QR pour télécharger l'application Sala instantanément.
                        </p>
                        <div className="flex items-center gap-4 justify-center md:justify-start text-sm text-gray-500">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                iOS
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                Android
                            </span>
                        </div>
                    </div>

                    <div className="flex-shrink-0 bg-white p-4 rounded-2xl shadow-inner border border-gray-100">
                        {/* Placeholder for QR Code - typically you'd generate this or use an image */}
                        <div className="w-48 h-48 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                            <QrCode className="w-24 h-24 opacity-50" />
                        </div>
                        <p className="text-center text-xs text-gray-400 mt-2 font-mono">SCANNEZ-MOI</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
