import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {style} from './style'
const Summary: NextPage = () => {
  return (
    <section style={style.root}>
      <section style={style.intro}>
        <section style={style.mainInfo}>
          <span style={style.myNameIs}>Hi, my name is </span>
      <span style={{color: '#ccd6f6', fontWeight: 'bold'}}>Abdulhadi Jarad.</span>
      <span style={{display:'block', color: '#8892b0', lineHeight: '80px', fontWeight: 'bold'}}>I build things for the web.</span>
      </section>
      <p style={style.summary}>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>

      <button style={style.contactMe}>Contact Me !</button>
      </section>
    </section>
  )
}

export default Summary;
