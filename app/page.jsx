"use client";
import { useState } from 'react';
import Section from '@/components/Section';
import Photo from '@/components/Photo';
import Social from '@/components/Social';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Contact from '@/components/Contact';
import Work from '@/components/Work';
import Resume from '@/components/Resume';
import Services from '@/components/Services';
import Link from 'next/link';



const Home = () => {
  const [activeSection, setActiveSection] = useState('home');


  const handleNavigate = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(section);
  };

  return (
    <div className="h-full">
      <Section id="home">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Software Developer</span>
              <h1 className="h1 mb-6">
                Hi! I am <br /> <span className="text-accent">Muhammad Raheel</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 hover:bg-accent hover:text-primary hover:transition-all duration-500"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </Section>
      <Section>
        <Services />
      </Section>
      <Section id="resume">
        <Resume />
      </Section>
      <Section id="work">
        <Work />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </div >
  );
};

export default Home;
