import {
  SiGooglecloud,
  SiReact,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { Icon } from "@/components/icon";

export const Intro = () => {
  return (
    <section className="mx-auto py-10 border-gray-300">
      <h1 className={"font-medium pb-2"}>Hey, I&apos;m Rafee 👋</h1>
      <div>
        <div className={"flex flex-col pb-2 gap-0.5"}>
          <p>
            I&apos;m currently forecasting chicken sales and developing
            frontends at Nando&apos;s UK&I.
          </p>
          <p>Some of my favourite technologies at the moment are:</p>
        </div>
        <div className={"flex flex-col items-start gap-3 ml-2"}>
          <Icon icon={<SiReact />} text={"React"} />
          <Icon icon={<SiTypescript />} text={"TypeScript"} />
          <Icon icon={<SiGooglecloud />} text={"GCP"} />
        </div>
      </div>
    </section>
  );
};

// place wave emoji here
