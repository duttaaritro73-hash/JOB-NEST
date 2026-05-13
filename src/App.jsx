function App() { // this create the react component 
  return (   // show ui on the screen 
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden relative">

      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="absolute bottom-0 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 bg-white/10 backdrop-blur-lg border border-white/20 shadow-md">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-600">
          JobNest
        </h1>

        {/* Nav Links */}
        <ul className="flex gap-8 text-lg font-medium">
          <li className="cursor-pointer hover:text-blue-600 hover:scale-110 transition duration-300 hover:-translate-y-2">Home</li>
          <li className="cursor-pointer hover:text-blue-600 hover:scale-110 transition duration-300 hover:-translate-y-2">Jobs</li>
          <li className="cursor-pointer hover:text-blue-600 hover:scale-110 transition duration-300 hover:-translate-y-2">Companies</li>
          <li className="cursor-pointer hover:text-blue-600 hover:scale-110 transition duration-300 hover:-translate-y-2">About</li>
        </ul>

        {/* Button */}
        <button className="bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition duration-300">
          Login
        </button>

      </nav>

      {/* Hero Section */ /* this is where the hero section of the website is done*/}

      <section className="flex flex-col items-center justify-center text-center mt-24 px-6">

        <h1 className="text-6xl font-bold text-white-800 leading-tight max-w-4xl hover:scale-105 transition duration-500 animate-pulse">
          Find Your Dream Job With JobNest
        </h1>
        <p className="text-white-600 text-xl mt-6 max-w-2xl ">
          Explore thousands of job opportunities from top companies and
          take the next step in your career journey.
        </p>

        {/* Search Bar */}
        <div className="flex items-center bg-white shadow-lg rounded-xl p-3 mt-10 w-full max-w-2xl">

          <input
            type="text"
            placeholder="Search jobs..."
            className="flex-1 outline-none px-4 text-lg outline-none text-black"
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Search
          </button>

        </div>

      </section>

      {/*job categories section  */}

      {/* Job Categories Section */}
      <section className="px-10 py-20 bg-white/10 backdrop-blur-lg border border-white/20">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-grey-800">
            Explore Job Categories
          </h2>

          <p className="text-grey-500 mt-4 text-lg">
            Discover opportunities across different fields and technologies.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

            <div className="text-5xl mb-4">💻</div>

            <h3 className="text-2xl font-bold text-white mb-3">
              Frontend Developer
            </h3>

            <p className="text-grey-300">
              Build modern and interactive user interfaces for web applications.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

            <div className="text-5xl mb-4">⚙️</div>

            <h3 className="text-2xl font-bold text-white mb-3">
              Backend Developer
            </h3>

            <p className="text-grey-300">
              Work with servers, APIs, and databases powering applications.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

            <div className="text-5xl mb-4">🎨</div>

            <h3 className="text-2xl font-bold text-white mb-3">
              UI/UX Designer
            </h3>

            <p className="text-grey-300">
              Design visually appealing and user-friendly digital experiences.
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

            <div className="text-5xl mb-4">📊</div>

            <h3 className="text-2xl font-bold text-white mb-3">
              Data Scientist
            </h3>

            <p className="text-grey-300">
              Analyze data and build intelligent machine learning systems.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

            <div className="text-5xl mb-4">☁️</div>

            <h3 className="text-2xl font-bold text-white mb-3">
              DevOps Engineer
            </h3>

            <p className="text-grey-300">
              Manage deployment pipelines, cloud infrastructure, and automation systems.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

            <div className="text-5xl mb-4">📱</div>

            <h3 className="text-2xl font-bold text-white mb-3">
              Mobile App Developer
            </h3>

            <p className="text-grey-300">
              Create Android and iOS applications with modern mobile technologies.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

            <div className="text-5xl mb-4">🤖</div>

            <h3 className="text-2xl font-bold text-white mb-3">
              AI / ML Engineer
            </h3>

            <p className="text-grey-300">
              Build intelligent systems using artificial intelligence and machine learning.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-300 cursor-pointer">

            <div className="text-5xl mb-4">🎯</div>

            <h3 className="text-2xl font-bold text-white mb-3">
              Product Manager
            </h3>

            <p className="text-gray-300">
              Lead product strategy, manage teams, and build successful digital products.
            </p>

          </div>

        </div>

        {/* Featured Jobs Section */}

        <section className="px-10 py-20">

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

      </section>

    </div>
  );
}

export default App;