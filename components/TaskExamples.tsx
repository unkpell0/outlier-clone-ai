
import React, { useState } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const tasks = [
    {
        id: 'rating',
        title: 'Rating and Ranking',
        description: 'Choose the best response from two or more options. Your decisions show the AI model what excellent quality looks like. Sometimes, you\'ll also explain why you made your choice based on specific criteria.',
        image: 'https://cdn.dribbble.com/userupload/4117978/file/original-c75c5e311893c87328570530d93132bb.png?resize=1200x900&vertical=center'
    },
    {
        id: 'prompt',
        title: 'Create a Prompt',
        description: 'Craft high-quality prompts to test the AI\'s ability to generate creative, factual, or summary content. This helps expand the model\'s range and understanding of nuanced requests.',
        image: 'https://cdn.dribbble.com/userupload/3859664/file/original-2c74eda85f233483259b3437119f391a.png?resize=1200x900'
    },
    {
        id: 'multimodal',
        title: 'Multi-modal',
        description: 'Engage with tasks that involve more than just text. You might describe images, analyze video content, or evaluate audio transcriptions to train a truly versatile and perceptive AI.',
        image: 'https://cdn.dribbble.com/userupload/10415392/file/original-b2585918732152b822d4aa2e9f0866e4.png?resize=1200x900'
    }
];

export const TaskExamples: React.FC = () => {
    const [activeTask, setActiveTask] = useState(tasks[0].id);
    const [ref, isOnScreen] = useOnScreen<HTMLDivElement>({ threshold: 0.2 });

    const currentTaskData = tasks.find(task => task.id === activeTask) || tasks[0];

    return (
        <section ref={ref} className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-gray-900">
                        <span className="gradient-text">Smarter AI</span> starts with your expertise
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">AI training is never boring. Sign up and dive into real AI training tasks in your field.</p>
                </div>

                <div className="mt-16 grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4 flex flex-col space-y-2">
                        {tasks.map((task, index) => (
                            <button
                                key={task.id}
                                onClick={() => setActiveTask(task.id)}
                                className={`p-6 rounded-2xl text-left transition-all duration-300 w-full ${activeTask === task.id ? 'bg-white shadow-lg border border-purple-200' : 'hover:bg-gray-200/50'}`}
                            >
                                <span className="text-xs font-bold uppercase tracking-widest text-purple-600">TASK EXAMPLE #{index + 1}</span>
                                <h3 className="mt-2 text-lg font-bold text-gray-900">{task.title}</h3>
                                {activeTask === task.id && (
                                    <p className="mt-2 text-sm text-gray-600">{task.description}</p>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="lg:col-span-8 relative min-h-[450px]">
                        {tasks.map(task => (
                            <div key={task.id} className={`transition-opacity duration-500 absolute inset-0 ${activeTask === task.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <div className="p-2 bg-white rounded-2xl shadow-lg">
                                    <img src={task.image} alt={task.title} className="rounded-xl w-full h-auto object-cover aspect-[4/3]"/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-16">
                     <a href="#" className="inline-block px-8 py-4 text-base font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-colors">
                        VIEW OPPORTUNITIES
                    </a>
                </div>
            </div>
        </section>
    );
};
