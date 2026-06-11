function Statistics() {
  const stats = [
    { number: "50K+", label: "Jobs Posted" },
    { number: "10K+", label: "Companies" },
    { number: "100K+", label: "Job Seekers" },
    { number: "25K+", label: "Successful Hires" },
  ];

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Our Impact
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
             className="bg-slate-800 rounded-xl p-6 text-center shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-4xl font-bold text-blue-500">
                {stat.number}
              </h3>

              <p className="text-gray-300 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;