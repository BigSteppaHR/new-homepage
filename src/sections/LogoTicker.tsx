import OpenAI from '@/assets/OpenAI.png';
import MetaAI from '@/assets/Meta.png';
import ClaudeAI from '@/assets/Claude.png';
import PerplexityAI from '@/assets/Perplexity.png';
import ChohereAI from '@/assets/Cohere.png';
import GeminiAI from '@/assets/Gemini.png';
import Image from 'next/image';

export const LogoTicker = () => {
  return <div className="py-8 md:scroll-py-12 bg-white">
    <div className="container">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
      <div className="flex gap-14 flex-none">
        <Image src={OpenAI} alt="Acme Logo" className="logo-ticker-image" />
        <Image src={MetaAI} alt="Quantum Logo" className="logo-ticker-image"/>
        <Image src={ClaudeAI} alt="Echo Logo" className="logo-ticker-image"/>
        <Image src={PerplexityAI} alt="Celestial Logo" className="logo-ticker-image"/>
        <Image src={ChohereAI} alt="Pulse Logo" className="logo-ticker-image"/>
        <Image src={GeminiAI} alt="Apex Logo" className="logo-ticker-image"/>      
      </div>
      </div>
    </div>
  </div>;
};
