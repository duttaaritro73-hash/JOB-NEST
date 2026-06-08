function FeaturedJobs() {
  return (
    <>
      {/* Category section code */}
              <section id="jobs" className="px-10 py-20">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-white mb-4">
              Featured Jobs
            </h2>

            <p className="text-gray-300 text-lg">
              Discover top opportunities from leading companies.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">


            {/* Job Card 1 */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-lg hover:scale-105 hover:-translate-y-2 transition duration-300">

              <div className="flex justify-between items-center mb-6">

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Frontend Developer
                  </h3>

                  <p className="text-gray-300">
                    Google • Remote
                  </p>
                </div>

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google"
                  className="w-14 h-14 object-contain bg-white p-2 rounded-full"
                />
              </div>


              <div className="flex gap-3 mb-6">

                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm">
                  Full Time
                </span>

                <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm">
                  ₹12 LPA
                </span>

              </div>


              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105">
                Apply Now
              </button>

            </div>



            {/* Job Card 2 */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-lg hover:scale-105 hover:-translate-y-2 transition duration-300">

              <div className="flex justify-between items-center mb-6">

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    AI Engineer
                  </h3>

                  <p className="text-gray-300">
                    OpenAI • Hybrid
                  </p>
                </div>

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
                  alt="OpenAI"
                  className="w-14 h-14 object-contain bg-white p-2 rounded-full"
                />

              </div>


              <div className="flex gap-3 mb-6">

                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm">
                  Full Time
                </span>

                <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm">
                  ₹18 LPA
                </span>

              </div>


              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105">
                Apply Now
              </button>

            </div>



            {/* Job Card 3 */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-lg hover:scale-105 hover:-translate-y-2 transition duration-300">

              <div className="flex justify-between items-center mb-6">

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Product Manager
                  </h3>

                  <p className="text-gray-300">
                    Netflix • Onsite
                  </p>
                </div>

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                  alt="Netflix"
                  className="w-14 h-14 object-contain bg-white p-2 rounded-full"
                />

              </div>


              <div className="flex gap-3 mb-6">

                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm">
                  Full Time
                </span>

                <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm">
                  ₹20 LPA
                </span>

              </div>


              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105">
                Apply Now
              </button>

            </div>

            {/* job card 4 */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-lg hover:scale-105 hover:-translate-y-2 transition duration-300">

              <div className="flex justify-between items-center mb-6">

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Business Technology Analyst (BTA)
                  </h3>

                  <p className="text-gray-300">
                    Delloite • Onsite
                  </p>
                </div>

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqWATGjE75euAB5IqV5M0uPPMDzG1QZkVNQ&s"
                  alt="Delloite"
                  className="w-14 h-14 object-contain bg-white p-2 rounded-full"
                />

              </div>


              <div className="flex gap-3 mb-6">

                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm">
                  Full Time
                </span>

                <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm">
                  ₹9 LPA
                </span>

              </div>


              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105">
                Apply Now
              </button>

            </div>

            {/* jobs card */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-lg hover:scale-105 hover:-translate-y-2 transition duration-300">

              <div className="flex justify-between items-center mb-6">

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Service Delivery Center (SDC)
                  </h3>

                  <p className="text-gray-300">
                    PwC • Onsite
                  </p>
                </div>

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKISiHDOaFkW7WM_LYmWtOyB_DhhkqCdWSbw&s"
                  alt="Pwc"
                  className="w-14 h-14 object-contain bg-white p-2 rounded-full"
                />

              </div>


              <div className="flex gap-3 mb-6">

                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm">
                  Full Time
                </span>

                <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm">
                  ₹11 LPA
                </span>

              </div>


              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105">
                Apply Now
              </button>

            </div>

            {/* job card 6 */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-lg hover:scale-105 hover:-translate-y-2 transition duration-300">

              <div className="flex justify-between items-center mb-6">

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    AWS Cloud Support Associate (Graduate)
                  </h3>

                  <p className="text-gray-300">
                    Amazon • Hybrid
                  </p>
                </div>

                <img
                  src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg"
                  alt="Amazon"
                  className="w-14 h-14 object-contain bg-white p-2 rounded-full"
                />

              </div>


              <div className="flex gap-3 mb-6">

                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm">
                  Full Time
                </span>

                <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm">
                  ₹13.5 LPA
                </span>

              </div>


              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105">
                Apply Now
              </button>

            </div>



          </div>

        </section>
    </>
  );
}

export default FeaturedJobs;