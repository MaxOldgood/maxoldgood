import { useEffect, useState } from "react";
import { Contacts } from "../components/contacts/contacts";
import { Experience } from "../components/experience/experience";
import { Hero } from "../components/hero/hero";
import { Skills } from "../components/skills/skills";
import styles from "./app.module.scss";
import { Tooltip } from "react-tooltip";
import { Project } from "../components/projects/project";
import baraholka from "../assets/img/baraholka.png";

function App() {
  const [preloaderState, setPreloaderState] = useState(true);
  const [noScroll, setNoScroll] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreloaderState(false);
    }, 7000);

    setTimeout(() => {
      setNoScroll(false);
    }, 5000);
  }, []);

  return (
    <>
      {preloaderState && (
        <div className={styles.preloader}>
          <p className={styles.preloader__hint}>
            Touch the lights to switch between noir and neon style
          </p>
          <div className={styles.preloader__neons}>
            <span className={styles.preloader__neon_red} />
            <span className={styles.preloader__neon_blue} />
            <span className={styles.preloader__neon_green} />
            <span className={styles.preloader__neon_purple} />
            <span className={styles.preloader__neon_pink} />
          </div>
          <p className={styles.preloader__hint}>
            Коснись ламп, чтобы переключиться между нуарным и неоновым стилем
          </p>
        </div>
      )}
      <div
        className={`${styles.app} ${noScroll && styles.app_noscroll} container`}
      >
        <Hero />
        <Skills />
        <Project
          title={"project #1"}
          ghLink={"https://github.com/MaxOldgood/baraholka"}
          demoLink={"https://maxoldgood.github.io/baraholka/"}
          image={baraholka}
          name={"baraholka"}
          description={`  Minimalistic e-commerce website. All products and categories
                  are fetching by API. Change filters, sort
                  products, search and see result momentally. Check it out!`}
        />
        <Experience />
        <Contacts />
        <Tooltip
          opacity={1}
          style={{
            backgroundColor: "111111",
            color: "#cccccc",
            paddingInline: "8px",

            fontWeight: 500,
            borderRadius: "6px",
          }}
          id="icon"
        />
      </div>
    </>
  );
}

export default App;
