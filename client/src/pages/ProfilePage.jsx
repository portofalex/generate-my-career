import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import WorkExperienceList from '../components/WorkExperience/WorkExperienceList';
import HighlightsList from '../components/Highlights/HighlightsList';
import { UserContext } from '../UserContext';
import { Navigate, useNavigate } from 'react-router-dom';
import WorkExperienceForm from '../components/WorkExperience/WorkExperienceForm';
import HighlightsForm from '../components/Highlights/HighlightsForm';
import Loading from '../components/ui/Loading';

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

export default function ProfilePage() {
  const { user } = useContext(UserContext);
  const [workExperiences, setWorkExperiences] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [isEditingWorkExperience, setIsEditingWorkExperience] = useState(false);
  const [isEditingHighlight, setIsEditingHighlight] = useState(false);
  const [editedWorkExperience, setEditedWorkExperience] = useState(null);
  const [editedHighlight, setEditedHighlight] = useState(null);
  const navigate = useNavigate();

  const updateUserProfile = () => {
    axios
      .put(`/users/${user.id}/profile`, {
        workExperiences,
        highlights,
      })
      .catch((error) => console.error(error));
  };

  const logout = () => {
    axios
      .post('/auth/logout')
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error))
      .finally(() => {
        setUser(null);
        navigate('/login');
      });
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
    <div className="max-w-lg mx-auto space-y-6 sm:space-y-8">
      {!isEditingWorkExperience && !isEditingHighlight && (
        <>
          <h1 className="text-center">Profile</h1>
          <section className="space-y-2">
            <h2>Work Experience</h2>
            <p className="text-sm text-gray-500">
              These are your work experiences that will be used when generating
              documents. You can add new experiences, edit them, or remove them.
            </p>
            <WorkExperienceList
              workExperiences={workExperiences}
              setEditedWorkExperience={setEditedWorkExperience}
              setIsEditing={setIsEditingWorkExperience}
            />
          </section>
          <section className="space-y-2">
            <h2>Other Highlights</h2>
            <p className="text-sm text-gray-500">
              These are your highlights outside of work. These can be projects,
              volunteer work, or any other experiences that you think help you
              stand out.
            </p>
            <HighlightsList
              highlights={highlights}
              setEditedHighlight={setEditedHighlight}
              setIsEditing={setIsEditingHighlight}
            />
          </section>
          <section className="flex justify-between">
            <button
              className="text-sm sm:text-base text-red-500 border border-red-500 hover:text-white hover:bg-red-500 transition-colors"
              onClick={logout}
            >
              Log Out
            </button>
            <button
              className="text-sm sm:text-base text-white bg-purple-500 hover:bg-purple-700 transition-colors"
              onClick={updateUserProfile}
            >
              Save Changes
            </button>
          </section>
        </>
      )}

      {isEditingWorkExperience && (
        <WorkExperienceForm
          editedWorkExperience={editedWorkExperience}
          setEditedWorkExperience={setEditedWorkExperience}
          setIsEditing={setIsEditingWorkExperience}
          setWorkExperiences={setWorkExperiences}
        />
      )}

      {isEditingHighlight && (
        <HighlightsForm
          editedHighlight={editedHighlight}
          setEditedHighlight={setEditedHighlight}
          setIsEditing={setIsEditingHighlight}
          setHighlights={setHighlights}
        />
      )}
    </div>
  );
}
