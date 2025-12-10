"use client";

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function ContactInfo() {
    return (
        <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 h-full">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Informations</h3>

            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">Notre Bureau</h4>
                        <p className="text-gray-600 leading-relaxed">
                            123 Rue de la Logistique<br />
                            Centre Ville, Alger<br />
                            Algérie
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">Téléphone</h4>
                        <p className="text-gray-600">
                            <span className="block mb-1">+213 555 123 456</span>
                            <span className="text-sm text-gray-500">(Lun-Ven de 9h à 18h)</span>
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0 text-purple-600">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                        <p className="text-gray-600">
                            contact@sala.dz<br />
                            support@sala.dz
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200">
                    <h4 className="font-bold text-slate-900 mb-4">Suivez-nous</h4>
                    <div className="flex gap-4">
                        {[
                            { name: 'Facebook', icon: Facebook },
                            { name: 'Instagram', icon: Instagram },
                            { name: 'Twitter', icon: Twitter },
                            { name: 'LinkedIn', icon: Linkedin }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href="#"
                                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm hover:shadow-md"
                            >
                                <span className="sr-only">{social.name}</span>
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
