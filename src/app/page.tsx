import { HeroSection } from "@/components/HeroSection";
import { PromptBuilder } from "@/components/PromptBuilder";
import { StoryboardBeats } from "@/components/StoryboardBeats";
import { TechSpecs } from "@/components/TechSpecs";
import { WorkflowPanel } from "@/components/WorkflowPanel";
import styles from "./page.module.css";

const resourceLinks = [
  {
    title: "Veo 3 Prompt Reference",
    href: "https://labs.google.com/veo",
    description:
      "Official documentation jahan se prompt formatting aur sample outputs milte hain."
  },
  {
    title: "Soundtrack Inspiration",
    href: "https://soundcloud.com/search/sounds?q=cinematic%20synth%20pads",
    description:
      "Ambient synth aur tabla fusion references collect karne ke liye curated search."
  },
  {
    title: "Color Palette Picker",
    href: "https://coolors.co/palette/001220-0a3a40-178582-5fb49c-c4fff9",
    description:
      "Teal + cyan + aurora tones jo alien tech glow ko complement karte hain."
  }
];

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <PromptBuilder />
      <StoryboardBeats />
      <WorkflowPanel />
      <TechSpecs />
      <section className={`${styles.resources} glass-panel`}>
        <header>
          <span className="badge">Resources</span>
          <h2>Jumpstart Toolkit</h2>
          <p>
            Veo 3 me jaldi se ship karne ke liye ye curated tools aur references
            ka istemal kare. Har link ek trusted starting point provide karta hai.
          </p>
        </header>
        <div className={styles.cards}>
          {resourceLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={styles.card}
            >
              <h3>{link.title}</h3>
              <p>{link.description}</p>
            </a>
          ))}
        </div>
      </section>
      <footer className={styles.footer}>
        <p>
          Crafted as a concept demo for Veo 3 storytellers — alien aur insaan ke
          beech pehli mulaqat ko cinematic andaaz me capture kare.
        </p>
      </footer>
    </main>
  );
}
