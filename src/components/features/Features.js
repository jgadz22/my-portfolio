import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>
      <Title title='Features' desc='What I Do' />
      <div className='grid grid-cols-3 gap-20'>
        <Card 
          title=""
          des=""
          icon={<AiFillAppstore />}
        />
        <Card 
          title=""
          des=""
          icon={<FaMobile />}
        />
        <Card 
          title=""
          des=""
          icon={<FaGlobe />}
        />
        <Card 
          title=""
          des=""
          icon={<SiProgress />}
        />
        <Card 
          title=""
          des=""
          icon={<SiAntdesign />}
        />
        <Card 
          title=""
          des=""
          icon={<AiFillAppstore />}
        />
      </div>
    </section>
  )
}

export default Features