"use client";

import { Link } from '@/i18n/routing';
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations('Footer');
    const year = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Col */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Sala
                        </Link>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {t('brand_desc')}
                        </p>
                        <div className="pt-2">
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
                                        className={`bg-white border-2 border-gray-200 ${social.color} px-3 py-2 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 group`}
                                    >
                                        <social.icon className="w-4 h-4 text-gray-600 group-hover:scale-110 transition-transform" />
                                        <span className="font-semibold text-xs text-slate-900">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Links Col */}
                    <div>
                        <h3 className="font-bold text-slate-900 mb-4">{t('col_company')}</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/about" className="hover:text-primary transition-colors">{t('link_about')}</Link></li>
                            <li><Link href="/careers" className="hover:text-primary transition-colors">{t('link_careers')}</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">{t('link_blog')}</Link></li>
                            <li><Link href="/press" className="hover:text-primary transition-colors">{t('link_press')}</Link></li>
                        </ul>
                    </div>

                    {/* Support Col */}
                    <div>
                        <h3 className="font-bold text-slate-900 mb-4">{t('col_support')}</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/contact" className="hover:text-primary transition-colors">{t('link_contact')}</Link></li>
                            <li><Link href="/faq" className="hover:text-primary transition-colors">{t('link_faq')}</Link></li>
                            <li><Link href="/complaints" className="hover:text-primary transition-colors">{t('link_complaints')}</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">{t('link_terms')}</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">{t('link_privacy')}</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links Col */}
                    <div>
                        <h3 className="font-bold text-slate-900 mb-4">{t('col_quick')}</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/download" className="hover:text-primary transition-colors">{t('link_download')}</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">{t('link_services')}</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">{t('link_who_we_are')}</Link></li>
                            <li><Link href="/faq" className="hover:text-primary transition-colors">{t('link_faq')}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-500">
                    <p>{t('copyright', { year })}</p>
                </div>
            </div>
        </footer>
    );
}
