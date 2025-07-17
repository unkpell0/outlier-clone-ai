
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const features = [
    {
        title: 'Train smarter, faster AI',
        description: 'Lead AI to it\'s next breakthrough by challenging its logic, accuracy, and reasoning.',
        image: 'https://cdn.dribbble.com/userupload/3859664/file/original-2c74eda85f233483259b3437119f391a.png?resize=1200x900'
    },
    {
        title: 'Work with the brightest minds',
        description: 'Connect and share insights with domain specialists shaping the next generation of AI.',
        image: 'https://cdn.dribbble.com/userupload/10415392/file/original-b2585918732152b822d4aa2e9f0866e4.png?resize=1200x900'
    },
    {
        title: 'Earn for your expertise',
        description: 'Get paid for the knowledge you\'ve spent years building. Work from anywhere, anytime.',
        image: 'https://cdn.dribbble.com/userupload/4117978/file/original-c75c5e311893c87328570530d93132bb.png?resize=1200x900'
    }
];

export const HowItWorks: React.FC = () => {
    const [ref, isOnScreen] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

    return (
        <section ref={ref} className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className={`text-center transition-opacity duration-1000 ${isOnScreen ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-gray-900">
                        We're <span className="gradient-text">re-defining</span> how AI learns.
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Powered by domain experts like you.
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
