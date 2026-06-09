

function TopCompanies() {
    return (
        <>
            {/* Top Companies code */}
            <section className="px-10 py-20">

                <div className="text-center mb-16">

                    <h2 className="text-5xl font-bold text-white mb-4">
                        Top Companies Hiring
                    </h2>

                    <p className="text-gray-300 text-lg">
                        Explore opportunities from world-class companies.
                    </p>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


                    {/* Google */}

                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl text-center hover:scale-105 hover:-translate-y-2 transition duration-300">

                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                            alt="Google"
                            className="w-24 h-24 object-contain mx-auto mb-6"
                        />

                        <h3 className="text-2xl font-bold text-white mb-2">
                            Google
                        </h3>

                        <p className="text-gray-300">
                            120+ Open Positions
                        </p>

                    </div>



                    {/* Microsoft */}

                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl text-center hover:scale-105 hover:-translate-y-2 transition duration-300">

                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                            alt="Microsoft"
                            className="w-24 h-24 object-contain mx-auto mb-6"
                        />

                        <h3 className="text-2xl font-bold text-white mb-2">
                            Microsoft
                        </h3>

                        <p className="text-gray-300">
                            95+ Open Positions
                        </p>

                    </div>



                    {/* Netflix */}

                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl text-center hover:scale-105 hover:-translate-y-2 transition duration-300">

                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                            alt="Netflix"
                            className="w-24 h-24 object-contain mx-auto mb-6"
                        />

                        <h3 className="text-2xl font-bold text-white mb-2">
                            Netflix
                        </h3>

                        <p className="text-gray-300">
                            40+ Open Positions
                        </p>

                    </div>



                    {/* Amazon */}

                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl text-center hover:scale-105 hover:-translate-y-2 transition duration-300">

                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                            alt="Amazon"
                            className="w-24 h-24 object-contain mx-auto mb-6"
                        />

                        <h3 className="text-2xl font-bold text-white mb-2">
                            Amazon
                        </h3>

                        <p className="text-gray-300">
                            150+ Open Positions
                        </p>

                    </div>


                </div>

            </section>

        </>
    );
}

export default TopCompanies;