
import React, { useState } from 'react';

const faqData = [
    { question: "About Outlier", answer: "Outlier is a platform that connects domain experts with opportunities to train and improve leading AI models. We are powered by Scale AI and provide flexible, remote work for specialists across the globe." },
    { question: "Getting started", answer: "To get started, simply click on 'View Opportunities', find a project that matches your expertise, and complete the application process. Once approved, you can start working on tasks right away." },
    { question: "Qualifications", answer: "We look for individuals with deep knowledge or professional experience in a wide range of fields. This can range from advanced degrees and professional certifications to demonstrable expertise through a portfolio of work." },
    { question: "Pay", answer: "Pay varies by project and is typically based on the complexity and skill required for the tasks. We offer competitive, project-based rates and ensure timely payments for all completed work." },
    { question: "Hours", answer: "The work is highly flexible. There are no minimum or maximum hour requirements. You can work as much or as little as you want, whenever it fits your schedule." },
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
