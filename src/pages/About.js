import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import welcome from "../image/welcome.png";
import HomeL1 from "../image/HomeL1.png";

const values = [
  ["People first", "We create an inclusive workplace where hospitality professionals can learn, contribute and grow."],
  ["Operational excellence", "Our teams combine strong hotel operations with consistent service and genuine guest care."],
  ["Growth with purpose", "Training, mentorship and internal opportunities help employees build meaningful long-term careers."],
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-content">
            <span className="eyebrow">ABOUT NILE HOSPITALITY</span>
            <h1>Building remarkable hotels by empowering remarkable people</h1>
            <p>We are a hotel management and development company creating rewarding guest experiences and hospitality careers across India.</p>
            <Link to="/findjobs" className="primary-cta">Explore open positions</Link>
          </div>
        </section>
        <section className="about-story section-shell">
          <img src={welcome} alt="NILE Hospitality team" />
          <div><span className="eyebrow">OUR STORY</span><h2>Hospitality powered by people</h2><p>Since 2018, NILE Hospitality has partnered with respected international and owner-led hotel brands. Our approach brings together hotel operations, development and rebranding expertise.</p><p>Behind every property is a diverse team committed to thoughtful service, continuous learning and shared success.</p></div>
        </section>
        <section className="about-values"><div className="section-shell"><span className="eyebrow">WHY NILE</span><h2>A place to do your best work</h2><div className="value-grid">
          {values.map(([title, copy], index) => <article className="value-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div></div></section>
        <section className="about-join section-shell"><div><span className="eyebrow">JOIN OUR JOURNEY</span><h2>Your next opportunity could start here.</h2><Link to="/findjobs" className="primary-cta">Find jobs</Link></div><img src={HomeL1} alt="Hospitality professional" /></section>
      </main>
      <Footer />
    </>
  );
}
