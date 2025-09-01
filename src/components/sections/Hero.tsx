
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

import Typewriter from "typewriter-effect";
import styled from "styled-components";



const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: #915EFF;
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;


const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className=" h-5 w-5 rounded-full bg-gradient-to-r from-pink-500 via-blue-500 to-teal-400 bg-[length:200%_200%] animate-gradient" />
          <div className="bg-gradient-to-r from-pink-500 via-blue-500 to-teal-400 bg-[length:200%_200%] animate-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className="text-7xl font-bold tracking-tight 
          bg-gradient-to-r from-pink-500 via-blue-500 to-teal-400 
          bg-clip-text text-transparent 
          bg-[length:200%_200%] animate-gradient">
            Hi, I'm <span className="">{config.hero.name}</span>
          </h1>

          <TextLoop>
                  <span className="text-white-100">
                    <Typewriter
                      options={{
                        strings: config.hero.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </TextLoop>

          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
