
function Dashboard() {
    return <div className="w-full h-screen py-14 dark:bg-sky-600 ">
        <div className="container mx-auto px-6 text-center">
            <h2 className=" dark:text-white text-4xl font-semibold text-gray-800 mb-6">
                Welcome to Our Website!
            </h2>
            <p className="dark:text-white text-lg text-gray-600 mb-8">
                Discover amazing things with our platform.
            </p>

            <a
                href="#"
                className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300"
            >
                Get Started
            </a>
        </div>
    </div>
}

export default Dashboard;