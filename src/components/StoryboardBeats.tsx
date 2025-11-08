"use client";

import { motion } from "framer-motion";
import styles from "./StoryboardBeats.module.css";

const beats = [
  {
    title: "Beat 1 — Orbit Shot",
    description:
      "Earth ke orbit se slow parallax shot. Alien craft ka silhouette, glowing teal energy trail chhodta hua.",
    tip: "Start with a 3 second establishing frame, Veo ko macro-to-micro camera glide bataye."
  },
  {
    title: "Beat 2 — Cloud Break",
    description:
      "Monsoon clouds me split hote hi craft warm golden lights release karta hai. Samne se rain droplets lens flare create karte hain.",
    tip: "Use 'volumetric god rays' aur 'dynamic droplets' keywords for depth."
  },
  {
    title: "Beat 3 — Human Contact",
    description:
      "Marine Drive par ek baccha curiosity ke saath haath barhata hai; alien ka translucent glove gentle light pulse deta hai.",
    tip: "Foreground blur + shallow depth-of-field specify karke emotional intimacy ko emphasise kare."
  },
  {
    title: "Beat 4 — Farewell Drift",
    description:
      "Spaceship tranquil taur par sky me absorb ho jata hai, leaving bio-luminescent particles over ocean horizon.",
    tip: "Ending ke liye 'slow rack focus' aur 'bokeh particle drift' prompt me add kare."
  }
];

export function StoryboardBeats() {
  return (
    <section className="glass-panel">
      <div className={styles.header}>
        <span className="badge">Sequence Blueprint</span>
        <h2>Storyboard Beats</h2>
        <p>
          Ye breakdown Veo 3 ko step-by-step storytelling provide karta hai taki
          motion me clarity aur continuity dono rahe.
        </p>
      </div>
      <div className={styles.list}>
        {beats.map((beat, index) => (
          <motion.article
            key={beat.title}
            className={styles.item}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <header>
              <span>{beat.title}</span>
            </header>
            <p>{beat.description}</p>
            <div className={styles.tip}>
              <strong>Pro Tip:</strong> {beat.tip}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
