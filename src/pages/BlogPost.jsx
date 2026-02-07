import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.id === id);

    useEffect(() => {
        if (!post) {
            navigate('/blog');
        }
    }, [post, navigate]);

    if (!post) return null;

    return (
        <article className="pt-32 pb-24 min-h-screen">
            {/* Hero Image */}
            <div className="w-full h-[400px] md:h-[500px] relative mb-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10"></div>
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="max-w-3xl mx-auto px-6 relative z-20 -mt-32">
                <Link to="/blog" className="inline-flex items-center gap-2 text-brand-light/70 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to Blog
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-brand-dark/80 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl"
                >
                    <div className="flex flex-wrap gap-4 items-center mb-6 text-sm font-medium">
                        <span className="flex items-center gap-2 text-brand-blue">
                            <Tag size={16} /> {post.category}
                        </span>
                        <span className="flex items-center gap-2 text-brand-gray">
                            <Calendar size={16} /> {post.date}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div
                        className="prose prose-lg prose-invert text-brand-light/90 max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
                        <div className="text-brand-gray">
                            Share this article
                        </div>
                        <div className="flex gap-4">
                            <button className="p-2 bg-white/5 rounded-full hover:bg-brand-blue hover:text-white transition-colors">
                                <Share2 size={20} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </article>
    );
}
