import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = (props) => {
  const { title, stack } = props;
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">
          {title} &nbsp;
          {stack?.map(item => (
            <div key={item} className="border-2 border-gray-400 border-solid rounded-md text-xs font-semibold inline-block py-1 px-2 uppercase text-black-600 bg-black-200 uppercase last:mr-0 mr-1">
              {item}
            </div>
          ))}
        </p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{props.children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Returned to Hermosillo, Mex.">
        In the end I didn't match with AhorroLibre's ideology and I decided to return to my hometown.
      </Step>
      <Step title="Joined ISEA 🧑🏽‍💻" stack={['PHP', 'Laravel']}>
        I joined ISEA, a government office as lead developer.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Joined AhorroLibre Fintech Startup 🧑🏽‍💻" stack={['PHP', 'Zend Framework']}>
        I joined as a backend developer at another startup.
      </Step>
      <Step title="Moved to Tijuana, Mex.">
        I moved to Tijuana for the 1st time to work at AhorroLibre on-site.
      </Step>
    </ul>
    <Divider />
    <Year>2013</Year>
    <ul>
      <Step title="Joined SerpicoDev 🧑🏽‍💻" stack={['PHP', 'CodeIgniter', 'WordPress']}>
        My former mentor invited me to apply and I made it into SerpicoDev as a freelance remote PHP developer.
      </Step>
    </ul>
    <Divider />
    <Year>2012</Year>
    <ul>
      <Step title="Joined a local startup 🧑🏽‍💻" stack={['PHP', 'CodeIgniter']}>
        I joined a local startup as a software developer and core team member.
      </Step>
      <Step title="Max, my son, arrived 👶🏽">
        On January 26th, the Family got bigger.
      </Step>
    </ul>
    <Divider />
    <Year>2011</Year>
    <ul>
      <Step title="1st Freelance web page." stack={['HTML', 'CSS']}>
        I teamed up with a cousin to develop our 1st webpage. Local mezquite charcoal company.
      </Step>
      <Step title="1st Freelance web app." stack={['PHP', 'CodeIgniter']}>
        I teamed up with a cousin to develop our 1st webapp for a local startup.
      </Step>
    </ul>
    <Divider />
    <Year>2010</Year>
    <ul>
      <Step title="1st National Basketball Tournament.">
        I played my 1st national tournament with my university team (ITH Venados). 5th position out of 12.
      </Step>
      <Step title="Landed my 1st software developer position." stack={['PHP']}>
        Local company focused on real estate appraisals hired me to maintain and develop their internal tools. Php and MySql.
      </Step>
      <Step title="Dropout university.">
        I fell in love with programming and at that point, I'd already passed all the programming-related subjects and I decided to drop out and focus 100% on my software development job.
      </Step>
    </ul>
    <Divider />
    <Year>2009</Year>
    <ul>
      <Step title="First IT job 🔥">
        I worked for a local company as the printer & network and support guy.
      </Step>
      <Step title="Won my 1st Mayor basketball tournament.">
        English Clinic amateur team, we won our 1st "Primera Fuerza" tournament. (Sonora State League - Category A)
      </Step>
    </ul>
    <Divider />
    <Year>2008</Year>
    <ul>
      <Step title="1st web page created.">
        I built my personal website with pure html and css, hosted in AngelFire free hosting tool, sadly I lost the access and the source code.
      </Step>
      <Step title="Winamp Shoutcast radio streaming server.">
        I configured and launched my own internet radio project, with Winamp Shoutcast Server, it was live for 5 months.
      </Step>
    </ul>
    <Divider />
    <Year>2005</Year>
    <ul>
      <Step title="Started university at Instituto Tecnologico de Hermosillo.">
        Started studying for a BA in Information Technology.
      </Step>
      <Step title="University Basketball A Team 🏀 ⛹🏽‍♂️">
        I trained during the summer. As soon as the scholar year started they invited me to the A team.
      </Step>
    </ul>
    <Divider />
    <Year>2003</Year>
    <ul>
      <Step title="1st Software app sold.">
        Microsoft Access app that helped my client to create estimates and budgets
      </Step>
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2022</Year>
      <ul>
        <Step title="Engineering Manager at Drata 🧑🏽‍💻" stack={['React', 'JS', 'TS']}>
          In partnership with Arkus, I'm working as EM at Drata.
        </Step>
      </ul>
      <ul>
        <Step title="Re-joined ArkusNexus 🧑🏽‍💻" stack={['React', 'NestJS', 'JS', 'TS']}>
          I returned to ArkusNexus to work as tech lead and help the organization improve operational activities.
        </Step>
      </ul>
      <Divider />
      <Year>2021</Year>
      <ul>
        <Step title="Joined Encora 🧑🏽‍💻" stack={['React', 'JS', 'TS']}>
          I joined Encora as a software developer, I worked for OpenTable as a contractor frontend developer.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Joined Enrutate 🧑🏽‍💻 🚌" stack={['React', 'JS', 'RoR']}>
          I joined Enrutate as a contractor frontend developer, 10 hours per week.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Became a Tech Lead 👨🏻‍💻" stack={['Android', 'Java']}>
          Starting at the beginning of 2019, I moved into a tech leadership role on an health app development team at ArkusNexus.
        </Step>
        <Step title="Mobile development 🧑🏽‍💻 📱">
          I started developing native android apps with Java.
        </Step>
        <Step title="Started as Freelancer contractor at Dezerta Labs" stack={['React', 'RoR', 'JS']}>
          Working 10 hours per week I helped to build some MVP's.
        </Step>
      </ul>
      <Divider />
      <Year>2018</Year>
      <ul>
        <Step title="Joined at ArkusNexus 🧑🏽‍💻" stack={['RoR', 'React', 'Android', 'Java']}>
          I joined ArkusNexus as a senior software developer.
        </Step>
        <Step title="Moved to Tijuana, Mex.">
          I moved to Tijuana for the 2nd time to work at ArkusNexus on-site.
        </Step>
        <Step title="Wizeline & Dow Jones." stack={['React', 'JS']}>
          Due to a contract with Leap Global Innovation Labs, I officially worked for Wizeline and dow jones as a contractor for 2 months.
        </Step>
      </ul>
      <Divider />
      <Year>2017</Year>
      <ul>
        <Step title="Joined at Leap Global Innovation Labs 🧑🏽‍💻" stack={['RoR', 'React', 'JS', 'WordPress']}>
          A friend invited me to a recently created development company from San Francisco as an associate engineer.
        </Step>
      </ul>

      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}