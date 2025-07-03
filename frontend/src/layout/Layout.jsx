import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './header/Header';
import { Footer } from './Footer';

const Layout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="min-h-screen flex flex-col xl:max-w-6xl mx-auto">
        {/* Navigation */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow px-4 sm:px-4 md:px-6 py-8">
            <Outlet />
        </main>
      </div>

      {/* Footer */}
      <div className='mx-auto px-4'>
        <Footer />
      </div>
    </>
  );
};

export default Layout