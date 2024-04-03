import styles from "./contacts.module.scss";
import { Icon } from "../icon/icon.jsx";
import { useState } from "react";
import { ICONS_LIST } from "./iconsList";

export function Contacts() {
  const [neon, setNeon] = useState(false);

  return (
    <section
      className={`narrow_section ${neon && "narrow_section__neon_pink"} ${
        styles.contacts
      } ${neon && styles.contacts__neon}`}
    >
      <button
        className={`${styles.light} ${neon && styles.light__neon}`}
        onClick={() => setNeon(!neon)}
      />
      <header className="narrow_section__header">
        <h2 className="narrow_section__title">Contacts</h2>
      </header>
      <div
        className={`narrow_section__body ${styles.contacts__body} ${
          neon && styles.contacts__body_neon
        }`}
      >
        <ul className="narrow_section__stack">
          {ICONS_LIST.map((icon) => {
            return (
              <li key={icon.name}>
                <a href={icon.href} target="blank">
                  <Icon
                    className="narrow_section__icon"
                    name={icon.name}
                    src={icon.src}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
