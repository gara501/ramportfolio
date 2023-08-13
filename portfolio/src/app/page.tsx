import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h2 className="flex items-center gap-4 fixed left-0 top-0 flex w-full text-lg justify-center pb-6 pt-8 lg:text-xl lg:static lg:w-auto  lg:p-4">
          <Image
            className="rounded-full w-16 h-16 object-cover"
            src="/aramlogo.png"
            alt="Aram Logo"
            width={80}
            height={80}
            priority
          />
          ARAM
        </h2>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ul className="flex flex-col">
            <li>
              <a
                className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0 hover:underline"
                href="https://github.com/gara501"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-brands fa-github"></i> Github
              </a>
            </li>
            <li>
              <a
                className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0 hover:underline"
                href="https://twitter.com/aramcoder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-brands fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a
                className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0 hover:underline"
                href="https://www.linkedin.com/in/gonzaloandresramirez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-brands fa-linkedin"></i>Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section className="bg-center bg-no-repeat bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
            Andres Ramirez
          </h1>
          <p className="mb-8 text-lg font-normal text-black-300 lg:text-xl sm:px-16 lg:px-48">
            Software Developer
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 cursor-pointer">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              See My Projects
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="flex flex-col text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <h2 className="mb-8 text-2xl font-extrabold tracking-tight leading-none text-black md:text-3xl lg:text-3xl">
          Projects
        </h2>
        <section className="flex flex-row">
          <div className="project flex gap-8 w-full mb-8">
            <div className="w-6/12 flex flex-col">
              <Image
                className="object-cover"
                src="/project1.jpeg"
                alt="project"
                width={800}
                height={600}
                priority
              />
            </div>
            <div className="w-fit">
              <h3 className="text-xl font-extrabold mb-4">Project Overview</h3>
              <p>
                Crown is a web template that I created targeting the restaurant
                and food industry for people to use for their own restaurant
                business and build trust and engagement with their customers by
                providing them with a better User Interface on the Web. By
                taking User Interface ideas by visiting different types of
                websites of the same industry and even visited platforms like
                dribble to get inspiration for building a good User Interface
                that will bring great results. Feel free to check out the
                Project by visiting the Live Link.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <h2 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-black md:text-3xl lg:text-3xl">
          Projects
        </h2>
      </div>
    </main>
  );
}
