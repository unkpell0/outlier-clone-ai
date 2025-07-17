
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const features = [
    {
        title: '1. Discovery & Goal Setting',
        description: 'We start with a deep dive into your current financial situation, long-term aspirations, and risk tolerance.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop'
    },
    {
        title: '2. Strategy & Plan Development',
        description: 'Our experts craft a personalized financial strategy, selecting the right investment vehicles and asset allocation for you.',
        image: 'https://images.unsplash.com/photo-1640653799842-55737a43d02a?q=80&w=1740&auto=format&fit=crop'
    },
    {
        title: '3. Implementation & Monitoring',
        description: 'We put your plan into action and provide continuous monitoring and regular reviews to keep you on track.',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1740&auto=format&fit=crop'
    }
];

export const HowItWorks: React.FC = () => {
    const [ref, isOnScreen] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

    return (
        <section ref={ref} className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className={`text-center transition-opacity duration-1000 ${isOnScreen ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-gray-900">
                        A <span className="gradient-text">clear path</span> to your financial goals.
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Our structured approach ensures your financial plan is built on a solid foundation.
                    </p>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div 
                          key={index} 
                          className={`text-center transition-all duration-700 ease-out ${isOnScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                          style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="p-2 bg-gray-50 rounded-2xl shadow-sm">
                                <img src={feature.image} alt={feature.title} className="rounded-xl aspect-[4/3] object-cover"/>
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-900">{feature.title}</h3>
                            <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
