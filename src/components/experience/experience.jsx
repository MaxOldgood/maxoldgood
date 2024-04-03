import { FreelanceDescription, StradaDescription } from "./descriptions.jsx";
import styles from "./experience.module.scss";
import { FREELANCE_ICON_LIST, STRADA_ICON_LIST } from "./iconList.js";
import { Job } from "./job.jsx";

import { useState } from "react";

export function Experience() {
  const [neon, setNeon] = useState(false);

  return (
    <section
      className={`${styles.experience} ${neon && styles.experience__neon}`}
    >
      <button
        className={`${styles.light} ${neon && styles.light__neon}`}
        onClick={() => setNeon(!neon)}
      />
      <header className={styles.experience__header}>
        <h2 className={styles.experience__title}>Experience</h2>
      </header>
      <div
        className={`${styles.experience__body} ${
          neon && styles.experience__body_neon
        }`}
      >
        <Job
          period={"March 2023 - April 2024"}
          company={"STRADA"}
          profession={"Frontend Developer"}
          description={<StradaDescription />}
          icons={STRADA_ICON_LIST}
        />
        <Job
          period={"January 2023 - March 2023"}
          company={"FREELANCE"}
          profession={"Web Developer"}
          description={<FreelanceDescription />}
          icons={FREELANCE_ICON_LIST}
        />
      </div>
    </section>
  );
}
