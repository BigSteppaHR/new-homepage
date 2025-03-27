import productImage from '@/assets/banner.png';
import Image from 'next/image';
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
  return(
  <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-20 overflow-hidden overflow-x-clip">
    <div className="container relative">
      <div className='section-heading mt-[-10px]'>
        <div className='flex justify-center'>
        <div className='tag'>The future of AI</div>
        </div>
        <h2 className="section-title mt-5">An Artificial Intelligence for all your needs.</h2>
        <p className='section-description mt-5'>
        We offer a wide range of content creation capabilities, from text to images, videos to audio files.
        </p>
      </div>
      <div className='relative'>
        <Image src={productImage} alt="Product Image" className="mt-10" />
        <Image 
          src={pyramidImage} 
          alt="Pyramid Image" 
          height={262} 
          width={262} 
          className='hidden md:block absolute -right-36 -top-32'
        /> 
        <Image 
          src={tubeImage} 
          alt="Tube image" 
          height={248} 
          className='hidden md:block absolute bottom-24 -left-36'
        />
      </div>
    </div>
  </section>
  );
};
