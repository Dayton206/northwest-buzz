import React from 'react';
import { DollarSign, Users, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Problem() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                    alt="Background pattern"
                    className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-brand-dark/80"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        You're Losing Money <span className="text-brand-blue">Every Single Day</span>
                    </h2>
                    <motion.p
                        initial={{ opacity: 0, rotate: -1, scale: 0.9 }}
                        whileInView={{ opacity: 1, rotate: -1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="font-signature text-3xl text-brand-gray/80 transform -rotate-1 inline-block"
                    >
                        And you don't even realize it.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {/* Card 1 */}
                    <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl relative group hover:bg-brand-dark/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/5 hover:border-brand-blue/20">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-dark p-4 rounded-full border border-brand-blue/20 shadow-lg shadow-brand-blue/10 group-hover:scale-110 transition-transform duration-300">
                            <TrendingDown size={32} className="text-brand-blue" />
                        </div>
                        <h3 className="mt-8 text-xl font-heading font-bold text-white mb-4 text-center group-hover:text-brand-blue transition-colors">Expensive Leads That Disappear</h3>
                        <p className="text-brand-light/70 leading-relaxed mb-4">
                            You're paying $800, $1,200, maybe $1,500/month for leads from Angi, HomeAdvisor, or Google Ads.
                        </p>
                        <p className="text-brand-light/70 font-semibold">
                            The second you stop paying? <span className="text-white">The leads stop.</span>
                        </p>
                        <p className="mt-4 text-sm text-brand-gray">
                            You've built nothing. You own nothing. You're renting customers.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl relative group hover:bg-brand-dark/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/5 hover:border-brand-blue/20">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-dark p-4 rounded-full border border-brand-blue/20 shadow-lg shadow-brand-blue/10 group-hover:scale-110 transition-transform duration-300">
                            <Users size={32} className="text-brand-blue" />
                        </div>
                        <h3 className="mt-8 text-xl font-heading font-bold text-white mb-4 text-center group-hover:text-brand-blue transition-colors">Price-Shopping Customers</h3>
                        <p className="text-brand-light/70 leading-relaxed mb-4">
                            The leads you DO get are calling 5 other contractors. They don't know you. They don't trust you.
                        </p>
                        <p className="text-brand-light/70 font-semibold">
                            They just want the <span className="text-white">cheapest price.</span>
                        </p>
                        <p className="mt-4 text-sm text-brand-gray">
                            You're competing on price instead of value. And it's killing your margins.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl relative group hover:bg-brand-dark/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/5 hover:border-brand-blue/20">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-dark p-4 rounded-full border border-brand-blue/20 shadow-lg shadow-brand-blue/10 group-hover:scale-110 transition-transform duration-300">
                            <DollarSign size={32} className="text-brand-blue" />
                        </div>
                        <h3 className="mt-8 text-xl font-heading font-bold text-white mb-4 text-center group-hover:text-brand-blue transition-colors">Leaving Money on the Table</h3>
                        <p className="text-brand-light/70 leading-relaxed mb-4">
                            Every panel upgrade, furnace install, and re-pipe you do could be generating YouTube ad revenue, sponsorships, and long-term content.
                        </p>
                        <p className="text-brand-light/70 font-semibold">
                            But instead? <span className="text-white">Nobody even knows you did the work.</span>
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <p className="text-2xl font-heading font-bold text-white">
                        There's a better way. And it starts with <span className="text-brand-blue underline decoration-brand-blue/50 underline-offset-4 decoration-2">content</span>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
