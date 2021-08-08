import Image from "next/image";
import profile from "../public/images/profile.jpg";

const ButtonLink = ({ btnLink }) => {
  return (
    <a
      href={btnLink.linkURL}
      target="_blank"
      className="bg-transparent text-grey hover:opacity-75 py-2 px-4 border border-grey rounded p-4 dark:text-white dark:border-white"
    >
      <img src={btnLink.icon} width={50} height={50} />
      <h3 className="text-lg font-semibold">{btnLink.title}</h3>
      {btnLink.description}
    </a>
  );
};

export default ButtonLink;
