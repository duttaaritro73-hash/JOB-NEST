function JobCategories() {
  return (
    <>


      {/* Category section code */}
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

    </>
  );
}

export default JobCategories;