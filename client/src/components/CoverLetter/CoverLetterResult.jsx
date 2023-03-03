import { useEffect, useState } from 'react';
import Loading from '../ui/Loading';

export default function CoverLetterResult({ order }) {
  const [isLoading, setIsLoading] = useState(false);
  const [coverLetter, setCoverLetter] = useState(null);

  useEffect(() => {
    const processOrder = async () => {
      try {
        setIsLoading(true);
        const data = await order;
        setCoverLetter(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    processOrder();
  }, []);

  return (
    <div className="relative aspect-[8.5/11] w-full max-w-2xl text-[6.73px] sm:text-[13.33px] p-[37.87px] sm:p-[62.59px] mx-auto mb-6 sm:mb-8 2xl:mb-0 border border-gray-300 shadow-lg whitespace-pre-wrap">
      {isLoading || !coverLetter ? (
        <Loading description="Hold on while our little robots write your cover letter for you." />
      ) : (
        <p>{coverLetter.content}</p>
      )}
    </div>
  );
}
