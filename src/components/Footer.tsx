'use client'

import { motion } from 'framer-motion'
import { FaCrown } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white border-t border-red-500/10">

      {/* AMBIENT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">

        {/* RED GLOW */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-red-600/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-red-500/10 blur-[130px]" />

        {/* GRID */}
        <div
          className="
            absolute inset-0 opacity-[0.04]
            bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />

        {/* VIGNETTE */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-20">

        <div className="grid md:grid-cols-2 gap-16 items-end">

          {/* LEFT */}
          <div>

            {/* SMALL LABEL */}
            <p className="text-red-500/70 text-xs tracking-[0.4em] uppercase mb-5">
              MFS Worldwide
            </p>

{/* MAIN TITLE */}
<h2
  className="
    text-5xl
    sm:text-6xl
    md:text-7xl
    font-black
    tracking-[0.22em]
    uppercase
    leading-none
    cursor-default
    transition-all
    duration-300
    hover:tracking-[0.35em]
  "
>
  MFS
</h2>

            {/* DIVIDER */}
            <div className="w-32 h-[2px] bg-gradient-to-r from-red-500 to-transparent mt-8" />

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                text-white/40
                text-sm
                sm:text-base
                leading-relaxed
                max-w-lg
              "
            >
              Built with precision, loyalty, and cinematic vision.
              Elevating the digital identity of MFS through power,
              exclusivity, and modern design aesthetics.
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start md:items-end">

            {/* CARD */}
            <motion.div
              whileHover={{
                y: -5,
                borderColor: 'rgba(239,68,68,0.35)',
                boxShadow: '0 0 40px rgba(239,68,68,0.12)',
              }}
              className="
                relative
                overflow-hidden
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                rounded-3xl
                px-6
                py-5
                min-w-[280px]
                transition-all duration-300
              "
            >

              {/* CARD GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent pointer-events-none" />

              <div className="relative flex items-center gap-4">

                {/* ICON */}
                <div
                  className="
                    w-12 h-12
                    rounded-2xl
                    bg-red-500/10
                    border border-red-500/20
                    flex items-center justify-center
                  "
                >
                  <FaCrown className="text-red-400 text-lg" />
                </div>

                {/* INFO */}
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/30">
                     Developer
                  </p>

                  <h3 className="text-xl font-semibold mt-1">
                    Bang
                  </h3>
                </div>

              </div>

            </motion.div>

            {/* COPYRIGHT */}
            <p
              className="
                mt-8
                text-[11px]
                uppercase
                tracking-[0.35em]
                text-white/20
                text-left md:text-right
              "
            >
              © 2026 MFS Worldwide
            </p>

          </div>

        </div>

      </div>
    </footer>
  )
}