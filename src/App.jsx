
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroTemp";
import JobCategories from "./components/JobCategoriesTemp";
import JobHeadings from "./components/JobHeadingTemp";
import FeaturedJobs from "./components/FeaturedJobsTemp";
import TopCompanies from "./components/TopCompanies";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

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

        <JobHeadings />
        {/* Heading */}

        <JobCategories />

        {/* Featured Jobs Section */}

        <FeaturedJobs />

        {/* Top Companies Section */}

        <TopCompanies />


        {/* Why Choose Us Section */}

        <WhyChooseUs />

        {/* Testimonials Section */}

        <Testimonials />
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


        <Footer />

      </section>

    </div>
  );
}

export default App;