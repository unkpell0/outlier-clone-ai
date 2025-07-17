
import React, { useState } from 'react';

const faqData = [
    { question: "What is Strive Financial Consultants?", answer: "Strive is a dedicated financial consulting firm providing personalized investment management and financial planning services. We help individuals and families achieve their financial goals through expert, data-driven strategies." },
    { question: "How do I get started?", answer: "The first step is a complimentary consultation. Click 'Schedule a Consultation' to book a meeting. We'll discuss your goals and see if we're a good fit. There's no obligation." },
    { question: "Who are your consultants?", answer: "Our team consists of Certified Financial Planners (CFPs) and accredited professionals with years of experience in wealth management, retirement planning, and market analysis." },
    { question: "What are your fees?", answer: "We believe in transparency. Our fees are typically based on a percentage of assets under management. We'll provide a clear fee structure during our initial consultation." },
    { question: "How often will we meet?", answer: "We establish a regular review schedule, typically quarterly or semi-annually. However, we're always available to connect whenever you have questions or when life events require a strategy adjustment." },
];

const AccordionItem = ({ item, isOpen, onClick }) => (
    <div className="border-b border-gray-200 py-6">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left">
            <span className="text-lg font-semibold text-gray-800">{item.question}</span>
            <svg className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
            <p className="text-gray-600">{item.answer}</p>
        </div>
    </div>
);

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-gray-900">
                            Got a question?
                        </h2>
                        <a href="#" className="mt-8 inline-block px-8 py-4 text-base font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-colors">
                            SEE ALL FAQS
                        </a>
                    </div>
                    <div className="lg:col-span-2">
                        {faqData.map((item, index) => (
                            <AccordionItem 
                                key={index} 
                                item={item} 
                                isOpen={openIndex === index}
                                onClick={() => handleClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
