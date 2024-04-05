import styles from "../hero/hero.module.scss";
import maxImage from "../../assets/img/avatar.png";
import { motion } from "framer-motion";
import { ANIMATION } from "../../const/animation.js";
import { useState } from "react";

export function Hero() {
  const [neon, setNeon] = useState(false);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={ANIMATION}
      className={`${styles.hero} ${neon && styles.hero__neon}`}
    >
      <button
        className={`${styles.light} ${neon && styles.light__neon}`}
        onClick={() => setNeon(!neon)}
      />
      <div
        className={`${styles.hero__overlay} ${
          neon && styles.hero__overlay_neon
        }`}
      ></div>
      <div className={styles.hero__inner}>
        <div className={styles.hero__body}>
          <p className={styles.hero__meet}>meet </p>
          <p
            className={`${styles.hero__name} ${
              neon && styles.hero__name_neon
            } `}
          >
            Max Oldgood
          </p>
          <p className={styles.hero__subtitle}>your new frontend developer </p>
        </div>
        <img
          className={`${styles.hero__image} ${
            neon && styles.hero__image_neon
          } `}
          src={maxImage}
          width={350}
        />
      </div>
    </motion.section>
  );
}
