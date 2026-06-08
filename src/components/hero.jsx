function Hero() {
  return (
    <>
      {/* Hero code here */}
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
    </>
  );
}

export default Hero;