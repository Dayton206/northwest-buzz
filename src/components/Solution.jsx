import React from 'react';
import { motion } from 'framer-motion';

export default function Solution() {
    return (
        <section className="py-24 bg-gradient-to-br from-brand-dark via-[#1a2e38] to-brand-dark border-y border-white/5 overflow-hidden relative">
            {/* Subtle Background */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                    alt="Growth background"
                    className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-brand-dark/90"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        What If Your Installations Generated Leads... <span className="text-brand-blue">Forever?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-brand-gray mb-16">
                        That's exactly what we build for Western Washington's top contractors.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-brand-dark/50 backdrop-blur-sm rounded-3xl border border-brand-blue/10 shadow-2xl shadow-brand-blue/5 hover:border-brand-blue/20 transition-all duration-500 overflow-hidden"
                >
                    <div className="grid lg:grid-cols-2">
                        <div className="relative h-64 lg:h-auto overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 to-transparent z-10 lg:hidden"></div>
                            <img
                                src="/images/will/filming_ev_charger.jpg"
                                alt="Filming EV Charger installation"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-8 md:p-12 space-y-8 font-sans text-lg md:text-xl text-brand-light/90 leading-relaxed text-left">
                            <p className="font-bold text-2xl text-white">Imagine this:</p>

                            <p>
                                You install a furnace. We film it. We turn it into professional content for <span className="text-brand-blue font-bold">YOUR</span> YouTube channel and social media.
                            </p>

                            <p>
                                Homeowners watch it. They see your expertise. They trust you before they even call. Some book jobs immediately. Others watch for months, then call when they're ready.
                            </p>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="text-white font-semibold bg-white/5 p-6 rounded-xl border-l-4 border-brand-blue shadow-lg"
                            >
                                That ONE installation video works for you 24/7. For months. For years.
                            </motion.div>

                            <p>
                                Meanwhile, you're earning YouTube ad revenue, sponsorship deals, and affiliate commissions from that same content.
                            </p>

                            <div className="pt-4 border-t border-white/10">
                                <p className="font-heading text-2xl md:text-3xl text-white font-bold mb-2">
                                    One installation = Multiple revenue streams.
                                </p>
                                <p className="text-brand-gray text-base uppercase tracking-widest">
                                    That's what Ask Will Flynn builds for you.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
