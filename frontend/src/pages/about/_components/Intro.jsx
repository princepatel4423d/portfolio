import React from 'react';
import MyImg from './portfolio-image.jpg';
import CV from './cv-princepatel.pdf';

const Intro = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row py-10 items-stretch gap-6">
        <div className="flex-1">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">About Me</h1>

          <p className="text-xs sm:text-sm md:text-base mb-3">
            My name is <strong>Prince Patel</strong>, a dedicated developer based in Idar, Gujarat - India.
          </p>

          <p className="text-xs sm:text-sm md:text-base mb-3">
            <strong>Self-taught</strong> full-stack. I have knowledge in{' '}
            <span className="text-blue-600 dark:text-blue-400">ReactJS</span> and{' '}
            <span className="text-blue-600 dark:text-blue-400">NextJS</span> on the Front-end,{' '}
            <span className="text-blue-600 dark:text-blue-400">Nest.js</span> and{' '}
            <span className="text-blue-600 dark:text-blue-400">Express.js</span> on the Back-end, and{' '}
            <span className="text-blue-600 dark:text-blue-400">React-native/Expo</span> on Mobile with a focus on Android.
            My main stack is around <span className="text-blue-600 dark:text-blue-400">JavaScript</span>, primarily{' '}
            <span className="text-blue-600 dark:text-blue-400">Typescript</span>.
          </p>

          <p className="text-xs sm:text-sm md:text-base mb-5">
            I'm on an intermediate level of English in reading and writing, skill acquired by reading various documentation
            and articles related to technologies and other subjects in English, and also writing blog posts and documentation
            of personal projects.
          </p>

          <div className="flex justify-start gap-4 items-center">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-xs sm:text-sm rounded-lg transition duration-200 cursor-pointer">
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV 🡣
              </a>
            </button>

            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm hover:text-gray-800 dark:hover:text-gray-200 transition cursor-pointer"
            >
              read.cv ↗
            </a>
          </div>
        </div>

        {/* Image now shows on all screen sizes */}
        <div className="md:w-1/3 w-full flex justify-center md:justify-end">
          <img
            src={MyImg}
            alt="Prince Patel"
            className="w-full max-w-xs md:max-w-full h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
