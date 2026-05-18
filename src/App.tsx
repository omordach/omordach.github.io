import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
const Home = React.lazy(() => import('./pages/Home'))
const ServicePage = React.lazy(() => import('./pages/services/ServicePage'))

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
          <Route path="/" element={<Home />} />
          {/* Each service slug routes to the shared ServicePage template */}
          <Route path="/services/:slug" element={<ServicePage />} />
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
      </div>
    </HelmetProvider>
  )
}
