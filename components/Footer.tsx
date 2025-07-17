
import React from 'react';

const footerLinks = [
    { name: 'Terms of Use', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cookies Policy', href: '#' },
    { name: 'Community Guidelines', href: '#' },
    { name: 'Working location policy', href: '#' },
    { name: 'Data Processing Addendum', href: '#' },
];

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-sm text-gray-500 order-2 md:order-1">
                        &copy; {new Date().getFullYear()} Strive Financial. All rights reserved.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center items-center gap-x-6 gap-y-2 order-1 md:order-2">
                        {footerLinks.map(link => (
                             <a key={link.name} href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
