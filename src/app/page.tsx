'use client';

import Image from "next/image";
import { Mail } from "lucide-react";
import Projects from "@/components/Projects";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import projects from "../../data/projects.json";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4">
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden shadow-lg">
          <Image
            src="/img/karri.jpg"
            alt="Your profile photo"
            width={150}
            height={150}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <h1 className="text-4xl font-bold mt-4">Your Name</h1>
        <p className="text-lg text-gray-500 mt-2">
          Web Developer | ICT Engineer | JavaScript Enthusiast
        </p>
        {/* Social Links */}
        <div className="flex space-x-4 mt-4">
          <a
            href="https://github.com/karripar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-400 transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/karri-partanen-39768b165/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="h-100 max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-100 leading-relaxed whitespace-pre-line text-lg">
          <Typewriter
            words={[
              `I'm a passionate developer focused on building responsive, user-friendly web applications. I enjoy solving problems, exploring new technologies, and collaborating on meaningful projects.
              In my spare time, I particularly enjoy building computers and learning how everything works under the hood.

              Outside technical skills, I have extensive experience in customer service and working in international environments. I am passionate about football, nature, music and gaming. I believe that a well-rounded life leads to better creativity and problem-solving skills.
              Feel free to check out some of my latest projects below or connect with me on LinkedIn!`,
            ]}
            typeSpeed={15}
            delaySpeed={400}
          />
        </p>
      </section>

      {/* Projects Section */}
      <Projects projects={projects} />

      {/* Contact Section */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-100 mb-4">
            Want to work together or just say hi? Feel free to reach out!
          </p>
          <a
            href="mailto:Karri.Partanen@metropolia.fi"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            <Mail className="inline mr-2" />
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}
