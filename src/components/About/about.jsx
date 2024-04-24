import React from "react";
import "./about.css";
import AboutImg from "../../assets/avatar-2.svg";
import { AboutBox } from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title"> About Me</h2>
      <div className="about__container grid">
        <img src={AboutImg} alt="" className="about__img" height="80px" width="80px" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am a Full Stack Developer with a passion for creating and
              developing web applications. I have experience in developing
              applications using React, Node.js, Express, and MongoDB. I am
              always eager to learn new technologies and improve my skills.
            </p>
            <a href="https://drive.google.com/file/d/1vXuIcyiFwAyji4KKAatS7u7o9Dpw01G7/view?usp=sharing" className="btn" target="_blank" rel="noreferrer">Download CV</a>
          </div>
        
        <div className="about__skills grid">

        <div className="skills__data">
            <div className="skills__title">
              <h3 className="skills__name">Development</h3>
              <span className="skills__number">90%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage skills Development"> </span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__title">
              <h3 className="skills__name">HTML & CSS</h3>
              <span className="skills__number">90%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage skills HTML"> </span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__title">
              <h3 className="skills__name">UI/UX design</h3>
              <span className="skills__number">80%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage skills UI"> </span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__title">
              <h3 className="skills__name">SQL, MongoDB</h3>
              <span className="skills__number">70%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage skills SQL"> </span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__title">
              <h3 className="skills__name">Node js, Express js, React js</h3>
              <span className="skills__number">65%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage skills Node"> </span>
            </div>
          </div>


        </div>
        </div>
      </div>

      <AboutBox/>
    </section>
  );
}

export default About;