"use client"
import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/cog.png'
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png"
import { motion, useScroll } from "framer-motion";

export const Hero = () => {
  return (
  <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_at_bottom_left,#183EC2,#EAEEFE_71%)] overflow-x-clip">
    <div className="container">
      <div className="md:flex items-center">
      <div className="md:w-[478px]">
        <div className="tag">Unleash the Power of AI</div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Ultimate AI Generator Technology</h1>
        <p className="text-xl text-[#010D3E] tracking-tight mt-6">
          All-in-one platform to generate AI content and start making money in minutes.
        </p>
        <div className="flex gap-1 items-center mt-[30px]">
          <button className="btn btn-primary">Start a Trial</button>
          <button className="btn btn-text gap-1">
            <span>Discover AstreyonAI</span>
            <ArrowIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
        <motion.img 
          src={cogImage.src}
          alt="Cog Image" 
          className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0'
          animate={{
            translateY: [-30,30],
          }}
          transition={{
             repeat: Infinity,
             repeatType: 'mirror',
             duration: 3,
             ease: 'easeInOut'
          }}
          />
          <Image
          src={cylinderImage}
          width={220}
          height={220}
          alt="Cylender Image"
          className="hidden md:block -top-8 -left-32 md:absolute"
          /> 
          <Image 
          src={noodleImage} 
          width={220} 
          alt="Noodle Image"
          className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
          />
      </div>
      </div>
    </div>
  </section>
  );
};
