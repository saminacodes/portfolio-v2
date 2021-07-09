import clsx from "clsx";
import Image from "next/image";

const Project = ({ project, color }) => {
  return (
    <div>
      <h1
        className={clsx(
          color === "green" && "text-green-600",
          color === "red" && "text-red-600"
        )}
      >
        Title:{project.title}
      </h1>
      {project.imgUrl && (
        <Image src={project.imgUrl} width={300} height={300} />
      )}
      {project.description && <p>Description:{project.description}</p>}
    </div>
  );
};

export default Project;
