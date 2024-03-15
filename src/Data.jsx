import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";

import courses1 from "./assets/courses1.jpg";
import courses2 from "./assets/courses2.jpg";
import courses3 from "./assets/courses3.jpg";
import courses4 from "./assets/courses4.jpg";
import courses5 from "./assets/courses5.jpg";
import courses6 from "./assets/courses6.jpg";
import courses7 from "./assets/courses7.jpg";
import courses8 from "./assets/courses8.jpg";

import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 3,
    href: "courses",
    link: "Courses",
  },
  {
    id: 5,
    href: "contact",
    link: "Contact",
  },
];

export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "Practical Insights",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "Interactive Learning",
  },
  {
    id: 3,
    icon: <FaRegLightbulb />,
    category: "Expert Guidance",
  },
  {
    id: 4,
    icon: <AiOutlineTeam/>,
    category: "Networking",
  },
];

export const courses = [
  {
    id: 1,
    image: courses1,
    title: "Investigative Journalism Masterclass",
    rating: 4.4,
    participants: 500,
    price: 1000,
  },
  {
    id: 2,
    image: courses2,
    title: "Digital Storytelling Essentials",
    rating: 4.8,
    participants: 700,
    price: 1250,
  },
  {
    id: 3,
    image: courses3,
    title: "Media Ethics and Integrity Workshop",
    rating: 4.9,
    participants: 300,
    price: 899,
  },
  {
    id: 4,
    image: courses4,
    title: "Social Media Reporting Techniques",
    rating: 4.7,
    participants: 600,
    price: 999,
  },
  {
    id: 5,
    image: courses5,
    title: "Podcasting and Audio Storytelling Course",
    rating: 3.9,
    participants: 500,
    price: 1000,
  },
  {
    id: 6,
    image: courses6,
    title: "Data Journalism Fundamentals",
    rating: 4.9,
    participants: 500,
    price: 1050,
  },
  {
    id: 7,
    image: courses7,
    title: "Video Production for Journalists",
    rating: 4.5,
    participants: 500,
    price: 1200,
  },
  {
    id: 8,
    image: courses8,
    title: "Photojournalism Techniques and Practices",
    rating: 4.1,
    participants: 500,
    price: 1500,
  },
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const accordions = [
  {
    id: 1,
    title: "What is Insightful?",
  },
  {
    id: 2,
    title: "What can I learn from Insightful?",
  },
  {
    id: 3,
    title: "Can I teach on Insightful?",
  },
  {
    id: 4,
    title: "What is included in my Insightful membership?",
  },
];
