import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dharshan</h1>
        <p className={styles.description}>
         I'm 4th-year Hindustan student specializing in computer vision-driven app development, Python/C# Unity & Godot game development, machine learning for data analysis, and crafting mini AI for apps and games.
        </p>
        <a href="https://www.linkedin.com/in/dharshan-r-e-student-cse-309537262/" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
