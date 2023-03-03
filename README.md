# Generate My Career
Generate My Career is a platform for generating common career documents such as cover letters, resumes, and LinkedIn summaries. It helps professionals save time during their job search by generating these documents in seconds as opposed to spending hours writing the documents themselves.

## Why I Made This Project
Generate My Career is a fun side project exploring [ChatGPT](https://openai.com/blog/chatgpt) and its content generation capabilities. I've been consulting the bot ever since its public release back in November 2022, using it to answer queries, explain complex concepts, and generate content.

As I'm currently job hunting, I've been using ChatGPT frequently to do things like summarizing my resume, rephrasing my resume bullet points to be more results-oriented, and even generating my entire LinkedIn profile summary. There is one type of document that I've been neglecting though, and that's a cover letter! Those pesky things... Not only do they take forever to write, but you'd have to write one for every company that you're interested in. Because of this, that became the focus for Generate My Career.

## Live Version
You can visit the live version of the web app here. You have to sign up to use the platform, but you get 500 credits for signing up! That's enough credits to generate 5 different cover letters with 3 variations each (15 cover letters).

### Why Do I Charge Credits?
Well, that's a simple question to answer. I'm desperately relying on OpenAI's free tier to use their API. The app is not a paid service, but limiting the amount of generations a user can perform will hopefully allow more people to try (or simply extend the lifespan of my app lol).

## Demo - Generating a Cover Letter
Generating a cover letter in the web app is fairly simple and only requires 3 steps:
1. Input your work experience.
2. Input any highlights outside of work that would help you stand out. This is optional.
3. Copy-paste the job description of the role you're applying to.

Once you click "Generate", the app will take about 10-20 seconds to generate 3 variations of your cover letter.

### Context
In this demo, I use bullet points from my resume for my work experience at Amazon and SAP. Since I'm applying to a crypto-related job, I chose to highlight one of my experiences building projects in the NFT space. The work experiences and highlights I add are saved in case I want to use them again in the future.

The two videos below depict this demo.

[Demo Pt.1](https://user-images.githubusercontent.com/126841486/222686639-4d231b8d-69dc-4585-a39a-f853aff6f3a5.mp4)

[Demo Pt.2](https://user-images.githubusercontent.com/126841486/222686793-b1a399c7-66cf-4c21-b1bd-bfb7cec8a70a.mp4)

### Demo Result
One of the cover letters generated from the demo is below. It's a bit copy-paste from ChatGPT, but still, it's a usable cover letter! It beats spending hours writing them yourself that's for sure. The variance in the quality produced is the reason why I have the web app generate 3 variations for one generation.

![Demo Result](https://user-images.githubusercontent.com/126841486/222688785-dae5ce6a-3883-40e8-bf15-692aee69ecf4.png)

### Other Screenshots
These are screenshots of other pages of the app.

![Cover Letters Page](https://user-images.githubusercontent.com/126841486/222692064-829f5d36-b2ad-4543-b4d9-dc1353c481b2.png)

![Profile Page](https://user-images.githubusercontent.com/126841486/222692092-46b63ab6-ddb5-43c1-97de-c9819e257dda.png)

## Features
* Users
  * Simple session authentication using jwt
  * General CRUD operations
* Cover Letters
  * Generate cover letters using ChatGPT's API
  * Copy-to-clipboard cover letter text
  * General CRUD operations

## Roadmap
* Auth
  - Implement third-party auth like gmail
* Users
  - Implement resume parser to populate work experiences and other highlights
  - Allow users to choose which work experiences and highlights to use for generation
* Resumes
  - Generate resumes by providing information
  - Generate resumes using a template
  - Download resumes in various formats (.docx, .LaTeX, etc)
* Summaries
  - Generate LinkedIn summary by providing information

## Tech Stack
* [React](https://reactjs.org/)
* [Tailwindcss](https://tailwindcss.com/docs/screens)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [ChatGPT API](https://platform.openai.com/overview)
* Vercel
* Railway
* Atlas
