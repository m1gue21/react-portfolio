import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Miguel</h1>
        <p className={styles.description}>
          I'm a junior developer with 2 years of 
          experience working with Angular, and currently deepening my 
          skills in React!!
        </p>
      <div  className={styles.heroContactButtons}>
        <a href="mailto:m1guedev21@gmail.com" target="_blank" className={styles.contactBtn}>
          Email Me
        </a>
        <a
          href={`https://wa.me/573004940576?text=${encodeURIComponent("Hi! I come from your web portfolio.")}`}
          target="_blank"
          className={styles.wppButton}>
          <img
            src={getImageUrl("hero/whatsapp.png")}
            alt="Send Me a whatsapp message"
            className={styles.wppIcon}/>
        </a>
      </div>
      </div>
      <img
        src={getImageUrl("hero/pfp.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
