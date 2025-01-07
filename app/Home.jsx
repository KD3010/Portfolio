'use client';
import profile from '@/public/images/profile.png';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <div className='w-full absolute top-[10%] flex flex-col items-center'>
        <Image src={profile} width={300} />
        <div className='flex flex-col items-center -mt-10'>
          <h1 className='blue-gradient_text font-bold text-3xl drop-shadow'>Hi, I am Kushagra Devda</h1>
          <h3 className='font-semibold'>Full Stack Developer | Problem Solver | Technology Enthusiast</h3>
          <p className='w-[55rem] text-center mt-1'>Welcome to my portfolio! I specialize in building scalable, user-centric applications using modern technologies like <b className="font-semibold">React, Next.js, Node.js, and Redux</b>. With a passion for <b className='font-semibold'>solving complex problems and creating seamless digital experiences</b>, I thrive at the intersection of frontend creativity and backend engineering.</p>
          <p className='w-[40rem] text-center mt-1'>I’m always looking for exciting opportunities to work on challenging projects, learn new technologies, and make a positive impact. Explore my work, and let’s connect to discuss how I can bring value to your team!</p>
          <Link href="/contact" className="btn mt-4">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
