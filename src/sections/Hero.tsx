'use client'

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef, useState, useMemo } from 'react'

import {
  FaDiscord,
  FaPause,
  FaPlay,
  FaVolumeMute,
  FaVolumeUp,
  FaHeart,
  FaTiktok,
  FaForward, 
  FaBackward, 
} from 'react-icons/fa'


const playlist = [
  {
    title: 'Die Young',
    artist: 'Sleepy Hallow',
    cover: '/images/sleepy.jpg',
    src: '/music/dieyoung.mp3',
  },

  {
    title: 'Flex',
    artist: 'Polo G',
    cover: '/images/polog.jfif',
    src: '/music/flex.mp3',
  },

]


const mainStaff = [
  {
    name: 'sica',
    role: 'Goddess',
    avatar: '/images/sica.png',
    banner: '/images/sicabanner.gif',
    color: 'bg-green-400',
    tiktokUrl: 'https://www.tiktok.com',
    description:
      'Focused on protecting the community and making the server enjoyable for everyone.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-green-400',
  },

  {
    name: 'nadia',
    role: 'Goddess',
    avatar: '/images/nadia.png',
    banner: '/images/nadiabanner.gif',
    color: 'bg-green-400',
    tiktokUrl: 'https://www.tiktok.com/@mnicpxidg?_r=1&_t=ZS-96gouWROGmu',
    description:
      'Keeping the server clean, active, and under control.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-green-400',
  },

  {
    name: 'bang',
    role: 'Owner',
    avatar: '/images/sasuke.jpg',
    banner: '/images/ninebanner.gif',
    color: 'bg-yellow-400',
    tiktokUrl: 'https://www.tiktok.com',
    description:
      'Building a strong community where everyone has a place.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-yellow-400',
  },

  {
    name: 'lau',
    role: 'Goddess',
    avatar: '/images/lau.png',
    banner: '/images/laubanner.gif',
    color: 'bg-red-400',
    tiktokUrl: 'https://www.tiktok.com.e',
    description:
      'Always available to assist members and handle situations professionally.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-red-400',
  },

  {
  name: 'mikmik',
  role: 'Goddess',
  avatar: '/images/mik.png',
  banner: '/images/mikbanner.gif',
  color: 'bg-red-400',
  tiktokUrl: 'https://www.tiktok.com',
  description:
    'Working behind the scenes to keep the community alive and united.',
  discordUrl: 'https://discord.gg/VfGDjPxWvD',
  profileUrl: 'https://discord.gg/VfGDjPxWvD',
  statusColor: 'bg-red-400',
},
]

const otherMembers = [
  {
    name: 'ixy',
    role: 'Shawty',
    avatar: '/images/ixy.png',

    description:
      'MFS Shawty.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-green-400',
  },

  {
    name: 'jamal',
    role: 'Hall of Fame',
    avatar: '/images/jamal.png',

    description:
      'Real G.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-green-400',
  },

  {
    name: 'raqqi',
    role: 'Hall of Fame',
    avatar: '/images/rz.png',

    description:
      'Recognized Hall of Fame.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-yellow-400',
  },

  {
    name: 'ningning',
    role: 'Goddess',
    avatar: '/images/ning.png',

    description:
      'MFS Goddess.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-yellow-400',
  },

  {
    name: 'Donney',
    role: 'Real G',
    avatar: '/images/donney.png',

    description:
      'Hall of Fame.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-yellow-400',
  },

  {
    name: 'vxeya',
    role: 'Hall of Fame',
    avatar: '/images/xeya.png',

    description:
      'Dedicated and highly respected member.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-yellow-400',
  },

  {
    name: 'seb',
    role: 'Real G',
    avatar: '/images/seb.png',

    description:
      'Recognized Hall of Fame.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-yellow-400',
  },

    {
    name: 'yeona',
    role: 'MFS Exclusive',
    avatar: '/images/yeona.png',

    description:
      'Hall of Fame.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-yellow-400',
  },
]

