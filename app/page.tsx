import Image from "next/image";

export default function Home() {
  return (
    <main> 
      <h1 className="mainHeader">Personal Website</h1> 

      <section> 
        <h2 className="aboutMeHeader">About Me</h2>
        <p className="miniIntro">Hello! I'm Matthew Abounassar, a software engineer. Welcome to my Portfolio website.</p>
      </section>

      <section>
        <h2 className="projectsHeader">Projects</h2>
        <ul className ="projectGrid">
          <li className="projectCard">
            <h3>Project 1: Awesome App</h3>
            <p>A web application that does awesome things.</p>
            <Image 
              src="/images/awesome-app-screenshot.png" 
              alt="Screenshot of Awesome App" 
              width={300} 
              height={200} 
              className="projectImage"
            />
          </li>
          <li className="projectCard">
            <h3>Project 2: Cool Tool</h3>
            <p>A tool that makes your life easier.</p>
            <Image 
              src="/images/cool-tool-screenshot.png" 
              alt="Screenshot of Cool Tool" 
              width={300} 
              height={200} 
              className="projectImage"
            />
          </li>
          <li className="projectCard">
            <h3>Project 3: Amazing Predictor</h3>
            <p>A tool that predicts amazing things.</p>
            <Image 
              src="/images/amazing-predictor-screenshot.png" 
              alt="Screenshot of Amazing Predictor" 
              width={300} 
              height={200} 
              className="projectImage"
            />
          </li>
        </ul>
      </section>
    </main>
  );
}
