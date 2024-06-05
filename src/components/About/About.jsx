import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="About Image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>App Developer</h3>
              <p>
                I'm Passionate App Developer specializing in creating innovative applications using computer vision technology.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning and Artificial Engineer</h3>
              <p>
               Expert in machine learning and artificial intelligence, adept at data analysis and object detection using CNN, with a focus on practical applications like image recognition.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Game Developer</h3>
              <p>
              Enthusiastic Game Developer with expertise in creating immersive AR/VR game using Python Computer Vision, Unity C#, and Godot.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
