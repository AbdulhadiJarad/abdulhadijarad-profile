import type { NextPage } from 'next';
import { style } from './styles';
const Contact: NextPage = () => {
  return (
    <section id='contact' style={style.root}>
      <span className='headingNumber'>06. What's Next ?</span>
      <span style={style.myNameIs}>Get In Touch</span>
      <div style={style.wrapper}>
        <p style={style.text}>
          Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>
        <button className='button-hover medium' style={style.contactMe}>Say Hello !</button>
      </div>
    </section>
  )
}

export default Contact;
