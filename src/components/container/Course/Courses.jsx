import React from "react";
import { categories } from "../../../Data";
import { courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course";
import { motion } from "framer-motion";

const Courses = () => {
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
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="section" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Why Choose <span className="text-Blue">Mr. Arun's Course?</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          Are you passionate about journalism? Do you dream of uncovering
          stories, unraveling mysteries, and bringing truth to light? Then look
          no further! Renowned journalist, Mr. Arun, invites you to embark on a
          transformative journey through his 2-week online course tailored for
          aspiring journalists like you.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>

      <div className="text-xl font-bold mt-32 mb-6">Course Highlights</div>
      <div className="max-w-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4">
              <div className="font-bold mb-2">
                Week 1: The Art of Storytelling
              </div>
              <p className="text-gray-600 mt-5">
                Dive deep into the fundamentals of journalistic storytelling,
                mastering the art of crafting compelling narratives that
                captivate audiences.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4">
              <div className="font-bold mb-2">Week 2: Ethics and Integrity</div>
              <p className="text-gray-600 text-justify mt-5">
                Explore the ethical dilemmas faced by journalists and learn how
                to navigate them with integrity and professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-xl font-bold mt-32">Most Popular Courses</div>
      <div className="mt-12 overflow-x-hidden w-full  relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {courses.map((course) => {
            return <Course key={course.id} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
