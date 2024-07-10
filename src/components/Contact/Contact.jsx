import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

//TODO: Añadir Botón contacto a whatsapp a linkedin a Gmail () 

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:m1guedev21@gmail.com">m1guedev21@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/miguel-angel-gallego-alvarez-71398625b/">linkedin.com/in/miguel-angel-gallego-alvarez</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/m1gue21">https://github.com/m1gue21</a>
        </li>
      </ul>
    </footer>
  );
};
