'use client';
import { Suspense, useRef as UseRef, useState as UseState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import UseAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const page = () => {
  const formRef = UseRef(null);
  const [currentAnimation, setCurrentAnimation] = UseState('idle');
  const { alert, showAlert, hideAlert } = UseAlert();

  const [form, setForm] = UseState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = UseState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Kushagra',
          from_email: form.email,
          to_email: process.env.NEXT_PUBLIC_EMAIL_JS_RECIEVER_EMAIL,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: 'Message sent succesfully!',
          type: 'success',
        });

        setTimeout(() => {
          hideAlert();
          setForm({ name: '', email: '', message: '' });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        //Show error message
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in touch</h1>
        <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit} ref={formRef}>
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button type="submit" className="btn" onFocus={handleFocus} onBlur={handleBlur}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] lg:ml-48">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[4, 0, 14]} />
          <ambientLight intensity={0.5} />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.6, 0.6, 0.6]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default page;
