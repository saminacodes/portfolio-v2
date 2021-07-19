import linkData from "../data/linkData";
import Image from "next/image";
import ButtonLink from "../components/ButtonLink";
import profilePic from "../public/images/profile.jpg";

const Links = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen py-2 p-16 dark:bg-grey">
      <Image
        src={profilePic}
        alt="picture of Samina"
        class="shadow rounded-full max-w-sm h-auto align-middle border-none"
      />
      <div></div>
      {linkData.map((btnLink) => (
        <ButtonLink btnLink={btnLink} key={btnLink.title} />
      ))}
    </div>
  );
};

export default Links;
