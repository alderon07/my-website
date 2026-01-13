export default function Footer() {
  return (
    <footer 
      className="relative py-12 px-4 border-t border-cyber-cyan/20"
      role="contentinfo" 
      aria-label="Site footer"
    >
      {/* Audio waveform decoration - music element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="waveform">
          <div className="waveform-bar" />
          <div className="waveform-bar" />
          <div className="waveform-bar" />
          <div className="waveform-bar" />
          <div className="waveform-bar" />
          <div className="waveform-bar" />
          <div className="waveform-bar" />
          <div className="waveform-bar" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Main footer content */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-mono text-cyber-text/60 uppercase tracking-widest text-sm">
            Crafted with
            <span className="inline-block mx-2 text-cyber-pink animate-pulse">♥</span>
            by
          </p>
          
          {/* Neon signature */}
          <h3 className="text-4xl md:text-5xl font-heading font-bold neon-text-cyan hover:neon-text-pink transition-all duration-500 cursor-default">
            NAQI
          </h3>
        </div>

        {/* Decorative line */}
        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent" />

        {/* Copyright */}
        {/* <p className="text-xs font-mono text-cyber-text/40 uppercase tracking-wider">
          © {new Date().getFullYear()} All Rights Reserved
        </p> */}

        {/* Easter egg / fun text */}
        <p className="text-xs font-mono text-cyber-pink/50 animate-pulse">
          &lt;/&gt; with ☕ and 🎮
        </p>
      </div>

      {/* Scanline effect overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 240, 255, 0.1) 2px, rgba(0, 240, 255, 0.1) 4px)'
        }} />
      </div>
    </footer>
  );
}
