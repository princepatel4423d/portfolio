import React from 'react';
import { ArrowLeft } from '@phosphor-icons/react';
import { Link } from 'react-router-dom'; // if you're using react-router-dom

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 transition-colors duration-300">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-extrabold text-blue-600 dark:text-blue-500 mb-6">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
          Page Not Found
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm sm:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
        >
          <ArrowLeft size={18} weight="bold" />
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;