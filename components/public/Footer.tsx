import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Col */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Sala
                        </Link>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Votre partenaire de confiance pour les livraisons et le transport. Nous connectons le monde, un colis à la fois.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[
                                { name: 'Facebook', icon: Facebook, color: 'hover:text-blue-600' },
                                { name: 'Twitter', icon: Twitter, color: 'hover:text-cyan-500' },
                                { name: 'Instagram', icon: Instagram, color: 'hover:text-pink-600' },
                                { name: 'LinkedIn', icon: Linkedin, color: 'hover:text-blue-700' }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    className={`w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 ${social.color} hover:border-blue-200 transition-all shadow-sm hover:shadow-md`}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Col */}
                    <div>
                        <h3 className="font-bold text-slate-900 mb-4">Entreprise</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/about" className="hover:text-blue-600 transition-colors">À Propos</Link></li>
                            <li><Link href="/careers" className="hover:text-blue-600 transition-colors">Carrières</Link></li>
                            <li><Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
                            <li><Link href="/press" className="hover:text-blue-600 transition-colors">Presse</Link></li>
                        </ul>
                    </div>

                    {/* Support Col */}
                    <div>
                        <h3 className="font-bold text-slate-900 mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Centre de Contact</Link></li>
                            <li><Link href="/faq" className="hover:text-blue-600 transition-colors">FAQs</Link></li>
                            <li><Link href="/complaints" className="hover:text-blue-600 transition-colors">Signaler un Problème</Link></li>
                            <li><Link href="/terms" className="hover:text-blue-600 transition-colors">Conditions d'Utilisation</Link></li>
                            <li><Link href="/privacy" className="hover:text-blue-600 transition-colors">Politique de Confidentialité</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Col */}
                    <div>
                        <h3 className="font-bold text-slate-900 mb-4">Restez Informé</h3>
                        <p className="text-sm text-gray-600 mb-4">Abonnez-vous pour les dernières nouvelles et offres.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Entrez votre email"
                                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                            <button className="p-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800">
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Sala Company. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
