import Image from "next/image";
import hashnodeIcon from "../public/icons/hashnodeIcon.svg";
const ButtonLink = ({ btnLink }) => {
  return (
    <a
      href={btnLink.linkURL}
      target="_blank"
      class="bg-transparent text-grey hover:text-grey py-2 px-4 border border-grey rounded p-4 dark:text-white dark:border-white"
    >
      <Image
        src={hashnodeIcon}
        width={10}
        height={10}
        className="display:inline"
      ></Image>
      <h3 class="text-lg font-semibold">{btnLink.title}</h3>
      {btnLink.description}
    </a>
  );
};

export default ButtonLink;
