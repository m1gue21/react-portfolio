import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutMigue.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        {/* TODO: hacer que los items de la lista sean clickeables, y expandan a un modal estilo tarjeta que amplié la informacion */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites. I have worked with various frameworks and
                technologies, focusing professionally on Angular and Tailwind
                CSS, but I have also explored different frameworks.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div class="aboutItemText">
              <h3>Problem Solver & Innovator</h3>
              <p>
                I excel at overcoming challenges and finding creative solutions.
                During my time at a startup, I demonstrated this by quickly
                adapting to new technologies and solving technical issues.
                Additionally, I successfully developed{" "}
                <a
                className={styles.aboutLink}
                  href="https://github.com/m1gue21/Joselito-s-Adventure"
                  target="_blank"
                >
                  "Joselito's Adventure"
                </a>
                , a video game that showcases my ability to innovate and tackle
                complex problems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Aspiring Learner</h3>
              <p>
                I am currently seeking a job opportunity where I can
                significantly expand my knowledge and be part of a team from
                whom I can learn, regardless of the technology. I have a strong
                desire to grow professionally and am eager to embrace new
                challenges and learning experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
