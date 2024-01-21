import { SiReact } from "@icons-pack/react-simple-icons";
import { ReactNode } from "react";

interface props {
  icon: ReactNode;
  text: string;
}
export const Icon = ({ text, icon }: props) => {
  return (
    <div className={"flex flex-row justify-center gap-2"}>
      {icon}
      <p>{text}</p>
    </div>
  );
};
