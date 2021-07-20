import communityData from "../data/communityData";
import Project from "../components/Project";

const Community = () => {
  return (
    <div class="dark:bg-grey">
      {communityData.map((project) => (
        <Project color="yellow" project={project} key={project.title} />
      ))}
    </div>
  );
};

export default Community;
