import React, { useEffect, useState } from 'react';
import deconstructedRobotBroLight from './deconstructed-robot-bro-light.svg';
import deconstructedRobotBroDark from './deconstructed-robot-bro-dark.svg';
import CV from './cv-princepatel.pdf'

export const Typewriter = ({ words = [], loop = false, cursor = true, speed = 80, delay = 1800 }) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];

        const type = () => {
            const updatedText = isDeleting
                ? currentWord.substring(0, charIndex - 1)
                : currentWord.substring(0, charIndex + 1);

            setText(updatedText);
            setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

            if (!isDeleting && updatedText === currentWord) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setWordIndex((prev) => (loop ? (prev + 1) % words.length : prev + 1));
            }
        };

        const timer = setTimeout(type, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, wordIndex, words, speed, delay, loop]);

    return (
        <span className="whitespace-nowrap">
            {text}
            {cursor && <span className="ml-1 animate-pulse">|</span>}
        </span>
    );
};

const Hero = () => {
    return (
        <div className="relative flex w-full flex-col items-center justify-between py-14">
            {/* Background image for mobile */}
            <div className="absolute inset-0 flex items-start justify-center opacity-5 dark:opacity-10 md:hidden">
                <img
                    src={deconstructedRobotBroLight}
                    alt="Deconstructed Robot Light"
                    className="w-96 dark:hidden"
                />
                <img
                    src={deconstructedRobotBroDark}
                    alt="Deconstructed Robot Dark"
                    className="hidden w-96 dark:block"
                />
            </div>

            {/* Main content */}
            <div className="relative z-10 flex w-full flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex w-full flex-col items-center gap-4 text-center md:w-fit md:items-start md:text-left">
                    <span className="text-7xl font-bold drop-shadow-2xl">
                        Prince Patel,
                    </span>
                    <span className="text-2xl md:text-3xl">
                        <Typewriter
                            words={[
                                'Full Stack Developer',
                                'Coding Enthusiast',
                                'Web Designer'
                            ]}
                            cursor
                            loop
                        />
                    </span>
                    <p className="text-base md:text-lg max-w-md">
                        I love building clean UIs, solving problems, and exploring new technologies in the web ecosystem.
                    </p>
                    <a
                        href={CV}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-700/10 p-3 leading-none transition hover:bg-neutral-700 hover:text-white dark:bg-neutral-400/10 dark:hover:bg-neutral-400 dark:hover:text-black"
                    >
                        Read CV
                    </a>

                </div>

                {/* Desktop image */}
                <div className="hidden flex-1 items-center justify-end md:flex">
                    <img
                        src={deconstructedRobotBroLight}
                        alt="Deconstructed Robot Light"
                        className="w-72 dark:hidden"
                    />
                    <img
                        src={deconstructedRobotBroDark}
                        alt="Deconstructed Robot Dark"
                        className="hidden w-72 dark:block"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;