import React from "react";
import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Blue rounded-lg">
          <img src={about} alt="" className="p-30 h-80 w-80 object-cover" />
        </div>

        <div>
          <div className="text-center">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
              "A Journey of
              <span className="text-Blue">
                {" "}
                Integrity, <br />
                Inspiration{" "}
              </span>
              and <span className="text-Blue"> Insight.</span>"
            </div>
          </div>
          <div className="text-justify">
            <p className="text-lg text-gray leading-8 mb-4">
              Mr. Arun has dedicated decades to journalism, embodying integrity
              and commitment throughout his career. From his early days as a cub
              reporter to his seasoned role as a respected journalist, he
              fearlessly reported from the frontlines of significant events and
              delved into uncovering scandals, always guided by the principles of
              truth and integrity.
            </p>
            <p className="text-lg text-gray leading-8 mb-4">
              In retirement, Mr. Arun has transitioned to a role of mentorship,
              eager to pass on his wealth of experience to the next generation of
              journalists. Through online courses and personalized mentoring, he
              shares invaluable insights and lessons learned, empowering aspiring
              journalists to navigate the complexities of the field. His
              dedication to excellence and ethical journalism serves as a beacon
              of inspiration for the future of the profession.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
