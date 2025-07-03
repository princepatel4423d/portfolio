import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import Layout from './layout/Layout'
import Loader from './components/common/Loader'
import { Providers } from './components/Providers'

// Lazy-loaded pages
const Home = lazy(() => import('./pages/home/Home'))
const About = lazy(() => import('./pages/about/About'))
const BlogRoutes = lazy(() => import('./pages/blog/BlogRoutes'))
const Project = lazy(() => import('./pages/project/Project'))
const Achievement = lazy(() => import('./pages/achievement/Achievement'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Main App component
function App() {
  return (
      <Router>
        <Providers>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="blog/*" element={<BlogRoutes />} />
                <Route path="projects" element={<Project />} />
                <Route path="achievement" element={<Achievement />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </Providers>
      </Router>
  )
}

export default App