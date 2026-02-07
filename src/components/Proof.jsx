import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Proof() {
    return (
        <section className="py-24 bg-white/5 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
                        Real Contractor. <span className="text-brand-blue">Real Results.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-brand-dark rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:shadow-brand-blue/10 transition-shadow duration-500"
                >
                    <div className="grid lg:grid-cols-2">
                        {/* Image Side (Placeholder) */}
                        <a href="https://youtube.com/shorts/0VtpaBcGXv8?feature=share" target="_blank" rel="noopener noreferrer" className="relative h-96 lg:h-auto bg-gray-800 group cursor-pointer overflow-hidden block">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                            {/* This would be the split screen image */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-20 h-20 bg-brand-blue/90 rounded-full flex items-center justify-center shadow-lg shadow-brand-blue/20 backdrop-blur-sm"
                                >
                                    <Play className="text-white fill-current ml-1" size={32} />
                                </motion.div>
                            </div>
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.8 }}
                                src="/images/will/filming_action_2.png"
                                alt="Contractor Case Study"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute bottom-8 left-8 z-20">
                                <p className="text-brand-light text-sm uppercase tracking-widest font-bold mb-1">Featured Case Study</p>
                                <h3 className="text-2xl font-bold text-white">Seattle Electrician</h3>
                                <p className="text-white/80">"This completely changed my business"</p>
                            </div>
                        </a>

                        {/* Content Side */}
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-1 w-12 bg-brand-blue rounded-full"></div>
                                    <span className="text-brand-gray uppercase tracking-widest text-sm font-bold">The Transformation</span>
                                </div>
                                <blockquote className="text-xl md:text-2xl font-medium text-brand-light italic leading-relaxed mb-8">
                                    "I'm getting hundreds of thousands of views every month. My phone rings with people who've already watched my videos."
                                </blockquote>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { val: "500K+", label: "Monthly Views" },
                                    { val: "$5,000+", label: "Saved on Ad Spend" },
                                    { val: "3,000+", label: "New Monthly Subs" },
                                    { val: "21%", label: "Job Value Increase", red: true }
                                ].map((stat, i) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                                        transition={{ delay: i * 0.1 }}
                                        key={i}
                                        className="bg-white/5 p-4 rounded-xl border border-white/5 cursor-default"
                                    >
                                        <p className={`text-3xl font-heading font-bold mb-1 ${stat.red ? 'text-brand-blue' : 'text-white'}`}>{stat.val}</p>
                                        <p className="text-brand-gray text-sm">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <a href="https://youtube.com/shorts/0VtpaBcGXv8?feature=share" target="_blank" rel="noopener noreferrer">
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="mt-8 text-brand-blue font-bold hover:text-white transition-colors flex items-center gap-2 group w-fit"
                                >
                                    Watch His Full Story
                                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                </motion.button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
