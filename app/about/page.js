import { skills, experiences } from '@/public/constants';
import Image from 'next/image';
import CTA from '../components/CTA';
import { marked } from 'marked';

const Page = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Kushagra</span>,
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
        I am a passionate <b>Full Stack Developer</b> with hands-on experience in building scalable, user-centric applications using modern technologies like <b>React, Next.js, Node.js, and Redux</b>. My expertise lies in developing robust microservices architectures and leveraging tools like <b>Kafka, Prisma, and Docker</b> to create reliable, high-performance systems.<br/>

At Zscaler, I contributed to their AI-driven <b>data security platform (DSPM)</b> by designing and maintaining <b>scalable UI components</b> using <b>React and optimizing state management</b> to improve load times by <b>30%</b>. I also led key discussions with Product Managers and backend teams, resulting in a <b>30% improvement in API performance</b>.<br/><br/>

Beyond my professional work, I’ve developed impactful projects like ZapMate, a workflow automation platform inspired by Zapier, where I designed a <b>microservices-based architecture</b> using <b>Kafka and Postgres</b>. Another notable project is an Issue Tracker, enabling efficient task management with a highly responsive UI built using <b>Next.js</b>.<br/>

I thrive in collaborative environments, bringing <b>Agile practices and cross-functional teamwork</b> to deliver projects that exceed expectations. My problem-solving mindset and commitment to continuous learning drive me to explore new technologies and deliver innovative solutions.

I’m eager to contribute my skills and expertise to ambitious teams, creating meaningful products that make a lasting impact.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div key={index} className='flex flex-col items-center'>
              <div className="block-container w-20 h-20">
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
              <p>{skill.name}</p>
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
                      <p className="text-slate-800" dangerouslySetInnerHTML={{__html: marked(point)}}></p>
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
