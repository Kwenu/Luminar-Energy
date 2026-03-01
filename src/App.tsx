import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
export type Page = 'home' | 'services' | 'about' | 'contact';
export function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigate={setCurrentPage} />;
      case 'services':
        return <Services navigate={setCurrentPage} />;
      case 'about':
        return <About navigate={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home navigate={setCurrentPage} />;
    }
  };
  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        fontFamily: "'Inter', sans-serif"
      }}>

      <Header currentPage={currentPage} navigate={setCurrentPage} />
      <main className="flex-1 w-full" key={currentPage}>
        <div className="page-enter">{renderPage()}</div>
      </main>
      <Footer navigate={setCurrentPage} />
      <FloatingWhatsApp />
    </div>);

}