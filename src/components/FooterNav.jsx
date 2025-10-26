import React from 'react';
import { Home, Mic, Disc3, Users, Settings } from 'lucide-react';

export default function FooterNav() {
  return (
    <nav className="sticky bottom-4 w-full">
      <div className="max-w-md mx-auto px-4">
        <div className="relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7F00FF]/20 to-[#00FFFF]/20 blur pointer-events-none" />
          <div className="relative grid grid-cols-5">
            <NavItem icon={<Home className="h-5 w-5" />} label="Home" active />
            <NavItem icon={<Mic className="h-5 w-5" />} label="Karaoke" />
            <NavItem icon={<Disc3 className="h-5 w-5" />} label="DJ" />
            <NavItem icon={<Users className="h-5 w-5" />} label="Vibes" />
            <NavItem icon={<Settings className="h-5 w-5" />} label="Settings" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <button className={`flex flex-col items-center gap-1 py-3 text-xs ${active ? 'text-white' : 'text-white/70'} hover:text-white transition`}>
      <div className={`h-9 w-9 grid place-items-center rounded-full border ${active ? 'border-cyan-300/60 bg-white/10 shadow-[0_0_20px_#00FFFF]' : 'border-white/10 bg-white/5'}`}>
        {icon}
      </div>
      <span style={{fontFamily:'Inter'}}>{label}</span>
    </button>
  );
}
