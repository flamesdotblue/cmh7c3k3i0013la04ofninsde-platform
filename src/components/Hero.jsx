import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Activity, SunMoon, Mic, Music, Gamepad2, Sparkles } from 'lucide-react';

export default function Hero() {
  const [bpm, setBpm] = useState(120);
  const [aiMood, setAiMood] = useState(true);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/KeusF4lUkfKzhtGY/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0A0A45]/70 via-transparent to-[#7F00FF]/40" />
      <div className="pointer-events-none absolute inset-0" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(255,60,241,0.18) 0%, rgba(0,0,0,0) 70%)'}} />

      <div className="relative z-10 h-full flex flex-col">
        <header className="flex items-center justify-between px-6 sm:px-10 pt-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#7F00FF] to-[#FF3CF1] grid place-items-center animate-pulse shadow-[0_0_20px_#7F00FF]">
              <span className="block h-5 w-5 rounded-full bg-cyan-300/80" />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-wide" style={{fontFamily:'Poppins,Inter'}}>Pulse</div>
              <div className="text-xs text-cyan-200/70" style={{fontFamily:'Inter'}}>Feel the Beat. Live the Moment.</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
              <Activity className="h-4 w-4 text-cyan-300" />
              <span className="text-sm" style={{fontFamily:'Orbitron,Inter'}}>{bpm} BPM</span>
            </div>
            <button 
              onClick={() => setAiMood(v=>!v)}
              className="group relative overflow-hidden px-3 py-1.5 rounded-full bg-gradient-to-r from-[#7F00FF] to-[#0A0A45] border border-white/10 hover:shadow-[0_0_30px_#7F00FF] transition"
            >
              <span className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#00FFFF22_0%,transparent_60%,#FF3CF122_100%)] opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <div className="flex items-center gap-2">
                <SunMoon className="h-4 w-4 text-white" />
                <span className="text-sm">AI Mood {aiMood ? 'On' : 'Off'}</span>
              </div>
            </button>
          </div>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight drop-shadow-lg" style={{fontFamily:'Poppins,Inter'}}>
            Your AI Party Companion
          </h1>
          <p className="mt-3 text-cyan-100/80 max-w-xl" style={{fontFamily:'Inter'}}>
            Karaoke, Choreo, DJ, and Party Games — synced to your heartbeat and powered by AI.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/90">
            <Badge icon={<Mic className="h-3.5 w-3.5" />} label="Karaoke" />
            <Badge icon={<Music className="h-3.5 w-3.5" />} label="DJ Auto-Mix" />
            <Badge icon={<Gamepad2 className="h-3.5 w-3.5" />} label="Party Games" />
            <Badge icon={<Sparkles className="h-3.5 w-3.5" />} label="AI Choreo" />
          </div>

          <div className="mt-10">
            <button className="relative group px-8 py-3 rounded-full text-white font-semibold tracking-wide bg-gradient-to-r from-[#7F00FF] via-[#8A2BE2] to-[#00FFFF] shadow-[0_0_25px_#7F00FF] hover:shadow-[0_0_45px_#7F00FF] transition">
              <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#7F00FF] to-[#00FFFF] blur opacity-40 group-hover:opacity-70 transition pointer-events-none" />
              <span className="relative">Start the Party</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, label }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
      {icon}
      <span style={{fontFamily:'Inter'}}>{label}</span>
    </div>
  );
}
