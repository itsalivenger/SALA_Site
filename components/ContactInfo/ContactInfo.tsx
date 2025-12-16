"use client";

import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactInfo() {
    const t = useTranslations('ContactInfo');

    return (
        <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 h-full">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">{t('title')}</h3>

            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">{t('office_title')}</h4>
                        <p className="text-gray-600 leading-relaxed">
                            {t('office_address_1')}<br />
                            {t('office_address_2')}<br />
                            {t('office_address_3')}
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">{t('phone_title')}</h4>
                        <p className="text-gray-600">
                            <span className="block mb-1">+212 522 123 456</span>
                            <span className="text-sm text-gray-500">{t('phone_subtitle')}</span>
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0 text-purple-600">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">{t('email_title')}</h4>
                        <p className="text-gray-600">
                            contact@sala.ma<br />
                            support@sala.ma
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200">
                    <h4 className="font-bold text-slate-900 mb-6">{t('follow_us')}</h4>
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { name: 'Facebook', icon: Facebook, color: 'hover:text-primary hover:border-primary/20' },
                            { name: 'Twitter', icon: Twitter, color: 'hover:text-sky-500 hover:border-sky-200' },
                            { name: 'Instagram', icon: Instagram, color: 'hover:text-pink-600 hover:border-pink-200' },
                            { name: 'LinkedIn', icon: Linkedin, color: 'hover:text-primary hover:border-primary/20' }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href="#"
                                className={`bg-white border-2 border-gray-200 ${social.color} px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 group`}
                            >
                                <social.icon className="w-5 h-5 text-gray-600 group-hover:scale-110 transition-transform" />
                                <span className="font-semibold text-sm text-slate-900">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
