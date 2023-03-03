import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import JobDescriptionStep from '../components/JobDescription/JobDescriptionStep';
import HighlightsStep from '../components/Highlights/HighlightsStep';
import WorkExperienceStep from '../components/WorkExperience/WorkExperienceStep';
import { UserContext } from '../UserContext';
import WriteCoverLetterResultsPage from './CoverLetterResultsPage';

const WORK_EXPERIENCES_INIT = [
  {
    company: 'Amazon',
    jobTitle: 'Software Engineer',
    years: 1,
    details:
      '• Owned the enhancement of security updates page of our macOS desktop application written in Swift, resulting in a more concise and user-friendly interface for users to remediate non-compliant software.\n• Successfully added removal functionality for third-party software to the security updates page, providing users with more options for remediation and further improving compliance across our fleet.\n• Conducted data analysis with SQL queries to investigate and resolve production issues, such as low penetration numbers of an agent, resulting in the discovery of anomaly machines running the agent but not reporting correctly.\n• Developed several agents and compliance modules in Python that were able to communicate with our desktop application and emit events to our data lake, leading to improved data collection and more accurate reporting of non-compliance issues.',
  },
  {
    company: 'SAP',
    jobTitle: 'Software Engineer',
    years: 1,
    details:
      '• Successfully designed and implemented an ETL pipeline for our data lake, resulting in the ingestion, aggregation, and storage of gigabytes of data across multiple cloud accounts in various regions daily.\n• Optimized data processing efficiency by parallelizing lambda invocations with step functions, reducing processing time from several hours to less than one hour.\n• Collaborated with a team of data scientists, engineers, and a designer to develop a web application built with React, Typescript, and Node.js, resulting in a user-friendly and intuitive interface for visualizing latency between data centers.\n• Supported our data scientists by providing timely support for their ad-hoc data requests, enabling them to deliver high- quality insights and presentations to stakeholders.\n• Migrated our Node.js API to an API gateway and lambda functions, resulting in improved scalability and reliability.',
  },
];

const HIGHLIGHTS_INIT = [
  {
    title: 'Led ETL project at SAP',
    details:
      'Led the engineering of the ETL pipelines for the data lake at SAP. During the second week on the team, I took the initiative to draft a design document for the pipelines with components I was familiar with in AWS. My manager took my enthusiasm and bias to action well and appointed me the lead for the project.',
  },
  {
    title: 'Ran crypto newsletter growing to 400 monthly readers.',
    details:
      'I started my own crypto newsletter during the crypto bull run last year. I grew it to 400 monthly readers each month. There I talked about crypto news, entrepreneurial opportunities, and cool projects I was creating in that space. I also joined like-minded communities and even created tooling for popular NFT projects.',
  },
];

export default function WriteCoverLetterPage() {
  const { user, setUser } = useContext(UserContext);
  const [workExperiences, setWorkExperiences] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [jobDescription, setJobDescription] = useState('');
  const [step, setStep] = useState(1);
  const [orders, setOrders] = useState([]);

  const generateCoverLetter = async () => {
    if (user.credits < 100) {
      alert('Insufficient credits.');
      return;
    }

    try {
      const { data } = await axios.patch(`/users/${user.id}/credits`, {
        amount: -100,
      });
      console.log(data);
    } catch (error) {
      console.error(error);

      const status = error.response.status;
      const errorMessage = error.response.data.message;

      if (status === 401) {
        alert('You must be logged in to view this page.');
        navigate('/login');
      }

      if (errorMessage === 'Insufficient credits.') {
        alert('Insufficient credits.');
        return;
      }
    }

    const ordersToProcess = Array(3)
      .fill(null)
      .map(
        () =>
          new Promise((resolve, reject) => {
            axios
              .post('/cover-letters', {
                workExperiences,
                highlights,
                jobDescription,
              })
              .then(({ data }) => resolve(data))
              .catch((error) => reject(error));
          })
      );

    setOrders(ordersToProcess);
    setUser((prev) => ({
      ...prev,
      credits: prev.credits - 100,
    }));
    setStep(4);
  };

  useEffect(() => {
    const fetchUserProfile = () => {
      if (user) {
        console.log('fetching profile');
        axios
          .get(`/users/${user.id}/profile`)
          .then(({ data }) => {
            const { workExperiences, highlights } = data;
            setWorkExperiences(workExperiences);
            setHighlights(highlights);
          })
          .catch((error) => {
            const errorMessage = error.response.data.message;

            if (errorMessage === 'Not authentitcated') {
              alert('You must be logged in to view this page.');
              navigate('/login');
            }
          });
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <>
      <div className="grow flex flex-col justify-start sm:container sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 px-2 sm:px-0 mt-8 sm:mt-0">
        {step < 4 && (
          <>
            <h1 className="text-center mb-6 sm:mb-8">
              Generate Your{' '}
              <span className="block sm:inline-block">Cover Letter</span>
            </h1>
            {step === 1 && (
              <WorkExperienceStep
                step={step}
                setStep={setStep}
                workExperiences={workExperiences}
                setWorkExperiences={setWorkExperiences}
              />
            )}
            {step === 2 && (
              <HighlightsStep
                step={step}
                setStep={setStep}
                highlights={highlights}
                setHighlights={setHighlights}
              />
            )}
            {step === 3 && (
              <JobDescriptionStep
                step={step}
                setStep={setStep}
                jobDescription={jobDescription}
                setJobDescription={setJobDescription}
                generateCoverLetter={generateCoverLetter}
              />
            )}
          </>
        )}
      </div>
      {step === 4 && <WriteCoverLetterResultsPage orders={orders} />}
    </>
  );
}
