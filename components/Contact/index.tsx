import type { NextPage } from 'next';
import { style } from './styles';
const Contact = () => {
  return (
    <section id='contact' style={style.root}>
      <span className='headingNumber'>06. What is Next ?</span>
      <span style={style.myNameIs}>Ready to start you project ?</span>
      <div style={style.wrapper}>
        <p style={style.text}>
          Let&apos;s Rock & Roll  !
          <br/>
          My inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!
        </p>
        <a rel="noreferrer" href="mailto:abdulhadi.jarad@gmail.com">
          <button className='button-hover medium' style={style.contactMe}>Hire Me !</button>
        </a>
      </div>
    </section>
  )
}

export default Contact;
