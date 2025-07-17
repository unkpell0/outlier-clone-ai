
import React from 'react';

const TrustpilotRating = () => (
    <div className="flex items-center space-x-2">
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.0001 17.8286L5.85728 21.9999L7.42871 14.9285L2.00012 10.2856L9.21441 9.57131L12.0001 3L14.7858 9.57131L22.0001 10.2856L16.5715 14.9285L18.143 21.9999L12.0001 17.8286Z"/>
        </svg>
        <span className="font-semibold text-sm text-gray-700">Trustpilot | 4.1</span>
    </div>
);

export const Hero: React.FC = () => {
    return (
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm font-medium mb-4">
                            Powered by Scale AI
                            <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight text-gray-900">
                            Use your <span className="brilliance-text">brilliance</span> to train AI (and get paid for it)
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                            Join 100k+ experts improving the accuracy of AI. Work from home, on your own schedule.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a href="#" className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-colors whitespace-nowrap">
                                VIEW OPPORTUNITIES
                            </a>
                            <TrustpilotRating />
                        </div>
                    </div>
                    <div className="relative">
                        <img 
                            src="https://images.unsplash.com/photo-1542330952-bffc55e812b2?q=80&w=1893&auto=format&fit=crop"
                            alt="A person working on a laptop in a cozy, warmly lit room" 
                            className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                        />
                    </div>
                </div>
                <div className="text-center mt-24">
                    <p className="text-sm text-gray-500 tracking-wide">Trusted by leading enterprises to accelerate AI development</p>
                </div>
            </div>
        </section>
    );
};
