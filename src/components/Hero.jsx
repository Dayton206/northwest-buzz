import React from 'react';
import { Play, TrendingUp, ShieldCheck, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
            {/* Background Image/Video Placeholder */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <img
                        src="/images/will/filming_action_3.png"
                        alt="Filming Action"
                        className="w-full h-full object-cover object-center opacity-80"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-brand-dark/20 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-brand-dark/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-32">
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-heading text-brand-blue uppercase tracking-widest text-sm mb-4 font-bold"
                    >
                        For Western Washington Contractors Only
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
                    >
                        Ask Will Flynn: Scale Your Business With <span className="text-brand-blue inline-block">Viral Content</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="font-sans text-xl md:text-2xl text-brand-light/90 mb-10 max-w-3xl mx-auto leading-relaxed"
                    >
                        I film your best work, build your personal brand, and create a content engine that brings you customers on autopilot.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a href="https://cal.com/will-flynn/free-consultation" target="_blank" rel="noopener noreferrer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg shadow-brand-blue/20"
                            >
                                Work With Will
                            </motion.button>
                        </a>

                        <a href="https://youtube.com/shorts/W4K2imSwDvQ?feature=share" target="_blank" rel="noopener noreferrer">
                            <motion.button
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 border-brand-light/30 hover:border-brand-light text-brand-light font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center gap-2 group"
                            >
                                <Play size={20} className="fill-current group-hover:text-brand-blue transition-colors" />
                                Watch How It Works
                            </motion.button>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Trust Badge Strip */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-0 left-0 right-0 bg-brand-dark/90 border-t border-brand-gray/10 py-6 backdrop-blur-sm z-20"
            >
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 text-brand-light/80 font-medium tracking-wide text-sm md:text-base">
                    {[
                        { icon: ShieldCheck, text: "No Long-Term Contracts" },
                        { icon: Lock, text: "You Own All Content" },
                        { icon: TrendingUp, text: "30-Day Content Guarantee" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, color: "#fff" }}
                            className="flex items-center gap-2 cursor-default"
                        >
                            <item.icon className="text-brand-blue" size={20} />
                            <span>{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
