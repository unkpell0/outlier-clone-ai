
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const logos = [
    { name: 'Microsoft', svg: <svg className="h-8 text-gray-400" fill="currentColor" viewBox="0 0 21 21"><path d="M0 0H10V10H0V0ZM11 0H21V10H11V0ZM0 11H10V21H0V11ZM11 11H21V21H11V11Z"></path></svg> },
    { name: 'Eureka', svg: <svg className="h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24V38H14V24Z"></path><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M24 38V44"></path><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14 38V44"></path><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M34 38V44"></path><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M24 4V14"></path><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M16 8L20 12"></path><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M32 8L28 12"></path></svg>},
    { name: 'Cisco', svg: <svg className="h-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M4.686 14.155V9.845h1.75v4.31h-1.75zm3.437 0V9.845h1.75v4.31h-1.75zm3.437 0V9.845h1.75v4.31h-1.75zm3.438 0V9.845h1.75v4.31h-1.75zm3.437 0V9.845h1.75v4.31h-1.75zM12 5.86a2.01 2.01 0 00-2.029 2.013v.077h4.058v-.077A2.01 2.01 0 0012 5.86z"></path></svg> },
    { name: 'TIME', svg: <svg className="h-8 text-gray-400" fill="currentColor" viewBox="0 0 96 24"><path d="M0 0v1.9h8.3V24h2.1V1.9h8.3V0H0zM22.5 0v22.1h13.2v1.9H20.4V0h2.1zM40.3 0v24h2.1V0h-2.1zM50.4 0v1.9h5.8v6.7h-5.8v1.9h5.8v6.9h-5.8v1.9h7.9V0h-7.9zM62.6 1.9h2.1v20.2h10.3v1.9H62.6V1.9zM80.7 0l-5.4 12.5L70 0h-2.2l7.5 16.6v7.4h2.1v-7.4l7.5-16.6H80.7z"></path></svg>},
];

export const LogoCloud: React.FC = () => {
    const [ref, isOnScreen] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

    return (
        <section ref={ref} className={`py-12 bg-gray-50 transition-opacity duration-1000 ${isOnScreen ? 'opacity-100' : 'opacity-0'}`}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10 items-center">
                    {logos.map((logo, index) => (
                        <div
                            key={logo.name}
                            className={`flex justify-center transition-all duration-700 ease-out ${isOnScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="grayscale hover:grayscale-0 transition-all duration-300">
                                {logo.svg}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
