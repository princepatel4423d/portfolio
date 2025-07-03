import React, { useEffect, useState } from 'react';
import { GraduationCap } from '@phosphor-icons/react';

const Academic = () => {
    const [academicData, setAcademicData] = useState([]);

    useEffect(() => {
        const fetchAcademicData = async () => {
            try {
                const response = await fetch(
                    'https://raw.githubusercontent.com/princepatel4423d/portfolio-data/refs/heads/main/academic.json'
                );
                const data = await response.json();
                setAcademicData(data);
            } catch (error) {
                console.error('Failed to fetch academic data:', error);
            }
        };

        fetchAcademicData();
    }, []);

    return (
        <section className="w-full flex justify-center py-10">
            <div className="w-full flex flex-col md:flex-row md:px-0">
                {/* Left Column - Title */}
                <div className="md:w-1/4 mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <GraduationCap size={28} weight="fill" /> Academic
                    </h2>
                </div>

                {/* Right Column - Academic List */}
                <div className="md:w-3/4 space-y-8">
                    {academicData.map((item, index) => (
                        <div
                            key={index}
                            className="border-b pb-6"
                        >
                            <h3 className="text-lg font-semibold">
                                {item.degree}{' '}
                                <span className="font-normal">
                                    at{' '}
                                    <a
                                        href="#"
                                        className="text-blue-600 dark:text-blue-400 underline"
                                    >
                                        {item.institution}
                                    </a>
                                </span>
                            </h3>
                            <p className="text-sm md:text-base mt-1">
                                {item.duration}{' '}
                                <span className="italic">({item.length})</span>
                            </p>
                            <p className="mt-2 text-sm md:text-base">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Academic;