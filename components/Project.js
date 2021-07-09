import clsx from "clsx";
import Image from "next/image";
import "tailwindcss/tailwind.css";

const Project = ({ project, color }) => {
  return (
    <div>
      <div>
        <h2
          className={clsx(
            color === "green" && "text-green",
            color === "red" && "text-red",
            color === "yellow" && "text-yellow"
          )}
        >
          {project.title}
        </h2>
        {/* {project.imgUrl && (
          <Image src={project.imgUrl} width={300} height={300} />
        )} */}
        {project.description && <p>Description: {project.description}</p>}

        <hr />

        {project.date && <p>Date: {project.date}</p>}
      </div>
    </div>
  );
};

export default Project;
