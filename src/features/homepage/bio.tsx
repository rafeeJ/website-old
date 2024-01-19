import Link from "next/link";
import { SiGithub, SiGmail, SiLinkedin } from "@icons-pack/react-simple-icons";

export const Bio = () => {
  return (
    <section className="mx-auto py-10 border-b border-gray-300">
      <div className="float-left mb-5 sm:mr-10 w-full sm:w-fit">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
          <img
            src="https://avatars.githubusercontent.com/u/1508676?s=400&u=dbc0d74f489c3c18f4e935f49c59ebc6fd754a71&v=4"
            className="scale-105"
          />
        </div>
      </div>
      <span className="block w-fit mx-auto sm:inline">
        <h1 className="text-2xl font-medium font-sans">Rafee Jenkins</h1>
        <h2 className="text-xl font-normal">Software Engineer</h2>
        <p className="my-1 font-light">Manchester, UK</p>
        <div className="flex flex-row gap-2 justify-center sm:justify-normal">
          <Link
            href={"https://github.com/rafeeJ"}
            className={"rounded-sm border border-gray-300 p-0.5"}
          >
            <SiGithub />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/rafeejenkins/"}
            className={"rounded-sm border border-gray-300 p-0.5"}
          >
            <SiLinkedin />
          </Link>
          <Link
            href={"mailto:rafeejenkins@gmail.com"}
            className={"rounded-sm border border-gray-300 p-0.5"}
          >
            <SiGmail />
          </Link>
        </div>
      </span>
    </section>
  );
};
