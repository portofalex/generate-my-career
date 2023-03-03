import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function IndexPage() {
  const { user } = useContext(UserContext);

  return (
    <div className="relative grow w-full px-8 space-y-16">
      <header className="flex items-center w-full pt-16">
        <div className="w-4/6 space-y-2">
          <h1 className="text-5xl">
            Welcome to
            <br />
            Write My Career
          </h1>
          <p className="text-sm leading-5">
            The one-stop-shop for all your resume and cover letter needs. Say
            goodbye to spending hours writing cover letters and resumes, and
            hello to an efficient and hassle-free experience. Sign up today to
            receive free credits to generate a cover letter in seconds.
          </p>
          <button className="px-8 bg-[#F0832B] rounded-full">Sign Up</button>
        </div>
        <div className="grow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="url(#a)"
            className="w-60 h-60"
          >
            <defs>
              <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="a">
                <stop offset="0%" stop-color="#F0832B" />
                <stop offset="100%" stop-color="#09F4F4" />
              </linearGradient>
            </defs>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
        </div>
      </header>
      <section className="w-1/2 text-center mx-auto space-y-2">
        <h2 className="text-4xl">What We Do</h2>
        <p className="text-sm leading-5">
          We provide a service that creates professional, standout cover letters
          and resumes in seconds. Our AI-powered algorithm takes the information
          you provide and custom-tailors each document to highlight your
          strengths and experiences, giving you the best possible chance of
          getting interviewed.
        </p>
      </section>
      <section className="text-center mx-auto space-y-8">
        <div className="w-1/2 mx-auto space-y-2">
          <h2 className="text-4xl">How It Works</h2>
          <p className="text-sm leading-5">
            Our service is incredibly easy and efficient to use. Generating a
            cover letter only takes 3 simple steps.
          </p>
        </div>
        <div className="w-5/6 flex gap-16 mx-auto">
          <div className="inline-flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>
            <h3 className="text-3xl">Step 1</h3>
            <p className="text-sm">
              Provide us with information on your prior work experience.
            </p>
          </div>
          <div className="inline-flex flex-col items-center pt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
              />
            </svg>
            <h3 className="text-3xl">Step 2</h3>
            <p className="text-sm">
              Share any other experiences or projects outside of work that you
              believe would help set you apart from other candidates.
            </p>
          </div>
          <div className="inline-flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>
            <h3 className="text-3xl">Step 3</h3>
            <p className="text-sm">
              Copy and paste the job description of the role you are applying
              to.
            </p>
          </div>
        </div>
      </section>
      <div id="landing-orb-1"></div>
      <div id="landing-orb-2"></div>
      <div id="landing-orb-3"></div>
    </div>
  );
}