const eliteMembers = [
  {
    name: 'winona',
    role: 'MFS Shawty',
    avatar: '/images/winona.png',

    description:
      'Hall of Fame.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-red-400',
  },

  {
    name: 'yu',
    role: 'MFS Shawty',
    avatar: '/images/yu.png',

    description:
      'Hall of Fame.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-red-400',
  },

  {
    name: 'zordy',
    role: 'Highest',
    avatar: '/images/zordy.png',

    description:
      'OG Big Stepper.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-red-400',
  },

  {
    name: 'zist',
    role: 'Highest',
    avatar: '/images/zist.png',

    description:
      'OG Big Stepper.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-red-400',
  },

  {
    name: 'mai',
    role: 'MFS Shawty',
    avatar: '/images/mai.png',

    description:
      'Hall of Fame.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-red-400',
  },

    {
    name: 'ria',
    role: 'MFS Shawty',
    avatar: '/images/ria.png',

    description:
      'Hall of Fame.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-red-400',
  },

    {
    name: 'mob',
    role: 'MFS Exclusive',
    avatar: '/images/mob.png',

    description:
      'Hall of Fame.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-red-400',
  },

    {
    name: 'shang',
    role: 'MFS Shawty',
    avatar: '/images/shang.png',

    description:
      'Hall of Fame.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-red-400',
  },

      {
    name: 'bleed',
    role: 'MFS Exclusive',
    avatar: '/images/bleed.png',

    description:
      'Hall of Fame.',
    discordUrl: 'https://discord.gg/VfGDjPxWvD',
    profileUrl: 'https://discord.gg/VfGDjPxWvD',
    statusColor: 'bg-red-400',
  },
]

export default function Hero() {
const trackRef = useRef<HTMLDivElement>(null)
const eliteTrackRef = useRef<HTMLDivElement>(null)

const otherOffsetRef = useRef(0)
const eliteOffsetRef = useRef(0)

const otherRafRef = useRef<number | null>(null)
const eliteRafRef = useRef<number | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const offsetRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const fireflyRafRef = useRef<number | null>(null)

  const [selected, setSelected] = useState<any>(null)
  const [paused, setPaused] = useState(false)

  // 🎵 MUSIC STATES
const [musicPaused, setMusicPaused] = useState(false)
const [muted, setMuted] = useState(false)
const [currentSong, setCurrentSong] = useState(0)

  // ❤️ LIKE STATES
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(128)

  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 500], [0, 80])

  // =========================
  // ❤️ LOAD SAVED HEART DATA
  // =========================
  useEffect(() => {
    const savedLikes = localStorage.getItem('cosanostra_likes')
    const savedLiked = localStorage.getItem('cosanostra_liked')

    if (savedLikes) {
      setLikes(Number(savedLikes))
    }

    if (savedLiked) {
      setLiked(savedLiked === 'true')
    }
  }, [])

// =========================
// ✨ INTERACTIVE DUST
// =========================

const mouseRef = useRef({
  x: 0,
  y: 0,
})

const [dustParticles, setDustParticles] = useState(() =>
  [...Array(32)].map((_, i) => ({
    id: i,

    x:
      typeof window !== 'undefined'
        ? Math.random() * window.innerWidth
        : 0,

    y:
      typeof window !== 'undefined'
        ? Math.random() * window.innerHeight
        : 0,

    size: 2 + Math.random() * 4,

    opacity: 0.15 + Math.random() * 0.3,

    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
  }))
)

useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    mouseRef.current.x = e.clientX
    mouseRef.current.y = e.clientY
  }

  window.addEventListener(
    'mousemove',
    handleMouseMove
  )

  const animateDust = () => {
    setDustParticles((prev) =>
      prev.map((p) => {
        let x = p.x + p.vx
        let y = p.y + p.vy

        // screen looping
        if (x > window.innerWidth) x = 0
        if (x < 0) x = window.innerWidth

        if (y > window.innerHeight) y = 0
        if (y < 0) y = window.innerHeight

        const dx = mouseRef.current.x - x
        const dy = mouseRef.current.y - y

        const dist = Math.sqrt(
          dx * dx + dy * dy
        )

        // cursor magnetic pull
        if (dist < 140) {
          x += dx * 0.03
          y += dy * 0.03
        }

        // vanish on cursor touch
        if (dist < 18) {
          return {
            ...p,

            x:
              Math.random() *
              window.innerWidth,

            y:
              Math.random() *
              window.innerHeight,

            opacity: 0,
          }
        }

        return {
          ...p,
          x,
          y,

          opacity: Math.min(
            p.opacity + 0.01,
            0.4
          ),
        }
      })
    )

    fireflyRafRef.current =
      requestAnimationFrame(animateDust)
  }

  animateDust()

  return () => {
    window.removeEventListener(
      'mousemove',
      handleMouseMove
    )

    if (fireflyRafRef.current) {
      cancelAnimationFrame(
        fireflyRafRef.current
      )
    }
  }
}, [])



