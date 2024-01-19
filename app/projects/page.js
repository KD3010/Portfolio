import { projects } from '@/public/constants/index';
import Image from 'next/image';
import Link from 'next/link';
import { arrow } from '@/public/icons/index';
import CTA from '../components/CTA';

const page = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
      </h1>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image
                  src={project.iconUrl}
                  alt={project.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col ">
              <h4 className="font-semibold">{project.name}</h4>
              <p>{project.description}</p>
              <div>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 flex flex-nowrap items-center gap-2"
                >
                  Live Link
                  <Image
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                    width={12}
                    height={12}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default page;
