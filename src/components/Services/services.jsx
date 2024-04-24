import React from 'react'
import './services.css';
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/Mobilephone1.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "The best design for your website, mobile app, or desktop app. ",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Full-stack web development services. I build fast, interactive, great looking websites.",
  },
  {
    id: 3,
    image: Image3,
    title: "Mobile App Development",
    description:
      "I build mobile apps for both iOS and Android. Beautifully designed and super fast.",
  },
];



export const services = () => {
  return <section className='services container section' id='services'>
    <h2 className="section__title">Services </h2>

    <div className="services__container grid">
      {data.map(({id, image, title, description}) => {
        return(
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img" width="80px"  height="80px"/>

            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        );
      })}
    </div>
  </section>
  
}
export default services;