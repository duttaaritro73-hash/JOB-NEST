import { FaGithub, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import "./App.css";

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
          <li className="cursor-pointer hover:text-blue-600 hover:scale-110 transition duration-300 hover:-translate-y-2 "><a href="#home">
            <li>Home</li>
          </a></li>
          <li className="cursor-pointer hover:text-blue-400 hover:scale-110 transition duration-300">

            Jobs

          </li>
          <li className="cursor-pointer hover:text-blue-600 hover:scale-110 transition duration-300 hover:-translate-y-2"><a href="#companies">
            <li>Companies</li>
          </a></li>
          <li className="cursor-pointer hover:text-blue-600 hover:scale-110 transition duration-300 hover:-translate-y-2"><a href="#contact">
            <li>Contact</li>
          </a></li>
        </ul>

        {/* Button */}
        <button className="bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition duration-300">
          Login
        </button>

      </nav>

      {/* Hero Section */ /* this is where the hero section of the website is done*/}


      <section id="home" className="flex flex-col items-center justify-center text-center mt-24 px-6 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

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

        {/* Top Companies Section */}

        <section className="px-10 py-20">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-white mb-4">
              Top Companies Hiring
            </h2>

            <p className="text-gray-300 text-lg">
              Explore opportunities from world-class companies.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


            {/* Google */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl text-center hover:scale-105 hover:-translate-y-2 transition duration-300">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                className="w-24 h-24 object-contain mx-auto mb-6"
              />

              <h3 className="text-2xl font-bold text-white mb-2">
                Google
              </h3>

              <p className="text-gray-300">
                120+ Open Positions
              </p>

            </div>



            {/* Microsoft */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl text-center hover:scale-105 hover:-translate-y-2 transition duration-300">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                alt="Microsoft"
                className="w-24 h-24 object-contain mx-auto mb-6"
              />

              <h3 className="text-2xl font-bold text-white mb-2">
                Microsoft
              </h3>

              <p className="text-gray-300">
                95+ Open Positions
              </p>

            </div>



            {/* Netflix */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl text-center hover:scale-105 hover:-translate-y-2 transition duration-300">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix"
                className="w-24 h-24 object-contain mx-auto mb-6"
              />

              <h3 className="text-2xl font-bold text-white mb-2">
                Netflix
              </h3>

              <p className="text-gray-300">
                40+ Open Positions
              </p>

            </div>



            {/* Amazon */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl text-center hover:scale-105 hover:-translate-y-2 transition duration-300">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Amazon"
                className="w-24 h-24 object-contain mx-auto mb-6"
              />

              <h3 className="text-2xl font-bold text-white mb-2">
                Amazon
              </h3>

              <p className="text-gray-300">
                150+ Open Positions
              </p>

            </div>


          </div>

        </section>


        {/* Why Choose Us Section */}

        <section className="px-10 py-20">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-white mb-4">
              Why Choose JobNest?
            </h2>

            <p className="text-gray-300 text-lg">
              We help job seekers connect with top companies faster and smarter.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


            {/* Feature 1 */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl text-center hover:scale-105 hover:-translate-y-2 transition duration-300">

              <div className="text-6xl mb-6">
                ⚡
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Fast Hiring
              </h3>

              <p className="text-gray-300">
                Apply to jobs quickly with a smooth and simple process.
              </p>

            </div>



            {/* Feature 2 */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl text-center hover:scale-105 hover:-translate-y-2 transition duration-300">

              <div className="text-6xl mb-6">
                🌍
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Remote Opportunities
              </h3>

              <p className="text-gray-300">
                Explore remote jobs from companies around the world.
              </p>

            </div>



            {/* Feature 3 */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl text-center hover:scale-105 hover:-translate-y-2 transition duration-300">

              <div className="text-6xl mb-6">
                🔒
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Secure Platform
              </h3>

              <p className="text-gray-300">
                Your applications and personal information stay protected.
              </p>

            </div>



            {/* Feature 4 */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl text-center hover:scale-105 hover:-translate-y-2 transition duration-300">

              <div className="text-6xl mb-6">
                🚀
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Career Growth
              </h3>

              <p className="text-grey-300">
                Discover opportunities that help you level up your career.
              </p>

            </div>


          </div>

        </section>

        {/* Testimonials Section */}

        <section className="px-10 py-20">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-white mb-4">
              What Our Users Say
            </h2>

            <p className="text-gray-300 text-lg">
              Thousands of professionals trust JobNest for their career journey.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">


            {/* Testimonial 1 */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:scale-105 hover:-translate-y-2 transition duration-300">

              <div className="text-5xl mb-6">
                👨‍💻
              </div>

              <p className="text-gray-300 mb-6 leading-7">
                "JobNest helped me land my first frontend internship within two weeks."
              </p>

              <h3 className="text-2xl font-bold text-white">
                Pratik das
              </h3>

              <p className="text-gray-400">
                Frontend Developer
              </p>

            </div>



            {/* Testimonial 2 */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:scale-105 hover:-translate-y-2 transition duration-300">

              <div className="text-5xl mb-6">
                👨‍💻
              </div>

              <p className="text-gray-300 mb-6 leading-7">
                "The platform feels smooth and modern. I found remote opportunities easily."
              </p>

              <h3 className="text-2xl font-bold text-white">
                Subharthi Samantha
              </h3>

              <p className="text-gray-400">
                Product Manager
              </p>

            </div>



            {/* Testimonial 3 */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:scale-105 hover:-translate-y-2 transition duration-300">

              <div className="text-5xl mb-6">
                🧠
              </div>

              <p className="text-gray-300 mb-6 leading-7">
                "JobNest made job searching much simpler and more organized for me."
              </p>

              <h3 className="text-2xl font-bold text-white">
                Arnab Senapati
              </h3>

              <p className="text-gray-400">
                AI Engineer
              </p>

            </div>

            {/* Testimonial 4  */}

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:scale-105 hover:-translate-y-2 transition duration-300">

              <div className="text-5xl mb-6">
                ☁️
              </div>

              <p className="text-gray-300 mb-6 leading-7">
                "It makes job searching very easy for me to do ....."
              </p>

              <h3 className="text-2xl font-bold text-white">
                Dhiraj Singh
              </h3>

              <p className="text-gray-400">
                DevOPS
              </p>

            </div>


          </div>

        </section>

        {/* Footer Section */}

        {/* Call To Action Section */}

        <section className="px-10 py-24">

          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center shadow-2xl">

            <h2 className="text-5xl font-bold text-white mb-6">
              Ready To Find Your Dream Job?
            </h2>

            <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of professionals using JobNest to discover top career opportunities.
            </p>


            <div className="flex flex-col md:flex-row justify-center gap-6">

              <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300">
                Get Started
              </button>

              <button className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition duration-300">
                Explore Jobs
              </button>

            </div>

          </div>

        </section>


        <footer className="px-10 py-16 border-t border-white/10 bg-black/20 backdrop-blur-lg">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">


            {/* Brand Section */}

            <div>

              <h2 className="text-3xl font-bold text-white mb-4">
                JobNest
              </h2>

              <p className="text-gray-300 leading-7">
                Connecting talented people with top companies around the world.
              </p>

            </div>



            {/* Quick Links */}

            <div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                Quick Links
              </h3>

              <ul className="space-y-3 text-gray-300">

                <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
                  Home
                </li>

                <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
                  Jobs
                </li>

                <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
                  Companies
                </li>

                <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
                  Contact
                </li>

              </ul>

            </div>



            {/* Resources */}

            <div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                Resources
              </h3>

              <ul className="space-y-3 text-gray-300">

                <li className="hover:text-purple-400 transition duration-300 cursor-pointer">
                  Career Tips
                </li>

                <li className="hover:text-purple-400 transition duration-300 cursor-pointer">
                  Resume Guide
                </li>

                <li className="hover:text-purple-400 transition duration-300 cursor-pointer">
                  Interview Prep
                </li>

                <li className="hover:text-purple-400 transition duration-300 cursor-pointer">
                  Blog
                </li>

              </ul>

            </div>



            {/* Social Links */}

            <div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                Follow Us
              </h3>

              <div className="flex gap-5 text-3xl text-white">

                <FaGithub className="hover:text-gray-400 hover:scale-125 transition duration-300 cursor-pointer" />

                <FaInstagram className="hover:text-pink-400 hover:scale-125 transition duration-300 cursor-pointer" />

                <FaTwitter className="hover:text-sky-400 hover:scale-125 transition duration-300 cursor-pointer" />

                <FaFacebook className="hover:text-blue-500 hover:scale-125 transition duration-300 cursor-pointer" />

              </div>

              <div className="mt-6 text-gray-300 space-y-3">

                <p>
                  📧 duttaaritro73@gmail.com
                </p>

                <p>
                  📞 +91 6294583877
                </p>

              </div>

            </div>


          </div>


          {/* Bottom Footer */}

          <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400">

            © 2026 JobNest. All rights reserved.

          </div>

        </footer>

      </section>

    </div>
  );
}

export default App;