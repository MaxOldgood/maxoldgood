import { ICONS_LIST } from "./iconList";
import styles from "./projects.module.scss";
import { Icon } from "../icon/icon";
import { motion } from "framer-motion";
import { ANIMATION } from "../../const/animation.js";

import { useState } from "react";

export function Project({ title, ghLink, demoLink, image, name, description }) {
  const [neon, setNeon] = useState(false);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={ANIMATION}
      className={`${styles.projects} ${neon && styles.projects__neon}`}
    >
      <button
        className={`${styles.light} ${neon && styles.light__neon}`}
        onClick={() => setNeon(!neon)}
      />
      <header className={styles.projects__header}>
        <h2 className={styles.projects__title}>{title}</h2>
        <div className={styles.projects__links}>
          <a
            className={styles.projects__buttonLink}
            href={ghLink}
            target="blank"
          >
            GitHub
          </a>
          <a
            className={styles.projects__buttonLink}
            href={demoLink}
            target="blank"
          >
            Demo
          </a>
        </div>
      </header>
      <div
        className={`${styles.projects__body} ${
          neon && styles.projects__body_neon
        }`}
      >
        <div className={styles.projects__project}>
          <a className={styles.projects__link} href={demoLink} target="blank">
            <img className={styles.projects__image} src={image} />
            <div className={styles.projects__image_overlay}>
              <h3 className={styles.projects__name}>{name}</h3>
            </div>
          </a>
          <div className={styles.projects__info}>
            <ul className={styles.projects__stack}>
              {ICONS_LIST.map((icon) => {
                return (
                  <li key={icon.name}>
                    <Icon
                      name={icon.name}
                      src={icon.src}
                      className={styles.projects__stack_icon}
                    />
                  </li>
                );
              })}
            </ul>
            <div
              className={`${styles.projects__description} ${
                neon && styles.projects__description_neon
              }`}
            >
              <p className={styles.projects__description_text}>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
