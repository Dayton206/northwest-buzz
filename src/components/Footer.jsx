import React from 'react';
import { Youtube, Instagram, Facebook, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-brand-gray py-16 border-t border-white/10 text-sm relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <img
                    src="/images/will/hero_subtle.png"
                    alt="Will Flynn Background"
                    className="w-full h-full object-cover object-center opacity-30"
                />
            </div>
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 relative z-10">
                <div className="col-span-1 md:col-span-2">
                    <h4 className="text-white font-heading font-bold text-2xl mb-6">ASK WILL FLYNN</h4>
                    <p className="mb-6 max-w-sm">
                        We build content engines for Western Washington's top contractors. Turn your installations into a lead-generating asset.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-brand-blue transition-colors"><Youtube size={20} /></a>
                        <a href="#" className="hover:text-brand-blue transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-brand-blue transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-brand-blue transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div>
                    <h5 className="text-white font-bold mb-6 tracking-wide">CONTACT</h5>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <MapPin size={16} className="text-brand-blue" />
                            Bothell, WA
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={16} className="text-brand-blue" />
                            will@askwillflynn.com
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={16} className="text-brand-blue" />
                            (425) 318-5829
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-white font-bold mb-6 tracking-wide">LEGAL</h5>
                    <ul className="space-y-4">
                        <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-xs text-stone-500">
                © 2026 Ask Will Flynn. All rights reserved.
            </div>
        </footer>
    );
}
