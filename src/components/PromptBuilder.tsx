"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import styles from "./PromptBuilder.module.css";

const defaultState = {
  location: "futuristic Mumbai coastline",
  timeOfDay: "blue hour sunset",
  mood: "wonder & warmth",
  camera: "IMAX drone fly-through with cinematic dolly-in",
  keyMoment:
    "alien starship pierces the clouds, gently hovering beside the Gateway of India",
  texture: "hyperreal detail with neon reflections on water",
  pacing: 12,
  voiceTone: "narrated in calm, poetic Hindi with soft synth pads"
};

export function PromptBuilder() {
  const [formState, setFormState] = useState(defaultState);

  const finalPrompt = useMemo(() => {
    return [
      "Veo 3 cinematic video, 16 seconds, 24 fps, 16:9 aspect ratio.",
      `Setting: ${formState.location} during ${formState.timeOfDay}.`,
      `Mood palette: ${formState.mood}.`,
      `Camera: ${formState.camera}, slow ease-in-out motion, ${formState.pacing} second pacing.`,
      `Moment: ${formState.keyMoment}.`,
      `Look: ${formState.texture}.`,
      `Sound design: ${formState.voiceTone}.`,
      "Focus on a friendly alien silhouette removing helmet, exchanging curious glance with a child, seamless blend of VFX and grounded realism."
    ].join(" ");
  }, [formState]);

  return (
    <section className="glass-panel">
      <div className={styles.header}>
        <span className="badge">Prompt Generator</span>
        <h2>Veo 3 Prompt Synthesizer</h2>
        <p>
          Niche parameters select karke apna personalised prompt banaye. Niche
          change karte hi ready-to-copy prompt turant update hota rahega.
        </p>
      </div>
      <div className={styles.grid}>
        <label>
          Location &amp; Setting
          <input
            type="text"
            value={formState.location}
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                location: event.target.value
              }))
            }
          />
        </label>
        <label>
          Lighting / Time of Day
          <input
            type="text"
            value={formState.timeOfDay}
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                timeOfDay: event.target.value
              }))
            }
          />
        </label>
        <label>
          Mood Keywords
          <input
            type="text"
            value={formState.mood}
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                mood: event.target.value
              }))
            }
          />
        </label>
        <label>
          Camera Language
          <input
            type="text"
            value={formState.camera}
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                camera: event.target.value
              }))
            }
          />
        </label>
        <label className={styles.wide}>
          Key Moment Focus
          <input
            type="text"
            value={formState.keyMoment}
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                keyMoment: event.target.value
              }))
            }
          />
        </label>
        <label className={styles.wide}>
          Texture &amp; Visual Style
          <input
            type="text"
            value={formState.texture}
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                texture: event.target.value
              }))
            }
          />
        </label>
        <label>
          Shot Duration (seconds)
          <input
            type="range"
            min={6}
            max={20}
            value={formState.pacing}
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                pacing: Number(event.target.value)
              }))
            }
          />
          <span className={styles.rangeValue}>{formState.pacing}s</span>
        </label>
        <label className={styles.wide}>
          Voice &amp; Soundscape Direction
          <input
            type="text"
            value={formState.voiceTone}
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                voiceTone: event.target.value
              }))
            }
          />
        </label>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={styles.output}
      >
        <div className={styles.outputLabel}>Ready To Paste Prompt</div>
        <textarea value={finalPrompt} readOnly rows={6} />
      </motion.div>
    </section>
  );
}
