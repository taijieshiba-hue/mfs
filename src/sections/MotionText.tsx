'use client'

import { motion } from 'framer-motion'

export default function MotionText() {
  return (
    <section className="relative bg-black py-60 overflow-hidden flex items-center justify-center">

      {/* TOP FADE */}
      <div className="absolute top-0 left-0 w-full h-52 bg-gradient-to-b from-black via-black/90 to-transparent z-30 pointer-events-none" />

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-black via-black/90 to-transparent z-30 pointer-events-none" />

      {/* SIDE FADE */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-30 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-30 pointer-events-none" />

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.12),transparent_65%)]" />

      {/* EXTRA SOFT RED AMBIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-red-950/10" />

      {/* MOVING LIGHT */}
      <motion.div
        animate={{
          x: ['-30%', '130%'],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-0 left-0 w-[45%] h-full bg-red-500/10 blur-3xl rotate-12"
      />

      {/* MAIN TEXT */}
      <motion.h2
        initial={{
          opacity: 0,
          y: 120,
          scale: 0.85,
          filter: 'blur(20px)',
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          text-[14vw]
          font-black
          whitespace-nowrap
          leading-none
          tracking-[-0.08em]
          text-white
          select-none
        "
      >

        {/* OUTLINE */}
        <span
          className="absolute inset-0 text-transparent opacity-20"
          style={{
            WebkitTextStroke: '1px rgba(255,0,0,0.45)',
          }}
        >
          MFS
        </span>

        {/* MAIN TEXT */}
        <motion.span
          animate={{
            textShadow: [
              '0 0 12px rgba(255,0,0,0.25)',
              '0 0 40px rgba(255,0,0,0.6)',
              '0 0 12px rgba(255,0,0,0.25)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative z-10 inline-block"
        >
          MFS
        </motion.span>

        {/* SHIMMER */}
        <motion.div
          animate={{
            x: ['-120%', '120%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'easeInOut',
          }}
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-transparent
            via-red-300/30
            to-transparent
            skew-x-12
            blur-md
            mix-blend-screen
          "
        />

      </motion.h2>
    </section>
  )
}