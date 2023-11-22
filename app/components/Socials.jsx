import twitter from "../../public/twitter.svg";
import github from "../../public/github.svg";

export default function Socials() {
  return (
    <>
      <a href="https://twitter.com/@tapasadhikary" target="_blank">
        <img className="w-full h-auto" src={twitter} alt="Twitter" />
      </a>
      <a href="https://github.com/atapas" target="_blank">
        <img className="w-full h-auto" src={github} alt="GitHub" />
      </a>
    </>
  );
}
