import Link from 'next/link';
import { arrow } from '@/public/icons/index';
import Image from 'next/image';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box ">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link className="neo-brutalism-white neo-btn" href={link}>
      {btnText}
      <Image src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, Welcome to the magical world of <span className="font-semibold">Kushagra</span>✨
      <br />A Full Stack Developer from India.
    </h1>
  ),
  2: (
    <InfoBox
      text="Dynamic Full Stack Developer with a flair for crafting engaging, efficient web applications."
      link="/about"
      btnText="Learn more about me"
    />
  ),
  3: (
    <InfoBox
      text="Combined innovative design with robust functionality, creating user-centric web applications."
      link="/projects"
      btnText="Check out my projects!"
    />
  ),
  4: (
    <InfoBox
      text="Interested in elevating your web presence? Let's connect and turn your ideas into digital reality!"
      link="/contact"
      btnText="Contact Me"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
