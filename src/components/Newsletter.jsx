function Newsletter() {
  return (
    <section className="py-20 mb-16 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-white mb-4">
          📩 Stay Updated
        </h2>

        <p className="text-gray-300 mb-10">
          Get the latest job opportunities, career tips, and industry news
          delivered straight to your inbox.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-4 rounded-xl bg-slate-800 text-white border border-slate-700 w-full md:w-96 focus:outline-none focus:border-blue-500"
          />

          <button
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300"
          >
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
}

export default Newsletter;