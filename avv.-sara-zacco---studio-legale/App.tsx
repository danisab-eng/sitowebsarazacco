import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PracticeAreas from './pages/PracticeAreas';
import HowItWorks from './pages/HowItWorks';
import Studio from './pages/Studio';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import ChatWidget from './components/ChatWidget';

// ScrollToTop component to ensure navigation resets scroll
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Simple Cookie Banner
const CookieBanner = () => {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent) setAccepted(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-navy/95 border-t border-gray-700 p-4 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300">
                Questo sito utilizza cookie tecnici per garantire il corretto funzionamento. 
                Continuando la navigazione accetti l'uso dei cookie. 
                <a href="#/cookies" className="underline text-terracotta ml-1">Leggi la policy</a>.
            </p>
            <div className="flex gap-4">
                 <button onClick={accept} className="bg-terracotta text-ceramic px-4 py-2 rounded text-sm font-medium hover:bg-[#b05a30] transition-colors">
                    Accetto
                </button>
            </div>
        </div>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="relative flex flex-col min-h-screen bg-navy font-sans antialiased text-gray-900 selection:bg-terracotta selection:text-white overflow-x-hidden w-full">
        <Header />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aree-di-attivita" element={<PracticeAreas />} />
            <Route path="/come-funziona" element={<HowItWorks />} />
            <Route path="/lo-studio" element={<Studio />} />
            <Route path="/contatti" element={<Contact />} />
            <Route path="/privacy" element={<Legal />} />
            <Route path="/cookies" element={<Legal />} />
            <Route path="/disclaimer" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
        <CookieBanner />
      </div>
    </HashRouter>
  );
};

export default App;