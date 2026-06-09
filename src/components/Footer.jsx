import { FaGithub, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";d 

function Footer() {
  return (
    <>
      {/* Footer code */}
              <footer id="contacts" className="px-10 py-16 border-t border-white/10 bg-black/20 backdrop-blur-lg">

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

                <li className="hover:text-blue-400 transition duration-300 cursor-pointer"> <a href="#home">
                  Home
                </a></li>

                <li className="hover:text-blue-400 transition duration-300 cursor-pointer"><a href="#jobs">
                  Jobs
                </a>

                </li>

                <li className="hover:text-blue-400 transition duration-300 cursor-pointer"><a href="">

                </a>
                  Companies
                </li>

                <li className="hover:text-blue-400 transition duration-300 cursor-pointer"><a href="#contacts">
                  Contact
                </a>

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
    </>
  );
}

export default Footer;