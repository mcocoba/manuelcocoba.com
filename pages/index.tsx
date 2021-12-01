import { useState, useEffect } from 'react';

import Image from 'next/image';
import { useTheme } from "next-themes";

import Container from '../components/Container';
import Card from '../components/Card';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col items-center">
          <div className="flex flex-col pr-8 items-center">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white ">
              Manuel Cocoba
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Software Developer at{' '}
              <span className="font-semibold">Encora</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
              Solving problems, with or without Software, one at a time and Learning how to build Products with Software.
            </p>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 text-center">
              <Image
                alt="Manuel Cocoba Profile Photo"
                height={176}
                width={176}
                src="/avatar_one.png"
                className="rounded-full filter grayscale"
              />
            </div>
          </div>

        </div>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mt-6 mb-6 text-black dark:text-white">
          Projects
        </h3>

        <div className="flex gap-6 flex-col md:flex-row">
          <Card
            title="Pet Project, Weather app consuming the OpenWeatherAPI"
            url="https://weather.manuelcocoba.com/"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            project="MC Weather"
          />

          <Card
            title="B2B Tool to manage bus fleets and improve passenger experience."
            url="https://www.enrutate.info/"
            gradient="from-[#D8B4FE] to-[#818CF8]"
            project="Admin Dashboard"
          />

          <Card
            title="Your own weather network, custom API to allow IOT devices sense weather data."
            url="https://weather.manuelcocoba.com/"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            project="WIP"
          />
        </div>

      </div>
    </Container>
  )
}
