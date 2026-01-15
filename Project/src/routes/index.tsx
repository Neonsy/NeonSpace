import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function generateStars(count: number) {
  const stars = []
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 0.3,
      delay: Math.random() * 8,
      duration: Math.random() * 4 + 3,
      color:
        Math.random() > 0.8 ? 'cyan' : Math.random() > 0.6 ? 'purple' : 'white',
    })
  }
  return stars
}

// React Compiler is enabled, so we do not need useMemo for the stars array.
// The compiler will handle memoization automatically.
const stars = generateStars(120)

function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#030308] text-white selection:bg-cyan-500/30 select-none">
      {/* Base layer - Very dark with subtle color */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#030308] via-[#0a0a18] to-[#030308]" />

      {/* Animated Radial Gradients - Deep space nebulae */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Primary nebula - purple/magenta */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full animate-nebula-1"
          style={{
            background:
              'radial-gradient(circle, rgba(88,28,135,0.4) 0%, rgba(88,28,135,0.1) 40%, transparent 70%)',
            top: '10%',
            left: '5%',
            filter: 'blur(60px)',
          }}
        />

        {/* Secondary nebula - deep blue */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full animate-nebula-2"
          style={{
            background:
              'radial-gradient(circle, rgba(30,58,138,0.35) 0%, rgba(30,58,138,0.08) 45%, transparent 70%)',
            bottom: '5%',
            right: '10%',
            filter: 'blur(50px)',
          }}
        />

        {/* Tertiary nebula - cyan accent */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full animate-nebula-3"
          style={{
            background:
              'radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(6,182,212,0.05) 40%, transparent 65%)',
            top: '40%',
            right: '25%',
            filter: 'blur(70px)',
          }}
        />

        {/* Deep core glow - center */}
        <div
          className="absolute w-[900px] h-[900px] rounded-full animate-core-pulse"
          style={{
            background:
              'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(88,28,135,0.05) 30%, transparent 55%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Starfield */}
      <div className="absolute inset-0 z-[1]">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor:
                star.color === 'cyan'
                  ? '#22d3ee'
                  : star.color === 'purple'
                    ? '#a78bfa'
                    : '#e2e8f0',
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              boxShadow:
                star.size > 1
                  ? `0 0 ${star.size * 2}px ${star.color === 'cyan' ? '#22d3ee' : star.color === 'purple' ? '#a78bfa' : '#e2e8f0'}`
                  : 'none',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <span
          className="text-cyan-400/90 tracking-[0.3em] text-2xl md:text-3xl lg:text-4xl font-medium mb-6 uppercase opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.18s', animationFillMode: 'forwards' }}
        >
          welcome to the
        </span>

        <h1
          className="text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-500/80 opacity-0 animate-fade-in-up drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          style={{ animationDelay: '0.18s', animationFillMode: 'forwards' }}
        >
          NeonSpace
        </h1>

        <p
          className="max-w-lg text-slate-400/80 text-base md:text-lg lg:text-xl tracking-wide border-t border-slate-700/30 pt-6 mt-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.18s', animationFillMode: 'forwards' }}
        >
          this site is (finally) a work in progress
        </p>
      </div>

      <style>{`
        @keyframes nebula-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 1; }
          25% { transform: translate(50px, 30px) scale(1.1); opacity: 0.8; }
          50% { transform: translate(20px, -40px) scale(0.95); opacity: 1; }
          75% { transform: translate(-30px, 20px) scale(1.05); opacity: 0.9; }
        }
        .animate-nebula-1 {
          animation: nebula-1 40s ease-in-out infinite;
        }

        @keyframes nebula-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 1; }
          33% { transform: translate(-40px, -30px) scale(1.08); opacity: 0.85; }
          66% { transform: translate(30px, 40px) scale(0.92); opacity: 1; }
        }
        .animate-nebula-2 {
          animation: nebula-2 35s ease-in-out infinite;
        }

        @keyframes nebula-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 1; }
          50% { transform: translate(-60px, 50px) scale(1.15); opacity: 0.7; }
        }
        .animate-nebula-3 {
          animation: nebula-3 45s ease-in-out infinite;
        }

        @keyframes core-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.6; }
        }
        .animate-core-pulse {
          animation: core-pulse 25s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  )
}
