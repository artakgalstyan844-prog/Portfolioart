"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "Landing Page Project",
        desc: "Modern responsive landing page built with Next.js and Tailwind CSS.",
        slug: "car-rental",
    },
    {
        title: "E-commerce UI",
        desc: "Clean product UI with reusable components and responsive design.",
        slug: "ecommerce-ui",
    },
    {
        title: "Admin Dashboard",
        desc: "Modern dashboard with clean layout and structured components.",
        slug: "admin-dashboard",
    },
];

const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Git",
    "API Integration",
];

export default function PortfolioLanding() {
    return (
        <div className="min-h-screen bg-[#0b0f19] text-white px-6 md:px-24">
            {/* HERO */}
            <section className="flex flex-col items-center text-center justify-center min-h-screen gap-6">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-bold"
                >
                    Hi, Im Artak
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-300"
                >
                    Frontend Developer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-400 max-w-xl"
                >
                    I build modern, responsive, and high-performance web applications using React & Next.js
                    with focus on clean UI and smooth user experience.
                </motion.p>

                <div className="flex gap-4">
                    <button
                        onClick={() => {
                            const element = document.getElementById("projects");
                            if (element) {
                                element.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }
                        }}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                    >
                        View Projects
                    </button>

                </div>
            </section>

            {/* ABOUT */}
            <section className="py-20">
                <h2 className="text-3xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-400 max-w-2xl">
                    Im Artak, a Frontend Developer specializing in React and Next.js. I focus on building
                    fast, scalable, and visually appealing web applications with clean code and modern UI.
                </p>
            </section>

            {/* SKILLS */}
            <section className="py-20">
                <h2 className="text-3xl font-semibold mb-6">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skills.map((skill) => (
                        <Card key={skill} className="bg-[#111827] border-gray-800">
                            <CardContent className="p-4 text-center text-gray-300">
                                {skill}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="py-20">
                <h2 className="text-3xl font-semibold mb-6"> Projects</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((p) => (
                        <Card key={p.title} className="bg-[#111827] border-gray-800 hover:scale-[1.02] transition">
                            <CardContent className="p-5">
                                <h3 className="text-lg font-semibold">{p.title}</h3>
                                <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
                                <button
                                    onClick={() => window.location.href = `/projects/${p.slug}`}
                                    className="bg-blue-600 px-4 py-2 rounded"
                                >
                                    View Project
                                </button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-20">
                <h2 className="text-3xl font-semibold mb-6">What I Do</h2>
                <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                    <div className="bg-[#111827] p-6 rounded-xl">UI Development</div>
                    <div className="bg-[#111827] p-6 rounded-xl">Landing Pages</div>
                    <div className="bg-[#111827] p-6 rounded-xl">React Applications</div>
                    <div className="bg-[#111827] p-6 rounded-xl">Figma to Code</div>
                </div>
            </section>

            {/* CONTACT */}

        </div>
    );
}
