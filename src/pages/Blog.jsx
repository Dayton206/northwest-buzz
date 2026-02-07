import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPostCard = ({ id, title, date, category, excerpt, image, delay }) => (
    <Link to={`/blog/${id}`}>
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="group cursor-pointer bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors border border-white/5 hover:border-white/20 h-full flex flex-col"
        >
            <div className="aspect-video overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-3">
                    <span className="text-brand-blue">{category}</span>
                    <span className="text-brand-gray">•</span>
                    <span className="text-brand-gray">{date}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">{title}</h3>
                <p className="text-brand-light/70 text-sm mb-6 line-clamp-3">{excerpt}</p>
                <div className="mt-auto flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={16} className="text-brand-blue" />
                </div>
            </div>
        </motion.article>
    </Link>
);

export default function Blog() {
    const posts = blogPosts;

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
                    >
                        The <span className="text-brand-blue">Buzz</span> Blog
                    </motion.h1>
                    <p className="text-xl text-brand-gray max-w-2xl mx-auto">
                        Insights, strategies, and stories for contractors who want to build a better business.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <BlogPostCard key={index} {...post} delay={index * 0.1} />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="bg-transparent border border-white/20 hover:bg-white hover:text-brand-dark text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center gap-2 mx-auto">
                        <BookOpen size={20} /> View All Articles
                    </button>
                </div>
            </div>
        </div>
    );
}
