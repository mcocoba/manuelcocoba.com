import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Timeline from '../components/Timeline';

import Container from './../components/Container';
import { RainbowHighlight } from "./../components/RainbowHighlight";

export default function About() {

  const colors = ["#F59E0B", "#84CC16", "#3B82F6", "#cc0000", "#F0DB4F"];

  return (
    <Container title="About – Manuel Cocoba">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 leading-6 text-gray-600 dark:text-gray-400">
          <p className="my-8 text-base">
            Hi,
            <RoughNotationGroup show={true}>
              <RainbowHighlight color={colors[0]}>
                <span className="text-xl font-bold text-gray-700 dark:text-gray-200 my-2">I'm Manuel</span>
              </RainbowHighlight>
            </RoughNotationGroup>,
            a passionate and experienced Mexican
            <RoughNotationGroup show={true}>
              <RainbowHighlight color={colors[1]}>
                <span className="text-xl font-bold text-gray-700 dark:text-gray-200">Software Developer</span>
              </RainbowHighlight>
            </RoughNotationGroup>,
            . creative thinker, adept in web and mobile development, working with various technologies to provide quality software solutions to human problems. Focused on delivering value to the final user. Never stop learning and share knowledge are my life mantras.
          </p>
          <p className="my-8 text-base">
            My toolbelt includes:
            <RoughNotationGroup show={true}>
              <RainbowHighlight color={colors[2]}>
                <span className="text-xl font-bold text-gray-700 dark:text-gray-200">React</span>
              </RainbowHighlight>
            </RoughNotationGroup>,
            <RoughNotationGroup show={true}>
              <RainbowHighlight color={colors[3]}>
                <span className="text-xl font-bold text-gray-700 dark:text-gray-200">Ruby on Rails</span>
              </RainbowHighlight>
            </RoughNotationGroup>,
            <RoughNotationGroup show={true}>
              <RainbowHighlight color={colors[4]}>
                <span className="text-xl font-bold text-gray-700 dark:text-gray-300">JavaScript</span>
              </RainbowHighlight>
            </RoughNotationGroup>,

            , leadership and teamwork. Since
            I'm still learning how to build complete products, I don't consider my self a fullstack developer...yet.
          </p>
        </div>

        <Timeline />

      </div>
    </Container>
  );
}