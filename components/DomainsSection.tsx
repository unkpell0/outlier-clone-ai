
import React from 'react';

const domains = [
    { name: 'Coding', icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg> },
    { name: 'Math', icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10H9m-4.04-4.29l1.41-1.42M20 12h-2m-1.46-5.29l-1.41-1.42M4 12H2m1.46 5.29l1.41 1.42M18.54 5.29l-1.41 1.42" /></svg> },
    { name: 'Chemistry', icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.443 2.216a2 2 0 001.28 1.558l3.655 1.462A2 2 0 0012 21.43l3.655-1.462a2 2 0 001.28-1.558l.443-2.216a2 2 0 00-.547-1.806z" /></svg> },
    { name: 'History', icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> },
    null, // Center block
    { name: 'Languages', icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5h12M9 3v2m4 13h4m-4-2v2m-2-2v-6a2 2 0 00-2-2H7a2 2 0 00-2 2v6m14-2V9a2 2 0 00-2-2h-3l-4 9" /></svg> },
    { name: 'Law', icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M12 4v7M8.5 4.5l-2 2M15.5 4.5l2 2" /><path d="M12 21.5V17" /></svg> },
    { name: 'Data Science', icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
    { name: 'Speech', icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg> },
];

const DomainCard = ({ domain }: { domain: { name: string, icon: React.ReactNode } | null }) => {
    if (!domain) {
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-white text-gray-900 rounded-2xl border border-gray-200 text-center">
                <h3 className="text-xl font-bold">And 30+ other expert domains</h3>
                <a href="#" className="mt-4 text-sm font-semibold text-purple-600 hover:text-purple-800">
                    Join Outlier Today &rarr;
                </a>
            </div>
        );
    }

    return (
        <div className="p-8 text-center border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
            <div className="w-10 h-10 mx-auto">{domain.icon}</div>
            <h3 className="mt-4 font-semibold">{domain.name}</h3>
        </div>
    );
};

export const DomainsSection: React.FC = () => {
    return (
        <section className="py-16 md:py-24 dark-section-bg text-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter">
                        Now <span className="gradient-text">hiring:</span> researchers, innovators, and Outliers
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Whether you have expertise in organic chemistry or creative writing, there's a place for you. Explore available freelance roles and sign up today!
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {domains.map((domain, index) => (
                       <DomainCard key={index} domain={domain} />
                    ))}
                </div>
            </div>
        </section>
    );
};
