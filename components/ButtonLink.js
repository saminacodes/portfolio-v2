const ButtonLink = ({ btnLink }) => {
  return (
    <button class="bg-transparent hover:gr text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded p-4">
      {btnLink.title} <br /> {btnLink.description}
    </button>
  );
};

export default ButtonLink;
