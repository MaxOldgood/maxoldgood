import styles from "./experience.module.scss";
import { Icon } from "../icon/icon";

export function Job({ period, company, profession, description, icons }) {
  return (
    <div className={styles.experience__job}>
      <p className={styles.experience__period}>{period}</p>
      <h3 className={styles.experience__company}>{company}</h3>
      <p className={styles.experience__profession}>{profession}</p>
      <div className={styles.experience__description}>{description}</div>
      <ul className={styles.experience__stack}>
        {icons.map((icon) => {
          return (
            <li key={icon.name}>
              <Icon
                name={icon.name}
                src={icon.src}
                className={styles.experience__stack_icon}
                place="bottom"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
