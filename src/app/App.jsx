import { useEffect, useState } from "react";
import { Contacts } from "../components/contacts/contacts";
import { Experience } from "../components/experience/experience";
import { Hero } from "../components/hero/hero";
import { Skills } from "../components/skills/skills";
import styles from "./app.module.scss";
import { Tooltip } from "react-tooltip";
import { Project } from "../components/projects/project";
import baraholka from "../assets/img/baraholka.png";
import loto from "../assets/img/loto.jpg";
import { ICONS_LIST_1, ICONS_LIST_2 } from "../components/projects/iconList";

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
          icons={ICONS_LIST_1}
          description={`  Minimalistic e-commerce website. All products and categories
                  are fetching by API. Change filters, sort
                  products, search and see result momentally. Check it out!`}
        />
        <Project
          title={"project #2"}
          ghLink={"https://github.com/MaxOldgood/loto"}
          demoLink={"https://maxoldgood.github.io/loto/"}
          image={loto}
          name={"Mini-game: 8/19"}
          icons={ICONS_LIST_2}
          description={`The game has two fields. The lottery participant is required to mark eight numbers in the first field and one number in the second. If four or more numbers in the first field match, or three or more numbers in the first field and one in the second, the user is considered the winner of the lottery and receives a prize (nothing).`}
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
