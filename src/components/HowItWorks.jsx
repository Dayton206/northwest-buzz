import React from 'react';
import { Video, Smartphone, TrendingUp, Target, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const Step = ({ icon: Icon, number, title, description, points, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="flex flex-col md:flex-row gap-8 items-start relative pb-16 last:pb-0"
    >
        {/* Line connector */}
        <div className="hidden md:block absolute left-8 top-16 bottom-0 w-0.5 bg-brand-blue/20 last:hidden"></div>

        <div className="flex-shrink-0 relative z-10 group">
            <div className="w-16 h-16 rounded-2xl bg-brand-dark border border-brand-blue/20 flex items-center justify-center shadow-lg shadow-brand-blue/5 group-hover:shadow-brand-blue/20 group-hover:bg-brand-blue transition-all duration-300 group-hover:scale-110">
                <Icon size={32} className="text-brand-blue group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="absolute -top-3 -right-3 bg-brand-blue text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-brand-dark group-hover:scale-110 transition-transform">
                {number}
            </div>
        </div>

        <div className="flex-1 pt-2">
            <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-brand-blue transition-colors">{title}</h3>
            <motion.div
                whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className="bg-brand-dark/50 p-6 rounded-xl border border-white/5 transition-colors"
            >
                <p className="text-brand-light/80 mb-4 leading-relaxed">{description}</p>
                <ul className="space-y-2">
                    {points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-brand-gray text-sm">
                            <span className="text-brand-blue mt-1">✓</span>
                            {point}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    </motion.div>
);

export default function HowItWorks() {
    const steps = [
        {
            icon: Video,
            title: "We Film Your Best Work",
            description: "We come to your job sites and professionally film your installations. Multi-camera setup. Professional audio. You just do what you do best - we handle everything else.",
            points: ["Panel upgrades, Furnace installs, Re-pipes", "Professional multi-camera production", "Zero disruption to your workflow"]
        },
        {
            icon: Smartphone,
            title: "We Create Content for YOUR Channels",
            description: "We edit your installations into live streams, short-form clips, long-form tutorials, and professional ads.",
            points: ["Live stream installations", "30-60 second clips for social", "Deep-dive educational videos", "High-converting video ads"]
        },
        {
            icon: TrendingUp,
            title: "We Drive Organic Traffic",
            description: "We optimize everything for maximum visibility using YouTube SEO and social media algorithms. Your content gets found by people actively searching for your services.",
            points: ["YouTube SEO titles & thumbnails", "Strategic posting times", "Community engagement"]
        },
        {
            icon: Target,
            title: "We Run Strategic Paid Ads",
            description: "Organic builds trust. Paid ads convert. We create targeted campaigns that retarget warm leads and capture high-intent buyers.",
            points: ["Retargeting viewers (Warm audiences)", "High-intent search capture", "ROI optimization"]
        },
        {
            icon: DollarSign,
            title: "We Monetize Your Content",
            description: "Beyond leads, we unlock revenue streams most contractors never capture.",
            points: ["YouTube Ad Revenue", "Product Sponsorships", "Affiliate Commissions", "Digital Products"]
        }
    ];

    return (
        <section className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <img
                    src="/images/will/filming_action_1.png"
                    alt="Production set background"
                    className="w-full h-full object-cover grayscale opacity-40"
                />
                <div className="absolute inset-0 bg-brand-dark/95"></div>
            </div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        The Ask Will Flynn System
                    </h2>
                    <p className="text-xl text-brand-gray">
                        Five steps to <span className="text-brand-blue font-semibold">dominating</span> your local market
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <Step key={index} {...step} number={index + 1} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="mt-20 p-8 bg-gradient-to-r from-brand-blue/10 to-brand-dark border border-brand-blue/20 rounded-2xl text-center cursor-default"
                >
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">The Result?</h3>
                    <p className="text-brand-light">
                        A complete content engine that brings you customers on autopilot.
                        <br className="hidden md:block" />
                        <span className="text-brand-gray text-sm mt-2 block">And you didn't have to figure any of it out.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
