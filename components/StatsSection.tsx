
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const stats = [
    {
        icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>,
        value: '$2B+',
        label: 'Assets Under Management'
    },
    {
        icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>,
        value: '5,000+',
        label: 'Satisfied Clients'
    },
    {
        icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.905 11A9 9 0 0012 5.055 9 9 0 0016.095 11M12 21a9 9 0 00-9-9h18a9 9 0 00-9 9z"></path></svg>,
        value: '15+',
        label: 'Years of Experience'
    }
];

export const StatsSection: React.FC = () => {
    const [ref, isOnScreen] = useOnScreen<HTMLDivElement>({ threshold: 0.2 });

    return (
        <section ref={ref} className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                 <div className={`transition-opacity duration-1000 ${isOnScreen ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-center tracking-tighter text-gray-900">
                        Decades of <span className="gradient-text">proven success</span> and client trust
                    </h2>
                </div>
                <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center transition-all duration-700 ease-out ${isOnScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {stats.map((stat, index) => (
                        <div key={index} className="p-8">
                            <div className="flex items-center justify-center h-16 w-16 mx-auto bg-white rounded-full shadow-md text-purple-600">
                                {stat.icon}
                            </div>
                            <p className="mt-6 text-4xl font-bold text-gray-900">{stat.value}</p>
                            <p className="mt-1 text-base text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
