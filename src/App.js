import "./styles.css";
import { useState } from "react";
import Button from "./components/Button";

const techArray = [
  {
    title: "HTML",
    info: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It structures the content and defines elements such as headings, paragraphs, links, images, and more.",
  },
  {
    title: "CSS",
    info: "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. It controls the layout, colors, fonts, and overall visual appearance of the web pages.",
  },
  {
    title: "JavaScript",
    info: "JavaScript is a versatile programming language that allows you to create dynamically updating content, control multimedia, animate images, and pretty much everything else on the web. It’s an essential technology alongside HTML and CSS.",
  },
  {
    title: "React",
    info: "React is a JavaScript library for building user interfaces, particularly single-page applications where data changes over time. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
  },
  {
    title: "Next.js",
    info: "Next.js is a React framework that enables server-side rendering and generating static websites for React-based web applications. It offers features like automatic routing, code splitting, and optimized performance out of the box.",
  },
];

export default function App() {
  [selectedButton, setSelectedButton] = useState("HTML");

  return (
    <div className="App">
      {techArray.map((tech, index) => (
        <div className="container">
          <Button key={index} element={tech.title} />
          <div>{tech.title == selectedButton && tech.info}</div>
        </div>
      ))}
    </div>
  );
}
