function Testimonials(){
    return(
        <>
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

        </>
    );
}

export default Testimonials