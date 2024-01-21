import Navbar from "./component/navbar/navbar";
import Image from "next/image";
import homebg1 from "/public/homebanner.png";
export default function Home() {
  return (
    <>
      <div className="p-2">
        <Navbar />
      </div>
      <section className="h-full w-full place-items-center bg-[#ffffff]   relative py-14 lg:mb-20 ">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left pt-10">
            <div className="mb-8 inline-flex items-center">
              <p className="block antialiased font-sans text-sm leading-normal mr-3 py-0.5 px-3 font-bold text-dark uppercase border-r border-dark text-[#9fa8ab]">
                New
              </p>
              <p className="antialiased  text-sm  leading-normal text-inherit flex items-center font-bold uppercase">
                want to find tutors.
              </p>
            </div>
            <h1 className="block antialiased tracking-normal text-[#2c6777]  text-5xl text-blue-gray-900 mb-8 lg:mr-32 leading-tight font-black">
              We help you find{" "}
              <span className="text-[#2c6777]">and manage Best tutors.</span>
            </h1>
            <p className="block antialiased  text-xl font-normal leading-relaxed text-blue-gray-900 lg:pr-32">
              Skilled and Emotionally Intelligent Educators that will make
              learning exciting and engaging.
            </p>
            <div className="mt-2 ">
              <form className="max-w-xl mt-10 p-2 md:p-0 lg:p-0">
                <label className=" text-sm font-medium text-gray-900 sr-only ">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 mt-1 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search tutor,subject..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2 bottom-[5px] bg-[#2c6777]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 "
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex">
          <Image
            src={homebg1}
            alt="components"
            className="absolute h-full top-0 right-0  "
          />
        </div>
      </section>
    </>
  );
}
