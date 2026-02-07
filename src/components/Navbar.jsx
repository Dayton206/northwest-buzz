import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'Our Work', path: '/work' },
        { title: 'About Me', path: '/about' },
        { title: 'Blog', path: '/blog' },
        { title: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-white/5 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-white font-heading font-bold text-2xl tracking-tight z-50 relative">
                    ASK WILL <span className="text-brand-blue">FLYNN</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            to={link.path}
                            className={`text-sm font-medium transition-colors hover:text-brand-blue ${location.pathname === link.path ? 'text-brand-blue' : 'text-brand-light'
                                }`}
                        >
                            {link.title}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="bg-brand-blue hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg text-sm transition-all shadow-lg hover:shadow-blue-500/20"
                    >
                        Apply Now
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white z-50 relative"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="fixed inset-0 bg-brand-dark flex flex-col justify-center items-center z-40 md:hidden"
                        >
                            <div className="flex flex-col gap-8 text-center bg-brand-dark w-full h-full justify-center">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        to={link.path}
                                        className={`text-2xl font-heading font-bold ${location.pathname === link.path ? 'text-brand-blue' : 'text-white'
                                            }`}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                                <Link
                                    to="/contact"
                                    className="mt-4 bg-brand-blue text-white py-3 px-8 rounded-xl font-bold text-xl inline-block mx-12"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
