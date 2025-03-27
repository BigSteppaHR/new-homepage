import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas2.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";



export const Header = () => {
  return (
  <header className="sticky top-0 backdrop-blur-sm z-20">
    <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
      <p className="text-white/60 hidden md:block">
        Meet the Future of Artificial Intelligence
      </p>
      <div className="inline-flex gap-1 items-center">
        <p>Start a Trial</p>
        <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
      </div>
    </div>
    <div className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="Saas Logo" width={40} height={40} />
          <MenuIcon className="h-5 w-5 md:hidden" />
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">FAQs</a>
            <a href="#">Blogs</a>
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight"> Get Started</button>

          </nav>
        </div>
      </div>
    </div>
  </header>
  );
};