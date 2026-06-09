function WhyChooseUs() {
  return (
    <>
      {/* Why Choose Us code */}
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
    </>
  );
}

export default WhyChooseUs;