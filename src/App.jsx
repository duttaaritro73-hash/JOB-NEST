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

    </div>
  );
}

export default App;