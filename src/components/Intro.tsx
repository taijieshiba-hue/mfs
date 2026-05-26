'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface IntroProps {
  onEnter: () => void
}

export default function Intro({
  onEnter,
}: IntroProps) {
const [particles, setParticles] = useState<any[]>([])

useEffect(() => {
  const generated = Array.from({
    length: 45,
  }).map((_, i) => ({
    id: i,

    size:
      Math.random() * 4 + 1,

    left:
      Math.random() * 100,

    top:
      Math.random() * 100,

    duration:
      Math.random() * 10 + 10,

    delay:
      Math.random() * 5,
  }))

  setParticles(generated)
}, [])

  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        scale: 1.03,
      }}
      transition={{
        duration: 1,
      }}
      className="
        fixed inset-0 z-[999]
        overflow-hidden
        bg-black
        flex items-center justify-center
      "
    >
      {/* BACKGROUND */}
      <motion.img
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        src="/images/red.gif"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          opacity-25
        "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80" />

      {/* RED GLOW */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
          absolute
          w-[500px] h-[500px]
          rounded-full
          bg-red-500/20
          blur-3xl
        "
      />

      {/* GRID */}
      <div
        className="
          absolute inset-0
          opacity-[0.04]
          bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      {/* FLOATING DUST */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{
              y: [-20, -120],
              opacity: [0, 0.5, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: p.duration,
              delay: p.delay,
              ease: 'linear',
            }}
            className="absolute rounded-full bg-white"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              top: `${p.top}%`,
              filter: 'blur(2px)',
              boxShadow:
                '0 0 10px rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6">

        {/* TOP TEXT */}
        <motion.p
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 0.5,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 1,
          }}
          className="
            uppercase
            tracking-[8px]
            text-[10px]
            sm:text-xs
            text-gray-400
            mb-4
          "
        >
          MADE FROM STRUGGLE
        </motion.p>

        {/* TITLE */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            text-6xl sm:text-7xl md:text-[9rem]
            font-black
            uppercase
            leading-none
            tracking-[6px]
            text-red-500
          "
        >
          {/* GLOW */}
          <motion.span
            animate={{
              opacity: [0.3, 1, 0.3],
              textShadow: [
                '0 0 20px rgba(255,0,0,0.4)',
                '0 0 45px rgba(255,0,0,1)',
                '0 0 20px rgba(255,0,0,0.4)',
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="relative z-10"
          >
            MFS
          </motion.span>

          {/* SHADOW TEXT */}
          <span
            className="
              absolute inset-0
              blur-3xl
              opacity-40
              text-red-500
            "
          >
            MFS
          </span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.6,
          }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="
            mt-4
            text-gray-400
            tracking-[5px]
            uppercase
            text-[11px]
            sm:text-sm
          "
        >
          Worldwide Community
        </motion.p>

        {/* DIVIDER */}
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 180,
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="
            h-[1px]
            bg-gradient-to-r
            from-transparent
            via-red-500/70
            to-transparent
            mx-auto
            mt-6
          "
        />

        {/* BUTTON */}
        <motion.button
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
          whileHover={{
            scale: 1.05,
            y: -2,
            boxShadow:
              '0 0 40px rgba(255,0,0,0.35)',
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={onEnter}
          className="
            group
            relative
            overflow-hidden
            mt-10

            px-8 py-4

            rounded-2xl

            border border-red-500/20
            bg-red-500/10

            backdrop-blur-2xl

            uppercase
            tracking-[5px]
            text-sm
            font-medium
            text-white

            transition-all
          "
        >
          {/* SHINE */}
          <motion.div
            animate={{
              x: ['-120%', '220%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: 'linear',
            }}
            className="
              absolute top-0 left-0
              w-20 h-full
              bg-white/10
              skew-x-12
              blur-lg
            "
          />

          <span className="relative z-10">
            Click to Enter
          </span>
        </motion.button>
      </div>

      {/* VIGNETTE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_35%,black_100%)] pointer-events-none" />
    </motion.div>
  )
}