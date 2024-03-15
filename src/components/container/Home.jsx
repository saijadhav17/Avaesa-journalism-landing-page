import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div className="md:w-[40%]">
          <h1 className="text-Blue text-3xl md:text-3xl font-bold mb-6">
            Welcome to Mr. Arun's Journalism Masterclass
          </h1><br/><br/>
          <div>
            <div className="font-bold text-xs text-Blue mb-4">
              Your e-learning partner
            </div>
            <div className="sm:text-[2.0rem] text-[1.825rem] font-bold">
              Unlock the Secrets <br /> of Journalism
            </div>
            <p className="text-sm leading-7 text-gray max-w-sm">
              with Mr. Arun's Exclusive Online Course!
            </p><br/>
            <div className="mt-6">
              {/* <Link to="/courses">
                <button className="px-6 py-3 font-bold text-white bg-Blue rounded-lg mr-4 text-sm">
                  Get Started
                </button>
              </Link> */}
            </div>
          </div>
        </div>
        <div className="md:w-[60%]">
  <img src={hero} alt="" className="p-3 md:p-0 max-w-[80px] h-auto md:max-w-full" />
</div>


      </div>
      <div>
        <p className="text-center text-xl">
        We offer unparalleled insights across diverse mediums, {" "}
          <span className="text-Blue">
          spanning newspapers, magazines, online platforms, and an array of journalism options.</span>"
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
