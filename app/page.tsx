"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  alt: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Project 1: Awesome App",
    description: "A web application that does some awesome things.",
    imgSrc: "/images/awesome-app-screenshot.png",
    alt: "Screenshot of Awesome App",
  },
  {
    id: 2,
    title: "Project 2: Cool Tool",
    description: "A tool that makes your life easier.",
    imgSrc: "/images/cool-tool-screenshot.png",
    alt: "Screenshot of Cool Tool",
  },
  {
    id: 3,
    title: "Project 3: Amazing Predictor",
    description: "A tool that predicts amazing things.",
    imgSrc: "/images/amazing-predictor-screenshot.png",
    alt: "Screenshot of Amazing Predictor",
  },
];

export default function Home() {

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");

  function handleClick() {
    alert ("Button Clicked!")
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const filteredProjects = PROJECTS.filter((p) => {
    const q = query.trim().toLowerCase();
    if (!q) return true; // no search → show all
    return (
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    setMessage("Count has been updated to " + count);

    const timer = setTimeout(() => {
      setMessage("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [count]);
  return (
    <main> 
      <h1 className="mainHeader">Personal Website</h1> 

      <section> 
        <h2 className="aboutMeHeader">About Me</h2>
        <p className="miniIntro">Hello! I'm Matthew Abounassar, a software engineer. Welcome to my Portfolio website.</p>
      </section>

        {/* Search bar */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects…"
          className="projectSearch"
        />

      <section> 
        <ul className="projectGrid">
          {filteredProjects.length === 0 ? (
            <li style={{ listStyle: "none" }}>
              No results for “{query}”. Try another term.
            </li>
          ) : (
            filteredProjects.map((p) => (
              <li key={p.id} className="projectCard">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <Image
                  src={p.imgSrc}
                  alt={p.alt}
                  width={300}
                  height={200}
                  className="projectImage"
                />
              </li>
            ))
          )}

          <li className ="counterBuiltIn">
            <h3>Interactive Counter</h3>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
          </li>
        </ul>
      </section>
      {message && <p className="updateMessage">{message}</p>}
      <div className="divider">
        
        <button className ="buttonClick" onClick={handleClick}>Click Me!</button>
        <br /> <br />
        <h4>Text Input</h4>
        <input type="text" value={text} onChange={handleChange} placeholder="Type something..." />
        <p>You typed: {text}</p>
      </div>
    </main>
  );
}