// =========================
// 🔥 CONTINUOUS MARQUEES
// =========================
useEffect(() => {
  const otherEl = trackRef.current
  const eliteEl = eliteTrackRef.current

  if (!otherEl || !eliteEl) return

  const otherSpeed = 0.6
  const eliteSpeed = 0.75

  const animate = () => {
    if (!paused) {

      // OTHER MEMBERS
      otherOffsetRef.current += otherSpeed

      const otherMax =
        otherEl.scrollWidth / 2

      if (
        otherOffsetRef.current >= otherMax
      ) {
        otherOffsetRef.current = 0
      }

      otherEl.style.transform = `
        translateX(-${otherOffsetRef.current}px)
      `

      // ELITE MEMBERS
      eliteOffsetRef.current += eliteSpeed

      const eliteMax =
        eliteEl.scrollWidth / 2

      if (
        eliteOffsetRef.current >= eliteMax
      ) {
        eliteOffsetRef.current = 0
      }

      eliteEl.style.transform = `
        translateX(-${eliteOffsetRef.current}px)
      `
    }

    otherRafRef.current =
      requestAnimationFrame(animate)
  }

  animate()

  return () => {
    if (otherRafRef.current) {
      cancelAnimationFrame(otherRafRef.current)
    }

    if (eliteRafRef.current) {
      cancelAnimationFrame(eliteRafRef.current)
    }
  }
}, [paused])


  // =========================
  // 🎵 MUSIC CONTROLS
  // =========================
  const togglePause = () => {
    if (!audioRef.current) return

    if (musicPaused) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }

    setMusicPaused(!musicPaused)
  }

  const toggleMute = () => {
    if (!audioRef.current) return

    audioRef.current.muted = !muted
    setMuted(!muted)
  }


  const nextSong = () => {
  if (!audioRef.current) return

  const nextIndex =
    currentSong + 1 >= playlist.length
      ? 0
      : currentSong + 1

  setCurrentSong(nextIndex)

  setTimeout(() => {
    audioRef.current?.play()
  }, 100)

  setMusicPaused(false)
}

const prevSong = () => {
  if (!audioRef.current) return

  const prevIndex =
    currentSong - 1 < 0
      ? playlist.length - 1
      : currentSong - 1

  setCurrentSong(prevIndex)

  setTimeout(() => {
    audioRef.current?.play()
  }, 100)

  setMusicPaused(false)
}



useEffect(() => {
  const audio = audioRef.current

  if (!audio) return

  const handleEnded = () => {
    nextSong()
  }

  audio.addEventListener('ended', handleEnded)

  return () => {
    audio.removeEventListener('ended', handleEnded)
  }
}, [currentSong])


  // =========================
  // ❤️ LIKE BUTTON
  // =========================
  const toggleLike = () => {
    let updatedLikes = likes

    if (liked) {
      updatedLikes = likes - 1
      setLikes(updatedLikes)
    } else {
      updatedLikes = likes + 1
      setLikes(updatedLikes)
    }

    const updatedLiked = !liked

    setLiked(updatedLiked)

    localStorage.setItem('cosanostra_likes', updatedLikes.toString())
    localStorage.setItem('cosanostra_liked', updatedLiked.toString())
  }

  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <motion.img
        style={{ y: parallaxY }}
        src="/images/red.gif"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      <div className="absolute inset-0 bg-black/70" />

