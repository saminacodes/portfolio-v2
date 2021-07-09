import clsx from "clsx";
import Image from "next/image";
import "tailwindcss/tailwind.css";

const Project = ({ project, color }) => {
  return (
    <div>
      <h1
        className={clsx(
          color === "pastelGreen" && "pastelGreen",
          color === "pastelRed" && "pastelRed",
          color === "pastelYellow" && "pastelYellow"
        )}
      >
        {project.title}
      </h1>
      {project.imgUrl && (
        <Image src={project.imgUrl} width={300} height={300} />
      )}
      {project.description && <p>Description: {project.description}</p>}

      <hr />

      {project.date && <p>Date: {project.date}</p>}
    </div>
  );
};

export default Project;
