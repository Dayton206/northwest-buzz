import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-b border-white/10 last:border-0"
        >
            <button
                className="w-full py-6 flex items-center justify-between text-left hover:text-brand-blue transition-colors group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-bold text-white pr-8 group-hover:text-brand-blue transition-colors">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? <ChevronUp className="text-brand-blue shrink-0" /> : <ChevronDown className="text-brand-gray shrink-0 group-hover:text-brand-blue" />}
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-brand-light/80 leading-relaxed max-w-3xl">
                            {answer.split('\n').map((line, i) => (
                                <p key={i} className="mb-2 last:mb-0">{line}</p>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function FAQ() {
    const faqs = [
        {
            question: "I'm not comfortable on camera. Can I still do this?",
            answer: "Honestly? Probably not. Being on camera is essential to this working.\nThat said - most contractors get WAY more comfortable after 2-3 filming sessions. We coach you through it. If you're willing to try, we can work with you."
        },
        {
            question: "How long before I see results?",
            answer: "Most contractors start seeing inbound inquiries within 30-60 days.\nBuilding serious momentum typically takes 3-6 months. Passive revenue streams kick in around month 4-6. This is building a sustainable asset, not a get-rich-quick scheme."
        },
        {
            question: "What if my competitors are already doing this?",
            answer: "Good. That validates the market. The key is being FIRST in your area and being CONSISTENT.\nWe won't work with direct competitors in overlapping service areas, so once you're in, your competition can't use us."
        },
        {
            question: "Do I own the content you create?",
            answer: "Yes. 100%. All content created belongs to you. Forever.\nYou can use it however you want, even if we stop working together."
        },
        {
            question: "How much time does this take from me?",
            answer: "Minimal. When we film: 2-4 hours per installation (you're working anyway). Total time commitment: 4-8 hours per month. We handle everything else."
        },
        {
            question: "What happens if I want to cancel?",
            answer: "After your initial commitment period, you can cancel anytime with 30 days notice. No penalties. You keep all the content."
        }
    ];

    return (
        <section className="py-24 bg-brand-dark">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        Questions? <span className="text-brand-blue">We've Got Answers.</span>
                    </h2>
                </motion.div>

                <div className="bg-white/5 rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
}
