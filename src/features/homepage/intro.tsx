import {
  SiGooglecloud,
  SiReact,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

export const Intro = () => {
  return (
    <section className="mx-auto py-10 border-b border-gray-300">
      <div className={"pb-2"}>
        <h1 className={"font-medium"}>Hey, I'm Rafee 👋</h1>
      </div>
      <div>
        <p>
          I'm currently forecasting chicken sales with at Nando's UK&I with some
          of my favourite technologies:{" "}
        </p>
        <div className={"flex flex-row gap-2"}>
          <SiReact />
          <SiTypescript />
          <SiGooglecloud />
        </div>
      </div>
    </section>
  );
};

// place wave emoji here
