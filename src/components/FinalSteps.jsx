import React from 'react';
import { Check, X, Phone, Calendar, ArrowRight, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalSteps() {
    return (
        <div className="bg-brand-dark text-white relative overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
                <img
                    src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                    alt="Background texture"
                    className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-brand-dark/95"></div>
            </div>

            {/* Risk Reversal */}
            <section className="py-16 bg-brand-blue/5 border-y border-brand-blue/10 relative z-10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-4 font-heading">Our 30-Day Content Guarantee</h3>
                        <p className="text-brand-light">
                            If we don't deliver the promised content in your first 30 days, we'll refund that month and create the content for free.
                            <br /><span className="font-bold text-white">No questions asked.</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Who This Is For */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">This Isn't For Everyone</h2>
                    <p className="text-brand-gray">We're selective about who we partner with.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-brand-dark/50 p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-colors"
                    >
                        <h3 className="text-xl font-bold mb-6 text-green-400">You're a PERFECT FIT if:</h3>
                        <ul className="space-y-4">
                            {[
                                "You're camera-comfortable (or willing to learn)",
                                "You're one of the BEST at what you do",
                                "You want to build long-term assets, not overnight magic",
                                "You're in Western Washington (Seattle-Tacoma-Everett)",
                                "You're ready to invest in your business growth"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-brand-light/90">
                                    <Check className="text-green-500 shrink-0 mt-1" size={18} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-brand-dark/50 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-colors"
                    >
                        <h3 className="text-xl font-bold mb-6 text-red-400">You're NOT a fit if:</h3>
                        <ul className="space-y-4">
                            {[
                                "You're camera-shy or won't show your process",
                                "You want instant 24-hour results",
                                "You're outside Western Washington",
                                "You're brand new (less than 2 years in business)",
                                "You treat marketing as an expense, not an investment"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-brand-light/90">
                                    <X className="text-red-500 shrink-0 mt-1" size={18} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Urgency */}
            <section className="py-12 bg-gradient-to-r from-brand-dark via-brand-blue/10 to-brand-dark">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto px-6 text-center"
                >
                    <div className="inline-flex items-center gap-2 bg-brand-blue/20 text-brand-blue px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-6 animate-pulse">
                        <AlertTriangle size={16} />
                        Limited Availability
                    </div>
                    <h2 className="text-3xl font-heading font-bold mb-4">Accepting 3 New Partnerships This Month</h2>
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-brand-light/80 mt-6">
                        <span className="bg-black/40 px-3 py-1 rounded border border-white/10">✅ HVAC: 2 spots</span>
                        <span className="bg-brand-blue/20 px-3 py-1 rounded border border-brand-blue/30 text-white">⚠️ Electrical: 1 spot</span>
                        <span className="bg-black/40 px-3 py-1 rounded border border-white/10">✅ Plumbing: 3 spots</span>
                    </div>
                </motion.div>
            </section>

            {/* Final CTA */}
            <section className="py-24 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                        Ready to Build Your <br /><span className="text-brand-blue">Content Empire?</span>
                    </h2>
                    <p className="text-xl text-brand-gray mb-12">Two ways to get started:</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white text-brand-dark p-8 rounded-2xl hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.3)] transition-all duration-300"
                    >
                        <h3 className="text-2xl font-bold mb-2">Apply Now</h3>
                        <p className="text-gray-600 mb-6 text-sm">Fill out our quick application. We'll review within 24 hours.</p>
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                                <ArrowRight className="text-brand-blue" size={24} />
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg border-2 border-transparent"
                        >
                            Apply Now - Limited Spots
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        transition={{ delay: 0.2 }}
                        className="bg-brand-dark border border-white/10 p-8 rounded-2xl hover:border-white/30 transition-all duration-300"
                    >
                        <h3 className="text-2xl font-bold mb-2 text-white">Schedule a Call</h3>
                        <p className="text-brand-gray/80 mb-6 text-sm">Chat with Will Flynn. No pressure. Just a real conversation.</p>
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                <Calendar className="text-white" size={24} />
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-transparent border border-white/20 hover:bg-white hover:text-brand-dark text-white font-bold py-4 rounded-xl transition-all"
                        >
                            Schedule Free Consultation
                        </motion.button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-brand-gray"
                >
                    <p className="flex items-center justify-center gap-2">
                        <Phone size={16} /> Or just call/text Will: (425) 318-5829
                    </p>
                </motion.div>
            </section>
        </div>
    );
}
