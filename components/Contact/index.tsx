import type { NextPage } from 'next';
import { style } from './styles';
const Contact: NextPage = () => {
  return (
    <section id='contact' style={style.root}>
      <span className='headingNumber'>06. What is Next ?</span>
      <span style={style.myNameIs}>Get In Touch</span>
      <div style={style.wrapper}>
        <p style={style.text}>
          My inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!
        </p>
        <a rel="noreferrer" href="mailto:abdulhadi.jarad@gmail.com">
          <button className='button-hover medium' style={style.contactMe}>Say Hello !</button>
        </a>
      </div>
    </section>
  )
}

export default Contact;
