import communityData from "../data/communityData";
import Project from "../components/Project";

const Community = () => {
  return (
    <div>
      {communityData.map((project) => (
        <Project color="yellow" project={project} key={project.title} />
      ))}
    </div>
  );
};

export default Community;
