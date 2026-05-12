function App() { // this create the react component 
  return (   // show ui on the screen 
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-md">

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

        <h1 className="text-6xl font-bold text-blue-800 leading-tight max-w-4xl hover:scale-105 transition duration-500 animate-pulse">
          Find Your Dream Job With JobNest
        </h1>
        <p className="text-gray-600 text-xl mt-6 max-w-2xl ">
          Explore thousands of job opportunities from top companies and
          take the next step in your career journey.
        </p>

        {/* Search Bar */}
        <div className="flex items-center bg-white shadow-lg rounded-xl p-3 mt-10 w-full max-w-2xl">

          <input
            type="text"
            placeholder="Search jobs..."
            className="flex-1 outline-none px-4 text-lg"
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Search
          </button>

        </div>

      </section>

      {/*job categories section  */}

      {/* Job Categories Section */}
      <section className="px-10 py-20 bg-white">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Explore Job Categories
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Discover opportunities across different fields and technologies.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

            <div className="text-5xl mb-4">💻</div>

            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Frontend Developer
            </h3>

            <p className="text-gray-600">
              Build modern and interactive user interfaces for web applications.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

            <div className="text-5xl mb-4">⚙️</div>

            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Backend Developer
            </h3>

            <p className="text-gray-600">
              Work with servers, APIs, and databases powering applications.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

            <div className="text-5xl mb-4">🎨</div>

            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              UI/UX Designer
            </h3>

            <p className="text-gray-600">
              Design visually appealing and user-friendly digital experiences.
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

            <div className="text-5xl mb-4">📊</div>

            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Data Scientist
            </h3>

            <p className="text-gray-600">
              Analyze data and build intelligent machine learning systems.
            </p>

          </div>

          <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

            <div className="text-5xl mb-4">☁️</div>

            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              DevOps Engineer
            </h3>

            <p className="text-gray-600">
              Manage deployment pipelines, cloud infrastructure, and automation systems.
            </p>

          </div>

          <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

            <div className="text-5xl mb-4">📱</div>

            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Mobile App Developer
            </h3>

            <p className="text-gray-600">
              Create Android and iOS applications with modern mobile technologies.
            </p>

          </div>

          <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

            <div className="text-5xl mb-4">🤖</div>

            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              AI / ML Engineer
            </h3>

            <p className="text-gray-600">
              Build intelligent systems using artificial intelligence and machine learning.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default App;