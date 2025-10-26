import React from 'react';
import Hero from './components/Hero';
import FeatureOrbit from './components/FeatureOrbit';
import SongSelection from './components/SongSelection';
import FooterNav from './components/FooterNav';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#050516] text-white overflow-x-hidden">
      <Hero />
      <FeatureOrbit />
      <SongSelection />
      <FooterNav />
    </div>
  );
}
