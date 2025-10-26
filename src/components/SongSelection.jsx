import React, { useState } from 'react';
import { Search, Play, Mic } from 'lucide-react';

const trending = [
  { title: 'Neon Nights', artist: 'LumiX', color: '#7F00FF' },
  { title: 'Cyber Pulse', artist: 'Nova', color: '#00FFFF' },
  { title: 'Midnight Echo', artist: 'Violet Sky', color: '#FF3CF1' },
  { title: 'Electric Heart', artist: 'Auro', color: '#7F00FF' },
];

export default function SongSelection() {
  const [mode, setMode] = useState('Karaoke');

  return (
    <section className="relative w-full py-16 sm:py-24">
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{background:'radial-gradient(50% 50% at 50% 0%, rgba(127,0,255,0.25) 0%, rgba(10,10,69,0) 70%)'}} />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h3 className="text-2xl sm:text-3xl font-bold" style={{fontFamily:'Poppins'}}>Find your vibe</h3>
          <div className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-full p-1">
            <button onClick={() => setMode('Play')} className={`px-4 py-1.5 rounded-full text-sm ${mode==='Play' ? 'bg-gradient-to-r from-[#7F00FF] to-[#00FFFF] shadow-[0_0_20px_#7F00FF]' : ''}`}>Play Mode</button>
            <button onClick={() => setMode('Karaoke')} className={`px-4 py-1.5 rounded-full text-sm ${mode==='Karaoke' ? 'bg-gradient-to-r from-[#7F00FF] to-[#00FFFF] shadow-[0_0_20px_#7F00FF]' : ''}`}>Karaoke Mode</button>
          </div>
        </div>

        <div className="mt-6 relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7F00FF]/20 to-[#00FFFF]/10 blur-xl pointer-events-none" />
          <div className="relative flex items-center gap-3 rounded-2xl px-4 py-3 bg-white/10 border border-white/10 backdrop-blur-md">
            <Search className="h-5 w-5 text-cyan-300" />
            <input 
              className="w-full bg-transparent outline-none placeholder:text-white/60" 
              placeholder="Search songs, artists, or vibes"
            />
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-[#7F00FF] to-[#00FFFF] text-sm">Search</button>
          </div>
        </div>

        <div className="mt-10">
          <Carousel title="Trending Songs" items={trending} mode={mode} />
        </div>
        <div className="mt-8">
          <Carousel title="Vibe Playlists" items={[...trending].reverse()} mode={mode} />
        </div>
      </div>
    </section>
  );
}

function Carousel({ title, items, mode }) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4" style={{fontFamily:'Poppins'}}>{title}</h4>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map((it, idx) => (
          <button key={idx} className="group relative overflow-hidden rounded-xl bg-white/10 border border-white/10 hover:border-cyan-300/40 transition">
            <div className="absolute inset-0 pointer-events-none" style={{background:`linear-gradient(135deg, ${it.color}33 0%, transparent 60%)`}} />
            <div className="p-4 min-h-[120px] flex flex-col justify-between">
              <div>
                <div className="text-sm text-white/80" style={{fontFamily:'Inter'}}>{it.artist}</div>
                <div className="text-lg font-semibold" style={{fontFamily:'Poppins'}}>{it.title}</div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-cyan-100/70">{mode === 'Karaoke' ? 'Lyrics On' : 'Play Only'}</span>
                <span className="group-hover:scale-110 transition">
                  {mode === 'Karaoke' ? <Mic className="h-5 w-5 text-[#FF3CF1]" /> : <Play className="h-5 w-5 text-cyan-300" />}
                </span>
              </div>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none" style={{boxShadow:'inset 0 0 60px rgba(0,255,255,0.25)'}} />
          </button>
        ))}
      </div>
    </div>
  );
}
