import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Rocket, Award } from 'lucide-react';

export default function About() {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
                    >
                        About <span className="text-brand-blue">Me</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-brand-light max-w-3xl mx-auto"
                    >
                        I'm Will Flynn—a filmmaker, marketing strategist, and former aerospace machinist dedicated to helping entrepreneurs build high-impact content engines.
                    </motion.p>
                </div>

                {/* Background Section */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-brand-blue/20 rounded-3xl rotate-3"></div>
                        <img
                            src="/images/will/will_profile_about.png"
                            alt="Will Flynn Profile"
                            className="relative rounded-2xl w-full shadow-2xl border-2 border-white/10"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">From The Shop Floor To The Director's Chair</h2>
                        <div className="space-y-6 text-brand-light/80 leading-relaxed text-lg">
                            <p>
                                My path wasn't typical. Before I was building content engines, I spent <span className="text-white font-bold">10 years as an Aerospace Machinist</span>. I learned the value of precision, hard work, and complex systems on the shop floor.
                            </p>
                            <p>
                                While working full-time, I earned my <span className="text-brand-blue font-bold">Bachelor's Degree in Business and Marketing</span>. That formal education combined with my technical background allowed me to transition into the fast-paced world of marketing.
                            </p>
                            <p>
                                Since then, I've spent <span className="text-white font-bold">10 years as a Marketing Director</span> for various agencies, leading high-level strategies for diverse brands. Complementing this is my <span className="text-white font-bold">8 years of experience as a Professional Videographer</span>, giving me the unique ability to both strategize <em>and</em> execute world-class content.
                            </p>
                            <p>
                                I bridge the gap between technical expertise and creative storytelling. I speak the language of the shop floor and the boardroom.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Values */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Users, title: "Authenticity First", desc: "No scripts. No fake actors. Just real work." },
                        { icon: Rocket, title: "Growth Mindset", desc: "We don't just want you to survive. We want you to dominate." },
                        { icon: Target, title: "Hyper-Local", desc: "We only serve Western Washington. We know this market." }
                    ].map((val, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-brand-blue/30 transition-colors"
                        >
                            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 text-brand-blue">
                                <val.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                            <p className="text-brand-light/70">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Gallery */}
                <div className="mt-32">
                    <h2 className="text-3xl font-heading font-bold text-center text-white mb-12">Behind The Scenes</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        ].map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                whileHover={{ y: -10 }}
                                className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg border border-white/5"
                            >
                                <img src={src} alt="Behind the scenes" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
