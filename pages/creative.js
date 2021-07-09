import creativeData from "../data/creativeData";
import Project from "../components/Project";

const Creative = () => {
  return (
    <div>
      {creativeData.map((project) => (
        <Project color="pastelRed" project={project} key={project.title} />
      ))}
    </div>
  );
};

export default Creative;
