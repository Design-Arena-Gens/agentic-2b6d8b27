import styles from "./TechSpecs.module.css";

const specs = [
  {
    label: "Resolution",
    value: "3840 x 2160 (16:9)",
    note: "Veo 3 upscaler enable karke detail sharpness secure kare."
  },
  {
    label: "Frame Rate",
    value: "24 fps cinematic",
    note: "Motion blur aur natural cadence maintain karne ke liye."
  },
  {
    label: "Color Grade",
    value: "Teal / Orange Hybrid LUT",
    note: "Alien tech glow ko highlight karte hue human warmth retain kare."
  },
  {
    label: "Audio",
    value: "Spatial stereo, -14 LUFS",
    note: "Narration ke liye noise floor ko -55 dB tak clean kare."
  },
  {
    label: "Delivery",
    value: "WebM & MP4, H.265",
    note: "Vercel par fast streaming ke liye dual codec distribute kare."
  }
];

export function TechSpecs() {
  return (
    <section className={`${styles.wrapper} glass-panel`}>
      <header className={styles.header}>
        <span className="badge">Spec Sheet</span>
        <h2>Technical Preferences</h2>
        <p>
          Final render ko industry ready banane ke liye ye recommended specs follow
          kare. Har field ko apne distribution platform ke mutabik tweak kar sakte
          hain.
        </p>
      </header>
      <div className={styles.grid}>
        {specs.map((spec) => (
          <article key={spec.label}>
            <h3>{spec.label}</h3>
            <p className={styles.value}>{spec.value}</p>
            <p>{spec.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
