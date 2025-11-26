import { Mail, Github, Linkedin } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <div className="py-20">
      <h1 className="text-4xl md:text-6xl font-mono font-bold leading-snug">
        <span className="text-white">Arnel is a</span>{" "}
        <span className="text-green-400">web designer</span>{" "}
        <span className="text-white">and</span>{" "}
        <span className="text-green-400">front-end developer</span>
      </h1>

      <p className="mt-8 text-lg font-mono max-w-3xl text-gray-300">
        He crafts responsive websites where technologies meet creativity
      </p>

      <div className="mt-12 flex flex-wrap gap-8 items-center font-mono text-lg">
        <div className="flex items-center gap-3">
          <Mail />
          <a href="mailto:sadiarnel145@gmail.com" className="hover:text-green-400">
            sadiarnel145@gmail.com
          </a>
        </div>

        <a href="https://www.linkedin.com" target="_blank" className="flex items-center gap-3 hover:text-green-400">
          <Linkedin />
          Linkedin
        </a>

        <a href="https://github.com" target="_blank" className="flex items-center gap-3 hover:text-green-400">
          <Github />
          Github
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
