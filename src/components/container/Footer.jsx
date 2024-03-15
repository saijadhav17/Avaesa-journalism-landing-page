import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsPinterest } from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Blue p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        {/* Get Started */}
        <div>
          <div className="font-bold mb-6">Get Started</div>
          <p className="text-sm leading-7">
            Enroll now and unlock journalism mastery! Join Mr. Arun's course to embark on your storytelling journey today.
          </p>
        </div>

        {/* Services */}
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-sm hover:underline">Online Courses</a>
            <a href="#" className="text-sm hover:underline">Personalized Mentoring</a>
            <a href="#" className="text-sm hover:underline">Workshops and Webinars</a>
            <a href="#" className="text-sm hover:underline">Networking</a>
          </div>
        </div>

        {/* Resources */}
        <div>
          <div className="font-bold mb-6">Resources</div>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-sm hover:underline">Journalism Guides</a>
            <a href="#" className="text-sm hover:underline">Writing Tips</a>
            <a href="#" className="text-sm hover:underline">Career Advice</a>
            <a href="#" className="text-sm hover:underline">Tools & Software</a>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <div className="font-bold mb-6">Connect Us</div>
          <div className="text-sm mb-4">Insightfullearning@gmail.com</div>
          <div className="text-sm mb-4">arunlearning@gmail.com</div>
          <div className="text-sm">+959883271929</div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:scale-110 text-xl"><BsFacebook /></a>
            <a href="#" className="hover:scale-110 text-xl"><BsInstagram /></a>
            <a href="#" className="hover:scale-110 text-xl"><BsTwitter /></a>
            <a href="#" className="hover:scale-110 text-xl"><BsPinterest /></a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
