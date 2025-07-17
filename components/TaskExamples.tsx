
import React, { useState } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const tasks = [
    {
        id: 'analysis',
        title: 'Deep-Dive Analysis',
        description: 'We analyze your complete financial profile to identify opportunities and risks, forming the foundation of your custom strategy.',
        image: 'https://images.unsplash.com/photo-1640653799842-55737a43d02a?q=80&w=1740&auto=format&fit=crop'
    },
    {
        id: 'strategy',
        title: 'Custom Strategy Design',
        description: 'Based on our analysis, we design a diversified, tax-efficient portfolio and financial plan aimed at achieving your specific objectives.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop'
    },
    {
        id: 'review',
        title: 'Proactive Reviews',
        description: 'Markets and lives change. We conduct regular portfolio reviews and adjust your strategy to ensure it remains aligned with your goals and the economic landscape.',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1740&auto=format&fit=crop'
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
                        A <span className="gradient-text">disciplined approach</span> to wealth creation
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">We combine data-driven insights with a deep understanding of your personal goals.</p>
                </div>

                <div className="mt-16 grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4 flex flex-col space-y-2">
                        {tasks.map((task, index) => (
                            <button
                                key={task.id}
                                onClick={() => setActiveTask(task.id)}
                                className={`p-6 rounded-2xl text-left transition-all duration-300 w-full ${activeTask === task.id ? 'bg-white shadow-lg border border-purple-200' : 'hover:bg-gray-200/50'}`}
                            >
                                <span className="text-xs font-bold uppercase tracking-widest text-purple-600">OUR PROCESS #{index + 1}</span>
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
                        GET STARTED
                    </a>
                </div>
            </div>
        </section>
    );
};
