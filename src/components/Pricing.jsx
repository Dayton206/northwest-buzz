import React from 'react';
import { Check, CheckCircle2, MessageSquare, Phone, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing() {
    return (
        <section className="py-24 bg-brand-dark relative overflow-hidden" id="pricing">
            {/* Subtle Background */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <img
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                    alt="Pricing background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-dark/95"></div>
            </div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        Two Packages. One Goal: <span className="text-brand-blue">Market Domination.</span>
                    </h2>
                    <p className="text-xl text-brand-gray">
                        Choose the level that fits your business goals
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {/* Growth Engine */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-brand-gray/30 transition-all duration-300 flex flex-col"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-heading font-bold text-white mb-2">GROWTH ENGINE</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-4xl font-bold text-brand-light">$3,000</span>
                                <span className="text-brand-gray">/month</span>
                            </div>
                            <p className="text-brand-gray text-sm">Perfect for contractors ready to build momentum</p>
                        </div>

                        <div className="space-y-8 flex-1">
                            {['Content Creation', 'Marketing & Ads', 'Full Management', 'Revenue Development'].map((cat, i) => (
                                <div key={i}>
                                    <p className="font-bold text-white mb-3 text-sm uppercase tracking-wider border-b border-white/5 pb-2">{cat}</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-brand-light/80 text-sm">
                                            <Check size={16} className="text-brand-blue mt-1 shrink-0" />
                                            {cat === 'Content Creation' && "36 pieces of content/mo (Live streams, shorts, educational)"}
                                            {cat === 'Marketing & Ads' && "Complete ad campaign setup & management"}
                                            {cat === 'Full Management' && "YouTube & Social optimization + Posting"}
                                            {cat === 'Revenue Development' && "Monetization setup + 75/25 rev split"}
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 pt-8 border-t border-white/10">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-transparent border border-white/20 hover:bg-white hover:text-brand-dark text-white font-bold py-4 rounded-xl transition-all"
                            >
                                Choose Growth Engine →
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Market Domination */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
                        className="bg-gradient-to-b from-brand-blue/10 to-brand-dark rounded-3xl p-8 border border-brand-blue/30 relative flex flex-col shadow-2xl shadow-brand-blue/10 transition-all duration-300"
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                            Most Popular
                        </div>

                        <div className="mb-8">
                            <h3 className="text-2xl font-heading font-bold text-white mb-2">MARKET DOMINATION</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-4xl font-bold text-brand-light">$5,500</span>
                                <span className="text-brand-gray">/month</span>
                            </div>
                            <p className="text-brand-gray text-sm">For ambitious contractors who want to OWN their market</p>
                        </div>

                        <div className="space-y-8 flex-1">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-brand-blue/10 p-4 rounded-xl border border-brand-blue/20 mb-6"
                            >
                                <div className="flex items-center gap-2 mb-2 text-brand-blue font-bold">
                                    <Zap size={18} />
                                    <span>AI Receptionist INCLUDED</span>
                                </div>
                                <p className="text-xs text-brand-light/80">24/7 phone answering, appointment scheduling ($500 value)</p>
                            </motion.div>

                            {['Content Creation', 'Advanced Marketing', 'Premium Management', 'Revenue Development'].map((cat, i) => (
                                <div key={i}>
                                    <p className="font-bold text-white mb-3 text-sm uppercase tracking-wider border-b border-brand-blue/10 pb-2">{cat}</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-brand-light/80 text-sm">
                                            <CheckCircle2 size={16} className="text-brand-blue mt-1 shrink-0" />
                                            {cat === 'Content Creation' && "76 pieces of content/mo (Double volume)"}
                                            {cat === 'Advanced Marketing' && "Multi-platform ads + higher budget management"}
                                            {cat === 'Premium Management' && "Priority support + Quarterly strategy sessions"}
                                            {cat === 'Revenue Development' && "Digital product creation support"}
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 pt-8 border-t border-brand-blue/20">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25"
                            >
                                Choose Market Domination →
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Add-ons */}
                <div className="max-w-4xl mx-auto mt-24 text-center">
                    <h3 className="text-2xl font-bold text-white mb-8">Supercharge Your Package</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                            whileHover={{ scale: 1.03, borderColor: "rgba(228,42,55,0.4)" }}
                            className="glass-card p-6 rounded-xl flex items-center gap-4 text-left border border-white/5 transition-colors cursor-pointer"
                        >
                            <div className="bg-brand-blue/10 p-3 rounded-full">
                                <Phone className="text-brand-blue" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">AI Receptionist</h4>
                                <p className="text-sm text-brand-gray">$500/month (Included in Market Domination)</p>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.03, borderColor: "rgba(228,42,55,0.4)" }}
                            className="glass-card p-6 rounded-xl flex items-center gap-4 text-left border border-white/5 transition-colors cursor-pointer"
                        >
                            <div className="bg-brand-blue/10 p-3 rounded-full">
                                <MessageSquare className="text-brand-blue" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">AI SEO</h4>
                                <p className="text-sm text-brand-gray">$2,500/month - Dominate Google Search</p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-12"
                    >
                        <a href="#" className="text-brand-gray hover:text-white underline underline-offset-4 decoration-brand-blue transition-colors">
                            Not sure which package? Schedule a free consultation
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
