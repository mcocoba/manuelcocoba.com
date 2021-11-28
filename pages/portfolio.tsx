import Link from 'next/link';

import Container from './../components/Container';

export default function Portfolio() {
  return (
    <Container title="Portolio – Manuel Cocoba">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Portfolio
        </h1>
        <div className="mb-8 leading-6 text-gray-600 dark:text-gray-400">

          <section>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href="https://weather.manuelcocoba.com/"
                className="w-full block shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src="/static/images/portfolio/weather.jpeg"
                    alt="portfolio"
                    className="transform hover:scale-125 transition duration-2000 ease-out"
                  />
                  <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                    MC Weather
                  </h1>
                  <div className="absolute bottom-5 left-5 font-bold text-xl border-2 border-gray-100 border-solid rounded-md text-xs inline-block py-1 px-2 uppercase text-white bg-black uppercase last:mr-0 mr-1">
                    React
                  </div>
                </div>
              </a>

              <a
                href="https://www.enrutate.info/"
                className="w-full block shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src="/static/images/portfolio/enrutate.jpeg"
                    alt="portfolio"
                    className="transform hover:scale-125 transition duration-2000 ease-out"
                  />
                  <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                    Dashboard - Enrutate
                  </h1>
                  <div className="absolute bottom-5 left-5 font-bold text-xl border-2 border-gray-100 border-solid rounded-md text-xs inline-block py-1 px-2 uppercase text-white bg-black uppercase last:mr-0 mr-1">
                    React
                  </div>
                </div>
              </a>

            </div>
          </section>

        </div>
      </div>
    </Container>
  );
}