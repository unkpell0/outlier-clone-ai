
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

export const CTASection: React.FC = () => {
    const [ref, isOnScreen] = useOnScreen<HTMLDivElement>({ threshold: 0.2 });

    return (
        <section ref={ref} className="py-10 bg-white">
            <div className="container mx-auto px-6">
                <div className={`relative overflow-hidden rounded-2xl cta-gradient-bg p-8 md:p-12 text-white transition-all duration-1000 ease-out ${isOnScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center md:text-left">
                            Ready to take control of your financial future?
                        </h2>
                        <a href="#" className="inline-block px-8 py-3 text-base font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-200 transition-colors shadow-lg whitespace-nowrap">
                            SCHEDULE A FREE CONSULTATION
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
