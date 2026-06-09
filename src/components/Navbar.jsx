function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white/10 backdrop-blur-lg border border-white/20 shadow-md">

      {/* Logo */}
      <h1 className="text-3xl font-bold text-blue-600">
        JobNest
      </h1>

      {/* Nav Links */}
      <ul className="flex gap-8 text-lg font-medium">
        <li className="cursor-pointer hover:text-blue-400 hover:scale-110 transition duration-300  "><a href="#home">
          Home
        </a></li>
        <li className="cursor-pointer hover:text-blue-400 hover:scale-110 transition duration-300"><a href="#jobs">
          Jobs
        </a>
        </li>
        <li className="cursor-pointer hover:text-blue-400 hover:scale-110 transition duration-300 ">
          Companies
        </li>
        <li className="cursor-pointer hover:text-blue-400 hover:scale-110 transition duration-300 "><a href="#contacts">
          Contact
        </a></li>
      </ul>

      {/* Button */}
      <button className="bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition duration-300">
        Login
      </button>

    </nav>

  );
}

export default Navbar;