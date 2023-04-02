
import React from 'react'
import Image from 'next/image'  
  
const HomePage = () => {
  return (
    <div>
     
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center">
        <Image src="/aiCuvisoft.png" width={56}
        height={30} alt="cuvisoft Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cuvisoft</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">News</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Learn</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Glossary</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Submit</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<header>

  <div
    class="bg-neutral-50 py-5 px-6 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-100">
       <div className="writer">
    <div className="writer-text">
    "Cuvisoft Tools Collects & Organizes All The Best <br/>
    AI Tools So YOU Too Can Become Superhuman!"
    </div>
</div>
    <h1 className="mb-3 text-3xl font-bold "></h1>
   
    <h6 className="mb-3 text-1xl ">CuvisoftTools is an innovative platform that offers a comprehensive collection of the best AI tools available</h6>
                <input className="w-full h-16 text-neutral-800 rounded mb-0 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg" type="search" placeholder="Search - Try things like 'YouTube' or 'SEO' to find specific tools for your needs..." />
      </div>
      
    </header>
    <section className="bg-indigo-dark h-50 p-8">
              <div className="container mx-auto py-1">
                <div className="ml-24 grid grid-cols-6 gap-2">
  <div><input type="checkbox"  /> AI Detection</div>
  <div><input type="checkbox"  /> Aggregators</div>
  <div><input type="checkbox"  /> Avatar</div>
  <div><input type="checkbox"  /> Chat</div>
  <div><input type="checkbox"  /> Copywriting</div>
  <div><input type="checkbox"  /> Finance</div>
  <div><input type="checkbox"  /> For Fun</div>
  <div><input type="checkbox"  /> Gaming</div>
  <div><input type="checkbox"  /> Generative Art</div>
  <div><input type="checkbox"  /> Generative Code</div>
  <div><input type="checkbox"  /> Generative Video</div>
  <div><input type="checkbox"  /> Image Improvement</div>
  <div><input type="checkbox"  /> Image Scanning</div>
  <div><input type="checkbox"  /> Inspiration</div>
  <div><input type="checkbox"  /> Marketing</div>
  <div><input type="checkbox"  /> Motion Capture</div>
  <div><input type="checkbox"  /> Music</div>
  <div><input type="checkbox"  /> Podcasting</div>
  <div><input type="checkbox"  /> Productivity</div>
  <div><input type="checkbox"  /> Prompt Guides</div>
  <div><input type="checkbox"  /> Research</div>
  <div><input type="checkbox"  /> Self-Improvement</div>
  <div><input type="checkbox"  /> Social Media</div>
  <div><input type="checkbox"  /> Speech-To-Text</div>
  <div><input type="checkbox"  /> Text-To-Speech</div>
  <div><input type="checkbox"  /> Text-To-Video</div>
  <div><input type="checkbox"  /> Translation</div>
  <div><input type="checkbox"  /> Video Editing</div>
  <div><input type="checkbox"  /> Voice Modulation</div>
  <div><input type="checkbox"  /> Free</div>
  <div><input type="checkbox"  /> Freemium</div>
  <div><input type="checkbox"  /> GitHub</div>
  <div><input type="checkbox"  /> Google Colab</div>
  <div><input type="checkbox"  /> Open Source</div>
  <div><input type="checkbox"  /> Paid</div>
  <div><input type="checkbox"  /> Trial</div>
 

  
</div>
</div>
      </section>

{/* <div class='max-w-md mx-auto'>
    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search something.." /> 
    </div> */}

{/* </div> */}

                {/* <nav className="flex">
                  
                <label>
                
                <input type="checkbox"  /> Browser 
                <input type="checkbox"  /> Browser 
                <input type="checkbox"  /> Browser 
                </label> */}
                {/* <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
                  <a className="no-underline text-black py-3 px-4 font-medium mr-3 bg-Blue hover:bg-Blue-darker" href="#">Cardamom</a>
                  <a className="no-underline text-black py-3 px-4 font-medium mx-3 bg-indigo-darker hover:bg-indigo" href="#">Cinnamon</a>
                  <a className="no-underline text-black py-3 px-4 font-medium mx-3 bg-indigo hover:bg-indigo-darker" href="#">Chamomille</a>
                  <a className="no-underline text-black py-3 px-4 font-medium mx-3 bg-indigo-darker hover:bg-indigo" href="#">Apple</a>
                  <a className="no-underline text-black py-3 px-4 font-medium mx-3 bg-indigo hover:bg-indigo-darker" href="#">Mint</a>
                  <a className="no-underline text-black py-3 px-4 font-medium mx-3 bg-indigo-darker hover:bg-indigo"  href="#">Curry</a>
                  <a className="no-underline text-black py-3 px-4 font-medium mx-3 bg-indigo hover:bg-indigo-darker" href="#">Fragrance</a> */}
                  {/* <a className="no-underline text-black py-3 px-4 font-medium ml-auto bg-indigo-darker hover:bg-indigo" href="#">Amchoor</a>
                  <button class="rounded-full ...">Save Changes</button>
                  <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
              </nav> */}

        
</div>
  )
}
  
export default HomePage