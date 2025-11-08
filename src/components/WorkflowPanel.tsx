import styles from "./WorkflowPanel.module.css";

const steps = [
  {
    title: "1. Research & Moodboarding",
    items: [
      "Alien arrival reference frames collect kare (Arrival, Contact, District 9).",
      "Color palette decide kare: teal aur amber contrast ke saath Mumbai skyline.",
      "Sound inspire kare: lo-fi synth pads + tabla percussion hybrids."
    ]
  },
  {
    title: "2. Prompt Authoring",
    items: [
      "Prompt builder ke output ko base banae, par Veo 3 ke syntax me numeric timing specify kare.",
      "Key elements ko bullet points me convert kare, har beat ke liye individual paragraphs likhe.",
      "Hindi + English keywords mix karke cultural aur cinematic nuance maintain kare."
    ]
  },
  {
    title: "3. Iterative Generation",
    items: [
      "Veo 3 me first pass generate kare, low motion blur toggle disable kare.",
      "Preview me pacing check kare, agar jaldi lag raha ho toh prompt me 'prolonged glide' add kare.",
      "Lighting color shift ke liye seed variation try kare jab tak glow balance perfect na ho."
    ]
  },
  {
    title: "4. Post & Delivery",
    items: [
      "Final render ko DaVinci Resolve ya CapCut me import kare cold-to-warm grade ke saath.",
      "Soft Hindi narration record kare, reverb ko 0.2s tak limit kare so clarity bani rahe.",
      "Deliverable ko 4K & 1080p dono versions me export kare Vercel / social launch ke liye."
    ]
  }
];

export function WorkflowPanel() {
  return (
    <section className="glass-panel">
      <div className={styles.header}>
        <span className="badge">Production Workflow</span>
        <h2>Alien Encounter Pipeline</h2>
        <p>
          Ye workflow end-to-end process cover karta hai — concept planning se
          lekar final grade upload tak. Veo 3 ke strengths ko highlight karte hue
          practical steps follow kare.
        </p>
      </div>
      <div className={styles.timeline}>
        {steps.map((step, index) => (
          <div key={step.title} className={styles.step}>
            <div className={styles.bullet}>
              <span>{index + 1}</span>
            </div>
            <div className={styles.content}>
              <h3>{step.title}</h3>
              <ul>
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
