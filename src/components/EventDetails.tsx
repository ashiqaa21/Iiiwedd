"use client";

import { Calendar, Clock, MapPin, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const EventDetails = () => {
 const [opened, setOpened] = useState(false);
const [chapterOpened, setChapterOpened] = useState(false);

const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const ceremonyLocation =
    "https://maps.google.com/?q=Riverside+Estate+Sonoma";
  const celebrationLocation =
    "https://maps.google.com/?q=Great+Barn+Hall+Sonoma";

  return (
<section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-16 px-4 max-w-6xl mx-auto items-start mt-8 md:mt-12">      
      {/* ================= CARD 1 ================= */}
<div className="relative pt-16 md:pt-20">
        {/* ✨ INTERACTIVE BLENDED BOW */}
        {/* ✨ INTERACTIVE CLEAN BOW */}
<motion.div
  onClick={() => setOpened(!opened)}
  className="absolute -top-8 md:-top-10 left-1/2 
             -translate-x-1/2
w-[150px] md:w-[190px]         
    z-30 cursor-pointer"
  initial={{ y: 0 }}
  whileHover={{ y: -3 }}
  whileTap={{ scale: 0.97 }}
  animate={{ rotate: opened ? 3 : 0 }}
  transition={{ type: "spring", stiffness: 180, damping: 14 }}
>
  {/* subtle glow */}
  <div
    className="absolute inset-0 rounded-full
               bg-[#d4af37]/10 blur-xl scale-90"
  />

  <motion.img
    src="/b.png"
    alt="Gold Bow"
    className="relative w-full h-auto object-contain select-none
               drop-shadow-[0_6px_14px_rgba(134,113,46,0.22)]"
  />
</motion.div>

        {/* 💌 MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-[#fffdfa] p-8 md:p-12 md:pt-24 rounded-sm shadow-[0_15px_45px_rgba(184,134,11,0.08)] border border-[#d4af37]/20 text-center overflow-hidden"
        >
          {/* Glow behind bow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#d4af37]/10 blur-[60px] -translate-y-1/2" />

          {/* <Calendar className="text-[#b38728] mx-auto mb-6 opacity-60" size={24} strokeWidth={1} /> */}

          <h3 className="font-serif italic text-xl md:text-4xl text-[#86712e] mb-4">
            In the name of Allah, the Most Gracious, the Most Merciful.
          </h3>

<div className="mb-8 font-serif text-[#86712e]/90 italic leading-relaxed text-center space-y-6">

  {/* Main Invitation Text */}
  <div className="space-y-2">
    <p className="text-xl md:text-xl ">
      A beautiful promise, a journey of forever, and a celebration of love.
    Together with our families, we invite you
      to witness the Wedding of
  </p>
  </div>

  {/* ✨ Highlight Names */}
  <div className="pt-2">
    <span className="block font-semibold text-3xl md:text-5xl tracking-wide whitespace-nowrap text-[#6b5a25]">
      Ismail & Rashida
    </span>

    {/* Elegant Divider */}
    <div className="w-20 h-[1px] bg-[#d4af37]/50 mx-auto mt-3"></div>
  </div>

</div>
          {/* <div className="space-y-4 font-serif text-[#b38728] border-y border-[#d4af37]/10 py-8 my-6">
            <div className="flex items-center justify-center gap-3">
              <Clock size={16} className="opacity-50" />
              <span className="tracking-[0.2em] uppercase text-[10px] md:text-xs font-semibold text-[#86712e]">
                Saturday, 4:00 PM
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <MapPin size={16} className="opacity-50" />
              <span className="tracking-[0.2em] uppercase text-[10px] md:text-xs font-semibold text-[#86712e]">
                Riverside Estate, Sonoma
              </span>
            </div>
          </div> */}

<motion.button
  onClick={() => setChapterOpened(!chapterOpened)}
  whileTap={{ scale: 0.97 }}
  animate={{
    scale: chapterOpened ? 1.03 : 1,
  }}
  transition={{ type: "spring", stiffness: 180 }}
  className="
    mt-6
    w-full
    py-4
    bg-[#86712e]
    text-[#fffdfa]
    font-serif
    text-[10px]
    tracking-[0.4em]
    uppercase
    transition-all
    shadow-md
    rounded-sm
    hover:bg-[#6b5a25]
  "
>
  {chapterOpened ? "Close Memories" : "A New Chapter Begins"}
</motion.button>
<AnimatePresence>
  {chapterOpened && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden mt-6"
    >
<div className="grid grid-cols-2 gap-3 md:grid-cols-3">

  {["/bride.jpg", "/bride.jpg", "/bride.jpg","/bride.jpg"].map((img, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="overflow-hidden rounded-2xl cursor-pointer"
      onClick={() => setSelectedImage(img)}
    >
      <img
        src={img}
        alt="Couple"
        className="rounded-2xl object-cover h-50 w-full shadow-lg transition duration-300 hover:brightness-105"
      />
    </motion.div>
  ))}

</div>
    </motion.div>
  )}
</AnimatePresence>
        </motion.div>
      </div>

<motion.img
  src="/h.png"
  alt=""
  className="
    w-[120%]
    max-w-none
    -ml-[10%]
    h-auto
    select-none
    mb-10
    opacity-70
    mix-blend-multiply
    [filter:drop-shadow(0_10px_18px_rgba(134,113,46,0.25))]
  "
/>
      {/* ================= CARD 2 ================= */}
 {/* ================= CARD 2 (PREMIUM GOLD LOCATION) ================= */}
<div className="relative  w-screen left-1/2 -translate-x-1/2">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1, duration: 0.6 }}
    className="relative text-center p-10 md:p-14 
               bg-gradient-to-b from-[#b38728] via-[#a0781f] to-[#6b5a25]
               text-white overflow-hidden"
  >

    {/* ✨ subtle glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

    {/* Title */}
    <h3 className="font-romantic text-3xl md:text-4xl mb-2 tracking-wide">
      The Venue
    </h3>

    {/* Location Name */}


    {/* Divider */}
    <div className="w-16 h-[1px] bg-white/40 mx-auto my-2" />

    {/* Description */}
    <p className="text-white/80   text-2xl md:text-2xl italic max-w-md mx-auto  mb-7">
ISM Auditorium ,Vilayur-kuppooth  <br/> 5:00 PM - 8:30 PM </p>

    {/* White Premium Button */}
 <a
href="https://www.google.com/maps/place/ISM+Auditorium/@10.9027731,76.1613813,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba7c95e8564aa05:0xea9a3d6a32df0af4!8m2!3d10.9027731!4d76.1639562!16s%2Fg%2F11t5rd19xc?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"  target="_blank"
  rel="noopener noreferrer"
  className="relative z-30 inline-flex items-center justify-center gap-2 
             px-7 py-4 bg-white text-black
             text-[10px] tracking-[0.4em] uppercase 
             font-bold rounded-sm shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] 
             hover:shadow-[0_6px_20px_rgba(184,134,11,0.15)]
             hover:-translate-y-0.5 active:scale-95
             transition-all duration-200 cursor-pointer"
>
  <MapPin size={15} className="opacity-30" />
  View Location
</a>
  </motion.div>

</div>
{/* ✨ FULLSCREEN IMAGE GALLERY */}
<AnimatePresence>
  {selectedImage && (
    <motion.div
      className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/* Close Button */}
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-6 right-6 text-white text-4xl z-50 hover:scale-110 transition"
      >
        ×
      </button>

      {/* Image */}
      <motion.img
        src={selectedImage}
        alt="Gallery"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
      />
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
};