{/* FLOATING DUST */}
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
  {dustParticles.map((p) => (
    <motion.div
      key={p.id}
      animate={{
        opacity: p.opacity,
        scale: [1, 1.4, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute rounded-full bg-white"
      style={{
        width: `${p.size}px`,
        height: `${p.size}px`,

        left: p.x,
        top: p.y,

        filter: 'blur(2px)',

        boxShadow:
          '0 0 10px rgba(255,255,255,0.5)',
      }}
    />
  ))}
</div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-10">
<motion.h1
  animate={{
    scale: [1, 1.02, 1],
    textShadow: [
      '0 0 20px rgba(255,0,0,0.5), 0 0 40px rgba(255,0,0,0.3)',
      '0 0 35px rgba(255,0,0,1), 0 0 70px rgba(255,0,0,0.7)',
      '0 0 20px rgba(255,0,0,0.5), 0 0 40px rgba(255,0,0,0.3)',
    ],
  }}
  transition={{
    repeat: Infinity,
    duration: 3,
  }}
  className="
    text-4xl sm:text-5xl md:text-[9rem]
    font-black uppercase text-center leading-none
    text-red-500
    tracking-[6px]
  "
>
  MFS
</motion.h1>

        <motion.p className="tracking-[4px] sm:tracking-[8px] text-gray-400 text-xs sm:text-sm mt-2 text-center">
          Made From Struggle
        </motion.p>

{/* MAIN STAFF */}
<div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 px-2 max-w-[1100px]">

  {mainStaff.map((item, i) => (
    <motion.div
      key={i}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: i * 0.08,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      onClick={() => setSelected(item)}
      className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-black/40 backdrop-blur-2xl cursor-pointer"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.5,
          }}
          src={item.banner}
          className="w-full h-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
      </div>

      {/* LIGHT */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-28 h-28 bg-white/10 rounded-full blur-3xl"
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center px-3 py-4 sm:px-4 sm:py-5">

        {/* AVATAR */}
        <div className="relative">

          {/* RING */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: 'linear',
            }}
            className="absolute inset-[-6px] rounded-full border border-dashed border-white/15"
          />

          {/* IMAGE */}
          <motion.img
            whileHover={{
              scale: 1.06,
            }}
            src={item.avatar}
            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.12)]"
          />

          {/* STATUS */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-black ${item.color}`}
          >

            {/* PING EFFECT */}
            <motion.div
              animate={{
                scale: [1, 2.2],
                opacity: [0.6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'easeOut',
              }}
              className={`absolute inset-0 rounded-full ${item.color}`}
            />

          </motion.div>

          {/* ONLINE TEXT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 pointer-events-none"
          >
            <div className="px-2 py-[3px] rounded-full bg-black/70 border border-white/10 backdrop-blur-xl whitespace-nowrap">
              <p className="text-[8px] uppercase tracking-[2px] text-gray-300">
                Active Now
              </p>
            </div>
          </motion.div>

        </div>

        {/* NAME */}
        <h2 className="mt-3 text-sm sm:text-[15px] font-bold uppercase tracking-[1px] text-center">
          {item.name}
        </h2>

        {/* ROLE */}
        <div className="mt-1 px-2 py-[4px] rounded-full bg-white/10 border border-white/10">
          <p className="text-[9px] sm:text-[10px] uppercase tracking-[2px] text-gray-300">
            {item.role}
          </p>
        </div>

        {/* MINI DESCRIPTION */}
        <p className="mt-2 text-[10px] sm:text-[11px] text-gray-400 text-center leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {/* SOCIALS */}
        <div className="mt-3 flex items-center gap-2">

          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            className="w-7 h-7 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center"
          >
            <FaDiscord className="text-indigo-400 text-[11px]" />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            className="w-7 h-7 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center"
          >
            <FaTiktok className="text-white text-[11px]" />
          </motion.div>

        </div>
      </div>
    </motion.div>
  ))}
</div>
        {/* FIRST MARQUEE */}
        <div
          className="mt-10 w-full flex justify-center overflow-hidden"

        >
          <div className="w-full max-w-[850px] overflow-hidden px-2">
            <div ref={trackRef} className="flex gap-4 w-max">
              {[...otherMembers, ...otherMembers].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelected(item)}
                  className="min-w-[110px] sm:min-w-[140px] p-2 sm:p-3 rounded-2xl bg-white/5 border border-white/10 text-center cursor-pointer hover:bg-white/10"
                >
                  <img
                    src={item.avatar}
                    className="w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-full mb-2 object-cover"
                  />

                  <p className="text-sm font-semibold">{item.name}</p>

                  <p className="text-xs text-gray-500">{item.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* SECOND LOOPING LINE */}
        <div className="mt-3 w-full overflow-hidden flex justify-center">
          <div className="w-full max-w-[850px] overflow-hidden px-2">
<div
  ref={eliteTrackRef}
  className="flex gap-4 w-max"
>
              {[...eliteMembers, ...eliteMembers, ...eliteMembers].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.05 }}
                  onClick={() => setSelected(item)}
                  className="min-w-[110px] sm:min-w-[140px] p-2 sm:p-3 rounded-2xl bg-white/5 border border-white/10 text-center cursor-pointer hover:bg-white/10"
                >
                  <img
                    src={item.avatar}
                    className="w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-full mb-2 object-cover"
                  />

                  <p className="text-sm font-semibold">
                    {item.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {item.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ❤️ HEART BUTTON */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      >
        <button
          onClick={toggleLike}
          className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
        >
          <motion.div
            whileTap={{ scale: 1.3 }}
            animate={
              liked
                ? {
                    scale: [1, 1.25, 1],
                  }
                : {}
            }
            transition={{ duration: 0.4 }}
          >
            <FaHeart
              className={`text-lg transition ${
                liked ? 'text-red-500' : 'text-white'
              }`}
            />
          </motion.div>

          <span className="text-sm font-medium text-white">
            {likes}
          </span>
        </button>
      </motion.div>

{/* 🎵 MUSIC PANEL (UPGRADED MFS EDITION) */}
<motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  whileHover={{ y: -4, scale: 1.01 }}
  className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50"
>
  <div className="
    relative overflow-hidden
    w-[240px] sm:w-[270px]
    rounded-[22px]
    border border-white/10
    bg-gradient-to-b from-white/10 via-black/40 to-black/60
    backdrop-blur-3xl
    shadow-[0_0_60px_rgba(255,0,0,0.08)]
  ">

    {/* RED CORE GLOW (MFS SIGNATURE) */}
    <motion.div
      animate={{
        opacity: [0.12, 0.25, 0.12],
        scale: [1, 1.2, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className="absolute -top-10 -left-10 w-40 h-40 bg-red-500/20 rounded-full blur-3xl"
    />

    {/* SHINE STRIPE */}
    <motion.div
      animate={{ x: ['-150%', '250%'] }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: 'linear',
      }}
      className="absolute inset-0 w-20 bg-white/5 skew-x-12 blur-xl"
    />

    <div className="relative flex items-center gap-3 p-3">

      {/* COVER (VINYL STYLE) */}
      <div className="relative flex-shrink-0">

        {!musicPaused && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: 'linear',
            }}
            className="absolute -inset-2 rounded-2xl border border-white/10"
          />
        )}

        <motion.img
          animate={
            musicPaused
              ? {}
              : { rotate: 360 }
          }
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: 'linear',
          }}
          src={playlist[currentSong].cover}
          className="
            w-12 h-12
            rounded-xl
            object-cover
            border border-white/10
            shadow-[0_0_20px_rgba(255,0,0,0.15)]
          "
        />

        {/* CENTER DOT */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-black/80 border border-white/20" />
        </div>
      </div>

      {/* INFO */}
      <div className="flex-1 min-w-0">

        <div className="flex items-center gap-2">
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="w-2 h-2 rounded-full bg-red-500"
          />
          <p className="text-[9px] uppercase tracking-[3px] text-gray-400">
            Now Playing
          </p>
        </div>

        <h2 className="text-sm font-bold truncate mt-1">
          {playlist[currentSong].title}
        </h2>

        <p className="text-[11px] text-gray-400 truncate">
          {playlist[currentSong].artist}
        </p>

        {/* PROGRESS (FAKE BUT SMOOTH UI BAR) */}
        <div className="mt-2 w-full h-[3px] rounded-full bg-white/10 overflow-hidden">
          <motion.div
            animate={{
              x: ['-120%', '220%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: 'linear',
            }}
            className="w-14 h-full bg-gradient-to-r from-red-500 to-white rounded-full blur-[0.5px]"
          />
        </div>

        {/* CONTROLS */}
        <div className="flex items-center justify-between mt-3">

          <div className="flex items-center gap-2">

            {/* PREV */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.08 }}
              onClick={prevSong}
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center"
            >
              <FaBackward className="text-[9px]" />
            </motion.button>

            {/* PLAY */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={togglePause}
              className="
                w-8 h-8 rounded-full
                bg-red-500/20 hover:bg-red-500/30
                border border-red-500/30
                flex items-center justify-center
              "
            >
              {musicPaused ? (
                <FaPlay className="text-[10px] text-red-400" />
              ) : (
                <FaPause className="text-[10px] text-red-400" />
              )}
            </motion.button>

            {/* NEXT */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.08 }}
              onClick={nextSong}
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center"
            >
              <FaForward className="text-[9px]" />
            </motion.button>

            {/* MUTE */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.08 }}
              onClick={toggleMute}
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center"
            >
              {muted ? (
                <FaVolumeMute className="text-[10px]" />
              ) : (
                <FaVolumeUp className="text-[10px]" />
              )}
            </motion.button>

          </div>

          {/* VISUALIZER */}
          <div className="flex items-end gap-[2px] h-6">
            {[6, 12, 8, 14, 10].map((h, i) => (
              <motion.span
                key={i}
                animate={
                  musicPaused
                    ? { height: h }
                    : {
                        height: [h, h + 6, h - 2, h],
                      }
                }
                transition={{
                  repeat: Infinity,
                  duration: 1 + i * 0.12,
                }}
                className="w-[2px] rounded-full bg-red-400"
              />
            ))}
          </div>

        </div>
      </div>
    </div>

    {/* BOTTOM EDGE GLOW */}
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

    {/* AUDIO */}
    <audio
      ref={audioRef}
      autoPlay
      muted={muted}
      src={playlist[currentSong].src}
    />
  </div>
</motion.div>

{/* MODAL */}
<AnimatePresence>
  {selected && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelected(null)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-2xl overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl"
      />

      {/* CARD */}
      <motion.div
        initial={{
          scale: 0.7,
          opacity: 0,
          y: 100,
          rotateX: 20,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
          rotateX: 0,
        }}
        exit={{
          scale: 0.7,
          opacity: 0,
          y: 100,
        }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 14,
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-[92%] max-w-[420px] overflow-hidden rounded-[35px] border border-white/10 bg-[#080808]/90 backdrop-blur-3xl shadow-[0_0_100px_rgba(255,255,255,0.08)]"
      >

        {/* ANIMATED BORDER */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'linear',
          }}
          className="absolute inset-0 opacity-20 blur-2xl"
          style={{
            background:
              'linear-gradient(120deg, rgba(255,255,255,0.4), transparent, rgba(255,255,255,0.3))',
            backgroundSize: '200% 200%',
          }}
        />

        {/* BANNER */}
        <div className="relative h-[140px] sm:h-[170px] overflow-hidden">

          <motion.img
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
            }}
            src={selected.banner || '/images/red.gif'}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#080808]" />

          {/* SHINE */}
          <motion.div
            animate={{
              x: ['-120%', '220%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: 'linear',
            }}
            className="absolute top-0 left-0 w-32 h-full bg-white/10 skew-x-12 blur-xl"
          />
        </div>

        {/* CONTENT */}
        <div className="relative px-7 pb-7">

          {/* AVATAR */}
          <div className="relative w-fit mx-auto -mt-16">

            {/* GLOW */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute inset-0 rounded-full bg-white/20 blur-3xl"
            />

            {/* OUTER RING */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: 'linear',
              }}
              className="absolute inset-[-10px] rounded-full border border-white/20"
            />

            {/* IMAGE */}
            <motion.img
              whileHover={{
                scale: 1.05,
              }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              src={selected.avatar}
              className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-[3px] border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.2)]"
            />

            {/* STATUS */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className={`absolute bottom-3 right-3 w-5 h-5 rounded-full border-4 border-[#080808] ${selected.statusColor}`}
            />
          </div>

          {/* NAME */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-2xl sm:text-3xl font-black tracking-wide flex items-center justify-center gap-3"
          >
            {selected.name}

            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              <FaDiscord className="text-indigo-400 text-xl" />
            </motion.div>
          </motion.h2>

          {/* ROLE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-sm mt-2 tracking-[3px] uppercase text-center"
          >
            {selected.role}
          </motion.p>

          {/* DIVIDER */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '70%' }}
            transition={{ delay: 0.4 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-6"
          />

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-300 leading-relaxed mt-6 text-center"
          >
            {selected.description}
          </motion.p>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-7">

            {/* PROFILE */}
            <motion.a
              href={selected.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="px-5 py-3 rounded-2xl bg-white text-black text-sm font-semibold inline-flex items-center justify-center shadow-xl"
            >
              Profile
            </motion.a>

            {/* DISCORD */}
            <motion.a
              href={selected.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/20 flex items-center justify-center"
            >
              <FaDiscord className="text-indigo-400 text-lg" />
            </motion.a>

            {/* TIKTOK */}
            <motion.a
              href={selected.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center"
            >
              <FaTiktok className="text-white text-lg" />
            </motion.a>

          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  )
}