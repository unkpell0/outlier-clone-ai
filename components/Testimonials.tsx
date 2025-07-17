
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const testimonials = [
    {
        quote: "Outlier is life changing for me, I have a lot more peace and I can work from anywhere whenever I want. I now have time for myself and hobbies without being tired. I could plan to go on a trip and work a couple of hours per day.",
        author: "Enzo D.",
        title: "Language Specialist, Netherlands",
        color: 'dark'
    },
    {
        quote: "I view Outlier as a great opportunity for contributors to work flexibly, improve their skills, and earn more money at their own pace.",
        author: "Vaibhav P.",
        title: "Coding Expert, India",
        color: 'light'
    },
    {
        quote: "Working remotely has given me the ability to strike the perfect balance between nurturing my family and pursuing professional goals.",
        author: "Casey R.",
        title: "Generalist",
        color: 'light'
    },
    {
        quote: "I've worked on other platforms, but there is absolutely no support available. At Outlier, you're really getting into an online community.",
        author: "Scott O.",
        title: "Generalist",
        color: 'light'
    },
    {
        quote: "The flexibility is amazing. I have a small child, so being able to log in at night when everything is quiet makes a huge difference. It gives me the freedom to balance work and life in a way that a regular job wouldn't.",
        author: "Mack D.",
        title: "Language Specialist, Danish",
        color: 'light'
    },
    {
        quote: "The work itself is fun. I'm learning about such a broad variety of topics because every time you see a task, you learn something new. I just learned some cool Swiss recipes for apple fritters.",
        author: "Dailah B.",
        title: "Language Specialist, German",
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
                        Meet the <span className="gradient-text">experts</span> training AI on Outlier
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
