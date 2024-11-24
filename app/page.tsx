"use client";
import Card from "./partials/Card";
import About from "./partials/About";
import Skills from "./partials/Skills";
import Projects from "./partials/Projects";
import data from "./assets/data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <div className="min-h-screen py-10 px-3 sm:px-5">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card name={data.name} title={data.title} social={data.social} />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About title={data.about.title} description={data.about.description} />
        <Skills skills={data.skills} />
        <Projects />
      </div>
    </div>
  );
}
