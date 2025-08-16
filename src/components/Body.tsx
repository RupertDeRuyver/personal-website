import Skills from "./body-parts/Skills";
import Experience from "./body-parts/Experience";
import Education from "./body-parts/Education";
import Projects from "./body-parts/Projects";

function Body() {
  return (
    <div className="max-w-4xl mx-auto my-16 grid grid-cols-1 gap-16">
      <div>
        <Skills />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
}

export default Body;
