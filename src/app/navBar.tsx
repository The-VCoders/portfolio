import Image from 'next/image'

export default function NavBar() {
  return (
    /*py-4
        padding-top: 1rem; - 16px 
        padding-bottom: 1rem; - 16px 
      py-5
        padding-top: 1.25rem; - 20px 
        padding-bottom: 1.25rem; - 20px 
      px-5 - left and right
      p-5 - padding: 1.25rem; - 20px

      flex - grow and shrink
      flex wrap - how they wrap
      AppBar is 127 132 135

    */
  /* <header className="flex flex-wrap sm:justify-start w-full bg-[#7F8487] text-sm py-6 ">
  <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    <a className="font-semibold dark:text-black flex-none text-xl " href="#">Name</a>
    <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
      <a className="font-medium text-black" href="#" aria-current="page">Home</a>
      <a className="font-medium text-black" href="#" aria-current="page">Portfolio</a>
    </div>
  </nav>
</header>*/
<header>
<nav className="bg-white border-gray-200 dark:bg-[#7F8487]">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Name</a>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-[#7F8487] dark:border-gray-700">
        <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-black md:dark:hover:text-white-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-black md:dark:hover:text-white-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
  )
}