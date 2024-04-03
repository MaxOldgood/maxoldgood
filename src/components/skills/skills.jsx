import styles from "./skills.module.scss";

import { useState } from "react";
import { Icon } from "../icon/icon";
import { IconsList } from "./iconsList";

export function Skills() {
  const [neon, setNeon] = useState(false);

  return (
    <section
      className={`narrow_section ${neon && "narrow_section__neon_blue"} ${
        styles.skills
      } ${neon && styles.skills__neon}`}
    >
      <button
        className={`${styles.light} ${neon && styles.light__neon}`}
        onClick={() => setNeon(!neon)}
      />

      <header className="narrow_section__header">
        <h2 className="narrow_section__title">skills</h2>
      </header>
      <div
        className={`narrow_section__body ${styles.skills__body} ${
          neon && styles.skills__body_neon
        }`}
      >
        <ul className="narrow_section__stack">
          {IconsList.map((icon) => {
            return (
              <li key={icon.name}>
                <Icon
                  className="narrow_section__icon"
                  name={icon.name}
                  src={icon.src}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
