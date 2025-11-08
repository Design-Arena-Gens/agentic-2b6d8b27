"use client";

import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

const headline = "Alien Ka Earth Par Swagat";
const subline =
  "Google Veo 3 ke advanced generative video model ka istemaal karke ek cinematic kahani banaye jahan ek dostana alien pehli baar hamare grah par utarta hai.";

export function HeroSection() {
  return (
    <section className={`${styles.wrapper} glass-panel`}>
      <div className={styles.meta}>
        <span className="badge">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className={styles.badgeIcon}
          />
          Veo 3 Ready Workflow
        </span>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {headline}
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subline}
        </motion.p>
      </div>
      <motion.div
        className={styles.scene}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        <div className={styles.planetaryScene}>
          <motion.div
            className={styles.planet}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          />
          <motion.div
            className={styles.alien}
            animate={{
              translateX: ["120%", "-20%"],
              translateY: ["-20%", "30%", "-10%"]
            }}
            transition={{
              repeat: Infinity,
              duration: 13,
              ease: "easeInOut"
            }}
          >
            <div className={styles.spaceshipGlow} />
            <div className={styles.spaceshipBody} />
          </motion.div>
          <motion.div
            className={styles.ring}
            animate={{ rotate: [0, -8, 6, 0] }}
            transition={{ repeat: Infinity, duration: 18 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
