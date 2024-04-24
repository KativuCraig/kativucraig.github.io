import React, {useState}from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';


 const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const[subject, setSubject] = useState('');
  const[message, setMessage] = useState('');
  
  const templateParams = {
    to_name: 'Tafadzwa',
    from_name: name,
    subject: subject,
    from_email: email,
    message: message,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
  .send('service_e2ppn4v', 'template_bvcl91j', templateParams, {
    publicKey: '5QR-1AajzdPlLVmaD',
  })
  .then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      setName('');
        setEmail('');
        setSubject('');
        setMessage('');
     
    },
    (err) => {
      console.log('FAILED...', err);
    },
  );
  }





  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Talk to me about anything</h3>
          <p className="contact__details">Don't like forms? <a href='mailto:tafadzwacraig95@gmail.com' className='email'>Send me an email 👋</a></p>
        </div>

        <form action="" className="contact__form" onSubmit={sendEmail}>
          <div className="contact__form-group">

            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Insert your name'value={name} onChange={(e) => setName(e.target.value)} required/>
            </div>


            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Insert your email'value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
          </div>

          <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Insert your subject'value={subject} onChange={(e) => setSubject(e.target.value)} required/>
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea name="" id="" cols="30" rows="10" className="contact__form-input" placeholder='Insert your message'value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>

            <button className='btn' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
export default Contact;