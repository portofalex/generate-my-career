const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const PERSONA_PROMPT =
  'Act is if you are a professional cover letter writer. You write enticing cover letters that get your clients interviews. All you need to write a cover letter for your clients is information about their work experiences, other highlights about projects or experiences, and a job description.\n';
const CLIENT_PROMPT =
  "I'm going to act as one of your clients and give you information about my work experiences, other highlights, and the job description of a role I'm applying to. I want you to write me a cover letter using that information. Use my work experiences and other highlights only when it directly relates to the job description, otherwise leave it out. Use information from the job description only if it's mentioned or implied from my work experiences or my other highlights. Rephrase any information you use, make it more concise, avoid being repetitive, and use language that makes me sound excited and passionate about the role.\n";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function generatePromptForCoverLetter(
  workExperiences,
  highlights,
  jobDescription
) {
  let prompt = '';

  prompt += PERSONA_PROMPT;
  prompt += CLIENT_PROMPT;
  prompt += `\n"""\n`;
  prompt += "Here's all of my information:\n";
  prompt += '\nWork Experience:\n';

  for (const w of workExperiences) {
    prompt += `Company Name: ${w.company}\n`;
    prompt += `Job Title: ${w.jobTitle}\n`;
    prompt += `Years of Experience: ${w.years}\n`;
    prompt += `Details:\n${w.details}\n`;
    prompt += '\n';
  }

  prompt += '\nOther Highlights:\n';
  for (const h of highlights) {
    prompt += `${h.title}\n`;
    prompt += `${h.details}\n`;
    prompt += '\n';
  }

  prompt += '\nJob Description:\n';
  prompt += jobDescription;
  prompt += `\n"""\n`;
  prompt += 'Your Cover Letter: {}';

  return prompt;
}

exports.generateCoverLetter = async (
  workExperiences,
  highlights,
  jobDescription
) => {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: generatePromptForCoverLetter(
      workExperiences,
      highlights,
      jobDescription
    ),
    temperature: 0.75,
    max_tokens: 2048,
    stop: ['{}'],
  });

  return completion.data.choices[0].text;
};
