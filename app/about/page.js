import { skills, experiences } from '@/public/constants';
import { zscaler } from '@/public/icons';
import Image from 'next/image';
import CTA from '../components/CTA';

const Page = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Kushagra</span>,
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          a passionate full-stack developer with over two years of experience in crafting
          responsive, user-centric web applications. My expertise lies in using React for front-end
          development and Node.js for the back end, ensuring robust and scalable solutions. I thrive
          on understanding and translating client visions into functional web experiences. My focus
          is on effective communication and building strong client relationships. Whether working
          with startups or established businesses, my goal is to deliver high-quality projects on
          time and within budget. As a freelancer, I blend technical skill with a collaborative
          approach, committed to bringing your web development projects to life with professionalism
          and creativity.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                  width={1}
                  height={1}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with all types of companies, levelling up my skills and teaming up with
            smart people. Here's the rundown:
          </p>
        </div>

        {experiences.map((experience, index) => (
          <div key={index} className="mt-10 w-full flex flex-col gap-2">
            <div className="w-full flex flex-col md:flex-row gap-16">
              <Image
                src={experience.icon}
                alt={experience.company_name}
                width={256}
                height={256}
                className="w-[256px] h-[256px] object-contain rounded-[50%] shadow-xl"
              />

              <div className="md:w-[95%] w-[100%]">
                <h3 className="subhead-text">{experience.company_name}</h3>
                <h4 className="font-medium">{experience.date}</h4>
                <ul className="list-disc mt-5">
                  {experience.points.map((point, index) => (
                    <li key={index}>
                      <p className="text-slate-800">{point}</p>
                    </li>
                  ))}
                </ul>
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

export default Page;
