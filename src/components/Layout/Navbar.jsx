import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5 ">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">

        <a href="#" className="flex items-center">
          <img src={logo}
               className="mr-2 h-6 sm:h-9 rounded-full"
               alt="Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white capitalize ">
            ProductList
          </span>
        </a>

        <div className="flex items-center lg:order-2">

          <a href="#"
             className="text-white bg-primary-600 ring-4 font-medium rounded-lg text-sm px-4
             lg:px-5 py-2 lg:py-2.5 mr-6 outline-none ring-blue-800 hover:bg-primary-700 capitalize
            ">
            ADD
          </a>

          <a href="#"
             className="text-white bg-primary-600 ring-4 font-medium rounded-lg text-sm px-4
             lg:px-5 py-2 lg:py-2.5 mr-2 outline-none ring-red-700 hover:bg-primary-700 capitalize
             ">
            DELETE
          </a>

        </div>
      </div>
    </nav>
  )
}

export default Navbar