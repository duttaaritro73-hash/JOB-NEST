import { FaGithub, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import JobCategories from "./components/JobCategories";
import JobHeadings from "./components/jobHeading";
import FeaturedJobs from "./components/featuredJobs";

function App() { // this create the react component 
  return (   // show ui on the screen 
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden relative">

      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="absolute bottom-0 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Navbar */}
      <Navbar />
      {/* Hero Section */ /* this is where the hero section of the website is done*/}

      <Hero />


      {/*job categories section  */}
      <section className="px-10 py-20 bg-white/10 backdrop-blur-lg border border-white/20">

      <JobHeadings/>
        {/* Heading */}

        <JobCategories />

        {/* Featured Jobs Section */}

        <FeaturedJobs/>

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