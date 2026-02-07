import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', company: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert('Thanks for reaching out! We will be in touch shortly.');
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="mb-8 w-32 h-32 rounded-full overflow-hidden border-4 border-brand-blue/30">
                            <img src="/images/will/headshot.jpg" alt="Will Flynn" className="w-full h-full object-cover" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                            Let's Build Your <br /><span className="text-brand-blue">Content Engine</span>
                        </h1>
                        <p className="text-xl text-brand-gray mb-12">
                            Ready to stop chasing leads and start attracting them? Fill out the form or give me a call. I'm currently accepting new partners.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-full text-brand-blue"><Phone size={24} /></div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Call Me</h3>
                                    <p className="text-brand-light/70">(425) 318-5829</p>
                                    <p className="text-sm text-brand-gray mt-1">Mon-Fri, 8am - 6pm PST</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-full text-brand-blue"><Mail size={24} /></div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Email Me</h3>
                                    <p className="text-brand-light/70">will@askwillflynn.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-full text-brand-blue"><MapPin size={24} /></div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Visit HQ</h3>
                                    <p className="text-brand-light/70">Bothell, WA</p>
                                    <p className="text-sm text-brand-gray mt-1">serving the Greater Seattle Area</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-brand-dark/50 p-8 rounded-3xl border border-white/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-light ml-1">Name</label>
                                    <input
                                        type="text" name="name" required
                                        className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-blue/50 transition-colors"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-light ml-1">Company</label>
                                    <input
                                        type="text" name="company"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-blue/50 transition-colors"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-light ml-1">Email</label>
                                    <input
                                        type="email" name="email" required
                                        className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-blue/50 transition-colors"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-light ml-1">Phone</label>
                                    <input
                                        type="tel" name="phone"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-blue/50 transition-colors"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-brand-light ml-1">Message</label>
                                <textarea
                                    name="message" rows="4"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-blue/50 transition-colors"
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
