import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./home.css";
import Me from "../../assets/avatar1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import { Shapes } from "./Shapes";

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const templateParams = {
    to_name: 'Tafadzwa',
    from_name: name,
    email: email,
    message: `${name} with ${email} wants to hire you, from your portfolio.`,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
  .send('service_e2ppn4v', 'template_egqgpgd', templateParams, {
    publicKey: '5QR-1AajzdPlLVmaD',
  })
  .then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      setMessageSent(true);
      setShowForm(false);
    },
    (err) => {
      console.log('FAILED...', err);
    },
  );
  }

  return (
   <section className="home container" id="home">
    <div className="intro">
      <img src={Me} alt="" className="home__img" width="60" height="60"/>
      <h1 className="home__name">Tafadzwa Craig Kativu</h1>
      <span className="home__education">I'm a Full Stack developer</span>

      <HeaderSocials/>

      <div> 
        {showForm ? (
         // Home.jsx
<form id="hireMeForm" onSubmit={sendEmail}>
  <input id="hireMeFormName" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
  <input id="hireMeFormEmail" type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
  <button id="hireMeFormButton" type="submit" className="btn">Hire Me</button>
</form>
        ) : messageSent ? (
          <p>Message sent</p>
        ) : (
          <button onClick={() => setShowForm(true)} className="btn">Hire Me</button>
        )}
      </div>

      <ScrollDown/>
    </div>

    <Shapes/>
   </section>
  );
}

export default Home;