import codingData from "../data/codingData";
import Project from "../components/Project";

const Coding = () => {
  return (
    <div class="dark:bg-grey">
      {codingData.map((project) => (
        <Project color="green" project={project} key={project.title} />
      ))}
    </div>
  );
};

export default Coding;
