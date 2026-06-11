function PopularSkills() {
    const skills = [
        "Data Structures",
        "Algorithms",
        "System Design",
        "OOPs",
        "DBMS",
        "Operating Systems",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",

        "Java",
        "Python",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "AWS",
        "Firebase",
        "Vercel",
        "Netlify",
        "Docker",
        "Machine Learning",
        "System Design",
        "Git & GitHub",
    ];

    return (
       <section className="relative py-20 mt-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
            <div className="absolute top-10 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Popular Skills
                </h2>

                <p className="text-gray-300 mb-10">
                    Discover the most in-demand skills employers are looking for.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-slate-700 text-white px-5 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 cursor-pointer"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PopularSkills;