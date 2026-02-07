import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Play, Award } from 'lucide-react';

const clients = [
    {
        name: "Elving Electric",
        niche: "Electrical Contractor",
        image: "/images/clients/elving_electric.jpg",
        stats: "Multiple Viral Reels",
        description: "From standard service calls to viral sensations. We helped transform their daily work into engaging content that resonates with homeowners.",
        highlight: "100k+ Views"
    },
    {
        name: "Clubhouse Capital",
        niche: "Real Estate Investment",
        image: "/images/clients/clubhouse_capital.png",
        stats: "39.9K+ Likes",
        description: "Jim Thorpe is an authority. We just amplified his voice. His educational content now reaches tens of thousands of potential investors.",
        highlight: "Market Leader"
    },
    {
        name: "Ask Will Flynn",
        niche: "Business Consulting",
        image: "/images/clients/ask_will_flynn.png",
        stats: "1.3M+ Video Views",
        description: "Will's authentic, no-nonsense advice went viral multiple times, establishing him as a go-to thought leader in his space.",
        highlight: "Viral Growth"
    },
    {
        name: "Anthony P. Langdon",
        niche: "Perspective Coach",
        image: "/images/clients/anthony_langdon.png",
        stats: "9.48K Subscribers",
        description: "Consistent high-value content turned his YouTube channel into a lead generation machine for his coaching business.",
        highlight: "Community Builder"
    }
];

export default function OurWork() {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
                    >
                        Real Results. <span className="text-brand-blue">Real Growth.</span>
                    </motion.h1>
                    <p className="text-xl text-brand-gray max-w-2xl mx-auto">
                        We don't just talk about viral content. We build it. Here are just a few of the brands we've helped dominate their market.
                    </p>
                </div>

                {/* Clients Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 rounded-3xl overflow-hidden border border-white/5 hover:border-brand-blue/30 transition-all group"
                        >
                            {/* Browser-like Frame header */}
                            <div className="bg-brand-dark/50 p-4 border-b border-white/5 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                <div className="ml-4 text-xs text-brand-gray font-mono opacity-50 flex-grow text-center">
                                    {client.name.toLowerCase().replace(/\s/g, '')}.com
                                </div>
                            </div>

                            {/* Image Container */}
                            <div className="aspect-[16/11] overflow-hidden relative bg-black">
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10 opacity-60"></div>
                                <img
                                    src={client.image}
                                    alt={client.name}
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                                />

                                {/* Overlay Stats */}
                                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                                    <span className="px-3 py-1 bg-brand-blue text-white text-xs font-bold rounded-full shadow-lg">
                                        {client.stats}
                                    </span>
                                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/10">
                                        {client.highlight}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-heading font-bold text-white">{client.name}</h3>
                                    <span className="text-xs font-bold uppercase tracking-wider text-brand-gray border border-brand-gray/20 px-2 py-1 rounded">
                                        {client.niche}
                                    </span>
                                </div>
                                <p className="text-brand-light/70 leading-relaxed">
                                    {client.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center"
                >
                    <h2 className="text-3xl font-heading font-bold text-white mb-8">Ready to be our next success story?</h2>
                    <a href="/contact" className="inline-block bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 px-12 rounded-xl transition-all shadow-lg hover:shadow-brand-blue/25 hover:-translate-y-1">
                        Start Your Project
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
