"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

interface SocialMediaLinksProps {
    variant?: "default" | "compact";
}

export default function SocialMediaLinks({ variant = "default" }: SocialMediaLinksProps) {
    const socials = [
        { name: 'Facebook', icon: Facebook, color: 'hover:text-blue-600 hover:border-blue-200' },
        { name: 'Twitter', icon: Twitter, color: 'hover:text-sky-500 hover:border-sky-200' },
        { name: 'Instagram', icon: Instagram, color: 'hover:text-pink-600 hover:border-pink-200' },
        { name: 'LinkedIn', icon: Linkedin, color: 'hover:text-blue-700 hover:border-blue-200' }
    ];

    if (variant === "compact") {
        return (
            <div className="flex gap-4">
                {socials.map((social) => (
                    <a
                        key={social.name}
                        href="#"
                        aria-label={social.name}
                        className={`w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 ${social.color} transition-all shadow-sm hover:shadow-md`}
                    >
                        <social.icon className="w-5 h-5" />
                    </a>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-3">
            {socials.map((social) => (
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
    );
}
