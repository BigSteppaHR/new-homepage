import CheckIcon from '@/assets/check.svg';
import {twMerge} from "tailwind-merge";

const pricingTiers = [
  {
    title: "Micro",
    monthlyPrice: 0,
    buttonText: "Select Micro",
    popular: false,
    inverse: false,
    features: [
      "Free Plan",
      "Access 158 Features",
      "Plan Credits",
      "Test The Waters",
      "Image & Text",
    ],
  },
  {
    title: "Basic",
    monthlyPrice: 9.99,
    buttonText: "Select Basic",
    popular: true,
    inverse: true,
    features: [
      "Access 171 Features",
      "Plan Credits",
      "GPT-3.5",
      "Access to Basic Templates",
      "Access to Basic AI Tools",
      "Advanced Support",
      "Image, Text & Video",
    ],
  },
  {
    title: "Advanced",
    monthlyPrice: 29.99,
    buttonText: "Select Advanced",
    popular: false,
    inverse: false,
    features: [
      "Access 175 Features",
      "Plan Credits",
      "3 Days of Free Trial",
      "GPT-4o",
      "Access to All Templates",
      "Access to All AI Tools",
      "Social Media",
      "WordPress Integration",
      "Chatbot Training",
      "Premium Support",
    ],
  },
];

export const Pricing = () => {
  return (
  <section className="py-20 bg-white">
    <div className="container">
      <div className='section-heading'>
      <h2 className="section-title">Pricing</h2>
      <p className="section-description mt-5">
        Flexible pricing options that allow you to choose the best fit for your requirements
        </p>
      </div>
        <div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center'>
          {pricingTiers.map(
            ({ 
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features
            }) => (
          <div className={twMerge(
            'card'
            ,
            inverse === true && 'border-black bg-black text-white'
          )}
        >
          <div className='flex justify-between'>
            <h3 className={twMerge('text-lg font-bold text-black/50', inverse === true && 'text-white/60')}>{title}</h3>
            {popular ==true && (
              <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
              <span className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium'>
                Popular
              </span>
          </div>
            )}  
          </div>
          <div className='flex items-baseline gap-1 mt-[30px]'>
            <span className='text-4xl font-bold tracking-tighter leading-none'>
              ${monthlyPrice}
            </span>
            <span className='tracking-tight font-bold text-black/50'>
              /month
            </span>
            </div>
            <button className={twMerge('btn btn-primary w-full mt-[30px]', inverse === true && 'bg-white text-black')}>
              {buttonText}
            </button>
            <ul className='flex flex-col gap-5 mt-8'>
              {features.map(feature => (
                <li className='text-sm flex items-center gap-4'>
                  <CheckIcon className="h-6 w-6"/>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
        </div>
          ))}

        </div>
      </div>
  </section>
  );
};
