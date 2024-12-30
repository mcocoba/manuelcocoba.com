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
            a passionate and experienced
            <RoughNotationGroup show={true}>
              <RainbowHighlight color={colors[1]}>
                <span className="text-xl font-bold text-gray-700 dark:text-gray-200">Software Developer</span>
              </RainbowHighlight>
            </RoughNotationGroup>,
            from Mexico, I’m a creative thinker with a knack for web and mobile development, working with a variety of technologies to deliver meaningful software solutions to real-world challenges. My focus is always on creating value for the end user. 'Never stop learning' and 'share knowledge' are the principles I live by.
          </p>
          <p className="my-8 text-base">
            As a full-stack developer, my toolkit includes
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
            </RoughNotationGroup>
            , and much more, along with strong leadership and teamwork skills. I’m constantly evolving my skills to build complete and impactful products—and I’m excited about what’s next!
          </p>
        </div>

        <Timeline />

      </div>
    </Container>
  );
}