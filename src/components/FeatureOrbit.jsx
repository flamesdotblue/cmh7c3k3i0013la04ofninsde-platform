import React from 'react';
import { motion } from 'framer-motion';
import { Mic, PersonStanding, Disc3, Gamepad2, Lightbulb } from 'lucide-react';

export default function FeatureOrbit() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-gradient-to-b from-transparent to-[#0A0A45]/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{fontFamily:'Poppins,Inter'}}>Party Control Center</h2>
            <p className="mt-3 text-cyan-100/80" style={{fontFamily:'Inter'}}>
              Navigate core modes with a neon orbit. All animations are synced to the beat — tap a feature to light up the room.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Sing','Dance','DJ','Games','Mood'].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full text-sm bg-white/10 border border-white/10 text-white/90" style={{fontFamily:'Inter'}}>
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-4">
              <button className="relative group px-6 py-2.5 rounded-full text-white font-semibold tracking-wide bg-gradient-to-r from-[#7F00FF] to-[#00FFFF] shadow-[0_0_20px_#7F00FF] hover:shadow-[0_0_36px_#7F00FF] transition">
                <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#7F00FF] to-[#00FFFF] blur opacity-40 group-hover:opacity-70 transition pointer-events-none" />
                <span className="relative">Quick Start</span>
              </button>
              <button className="px-6 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition">How it works</button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-[380px] sm:h-[480px]">
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
              >
                <div className="absolute inset-0 rounded-full border border-cyan-300/20" />
                <GlowDot angle={0} icon={<Mic className="h-5 w-5" />} label="Karaoke" color="#FF3CF1" />
                <GlowDot angle={72} icon={<PersonStanding className="h-5 w-5" />} label="Choreo" color="#00FFFF" />
                <GlowDot angle={144} icon={<Disc3 className="h-5 w-5" />} label="DJ" color="#7F00FF" />
                <GlowDot angle={216} icon={<Gamepad2 className="h-5 w-5" />} label="Games" color="#FF3CF1" />
                <GlowDot angle={288} icon={<Lightbulb className="h-5 w-5" />} label="Mood" color="#00FFFF" />
              </motion.div>
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative w-40 h-40 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7F00FF]/30 to-[#00FFFF]/10" />
                  <div className="absolute inset-0 rounded-full shadow-[0_0_50px_#7F00FF]" />
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#7F00FF] to-[#00FFFF] opacity-20 blur-xl" />
                  <div className="relative z-10 h-full w-full grid place-items-center">
                    <div className="text-center font-semibold leading-tight" style={{fontFamily:'Poppins'}}>
                      <div>Start</div>
                      <div>The</div>
                      <div>Party</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GlowDot({ angle, icon, label, color }) {
  const radius = 170;
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;
  return (
    <motion.button
      whileHover={{ scale: 1.1, boxShadow: `0 0 24px ${color}` }}
      className="absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl px-3 py-2 bg-white/10 border border-white/10 backdrop-blur-md flex items-center gap-2"
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
    >
      <span className="text-white" style={{ color }}>{icon}</span>
      <span className="text-sm" style={{fontFamily:'Inter'}}>{label}</span>
    </motion.button>
  );
}
