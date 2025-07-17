
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const testimonials = [
    {
        quote: "Strive Financial helped demystify investing for me. Their team is patient, knowledgeable, and genuinely cares about my success. I feel so much more confident about my retirement.",
        author: "Sarah K.",
        title: "Tech Executive",
        color: 'dark'
    },
    {
        quote: "The personalized plan they created was a game-changer. For the first time, I have a clear roadmap for my family's financial future.",
        author: "Michael B.",
        title: "Small Business Owner",
        color: 'light'
    },
    {
        quote: "Working with Strive has been incredibly reassuring. Their proactive approach means my portfolio is always optimized, even in volatile markets.",
        author: "Emily T.",
        title: "Doctor",
        color: 'light'
    },
    {
        quote: "I was impressed by their transparency and commitment. They took the time to explain every decision and made sure I was comfortable with the strategy.",
        author: "David L.",
        title: "Retiree",
        color: 'light'
    },
    {
        quote: "As a freelancer, my income can be unpredictable. Strive helped me create a flexible financial plan that provides security and growth. It's been a huge weight off my shoulders.",
        author: "Chloe J.",
        title: "Creative Director",
        color: 'light'
    },
    {
        quote: "Their expertise in tax-efficient investing has saved me a significant amount of money. They're not just consultants; they're true partners in wealth building.",
        author: "Ben Carter",
        title: "Entrepreneur",
        color: 'purple'
    },
];

const TestimonialCard = ({ quote, author, title, color }) => {
    const colorClasses = {
        dark: 'bg-gray-800 text-white',
        light: 'bg-gray-100 text-gray-800',
        purple: 'bg-purple-600 text-white'
    };
    
    return (
        <div className={`p-8 rounded-2xl testimonial-card ${colorClasses[color]}`}>
            <p className="text-base font-medium">{quote}</p>
            <div className="mt-6 flex items-center space-x-3">
                <img className="w-10 h-10 rounded-full" src={`https://i.pravatar.cc/40?u=${author}`} alt={author} />
                <div>
                    <p className={`font-bold text-sm ${color === 'light' ? 'text-gray-900' : 'text-white'}`}>{author}</p>
                    <p className={`text-sm ${color === 'light' ? 'text-gray-600' : 'text-purple-200'}`}>{title}</p>
                </div>
            </div>
        </div>
    );
};

export const Testimonials: React.FC = () => {
    const [ref, isOnScreen] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

    return (
        <section ref={ref} className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                 <div className={`text-center transition-opacity duration-1000 ${isOnScreen ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-gray-900">
                        What our <span className="gradient-text">clients</span> are saying
                    </h2>
                </div>

                <div className={`mt-16 testimonial-masonry transition-opacity duration-1000 ${isOnScreen ? 'opacity-100' : 'opacity-0'}`}>
                    {testimonials.map((testimonial, index) => (
                       <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};
